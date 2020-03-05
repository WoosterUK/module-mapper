function TaughtModule(kwargs) {
	this.__modc = kwargs['code'];
	this.__name = kwargs['name'];
	this.__note = null;
	
	if (!kwargs['preq']) {
		this.__preq = null;
	}
	else {
		//console.log("module " + this.__modc + " preq " + kwargs['preq']);
		this.__preqtext = kwargs['preq'];
		try {
			this.__preq = compileExpression(kwargs['preq']);
		}
		catch(err) {
			console.log("ERROR: in code " + this.__modc + " on preq " + kwargs['preq']);
			this.__preq = null;
			this.__note = kwargs['preq'];
		}
	}
	
	if (!kwargs['excl']) {
		this.__excl = null;
	}
	else {
		this.__excl = kwargs['excl'];
	}
	
	this.__link = kwargs['link'];
	this.__inac = kwargs['inac'];
	this.__seme = kwargs['seme'];
	this.__cred = kwargs['cred'];
	
	if (!kwargs['repl']) {
		this.__repl = null;
	}
	else {
		this.__repl = kwargs['repl'];
		if (!this.__excl) {
			this.__excl = this.__repl;
		}
		else {
			this.__excl.push(this.__repl)
		}
	}

	if (!kwargs['defu']) {
		this.__defu = false;
	}
	else {
		this.__defu = kwargs['defu'];
	}
	
	this.get = function(basis) {
		let fns = {
			"excl": this.getExcl(),
			"seme": this.getSeme(),
			"cred": this.getCred(),
			"code": this.getCode(),
			"level":this.getLevel(),
			"name": this.getName(),
			"repl": this.getRepl(),
			"defu": this.getDefu()
		};
		
		try { return fns[basis]; }
		catch { return null; }
	}
	
	this.getExcl = function() { return this.__excl; }
	
	this.getSeme = function() { return this.__seme; }
	
	this.getCred = function() { return parseInt(this.__cred); }
	
	this.getCode = function() { return this.__modc; }
	
	this.getLevel = function() { return this.__modc.charAt(4); }
	
	this.getName = function() { return this.__name; }
	
	this.getPreq = function() { return this.__preq; }
	
	this.getLink = function() { return this.__link; }
	
	this.getNote = function() { return this.__note; }
	
	this.getInac = function() { return this.__inac; }

	this.getRepl = function() { return this.__repl; }

	this.getDefu = function() { return this.__defu; }
	
	this.getSatisfy = function(taken, implications) {
		let output = true;
		if (this.getPreq()) {
			let arguments = {};
			for (const i of taken) {
				arguments[i] = true;
				if (implications[i]) {
					arguments[implications[i]] = true;
				}
			}
			output = this.getPreq()(arguments);
		}
		return output;
	}
	
	this.getStatus = function(T, I) {
		if (T.includes(this.getCode())) {
			return 'chos';
		}
		
		let e = this.getExcl();
		for (const i of T) {
			if ((e !== null) && (e.includes(i))) {
				//console.log("EXCL " + this.getCode() + " on account of " + i + " with excl " + this.getExcl());
				return 'excl';
			}
		}
		
		if (this.getSatisfy(T, I)) {
			return 'neut';
		}
		
		return 'unsa';
	}
}

function Modules() {
	this.data = [];
	this.taken = [];
	this.sorter = 'code';
	this.reverse = false;

	function checkDefunct(D = false) {
		return function(M) {
			return M.get('defu') == D;
		}
	}

	function getModuleByCode(code) {
		return function(M) {
			return M.get('code') === code;
		}
	}
	
	this.getModulesByLevel = function(level) {
		let output = [];
		for (const value of this.data) {
			if (value.getLevel() == level) {
				output.push(value);
			}
		}
		
		return output;
	}
	
	this.getModules = function(S = false, D = false) {
		if (!S) { 
			return this.data.filter(checkDefunct(D));
		}
		else { return this.sort(this.compare(S)).data.filter(checkDefunct(D)); }
	}

	this.addExclusion = function(code, excl) {
		let module = this.data.filter(getModuleByCode(code));
		module.addExcl(excl);
	} // WARNING: untested!
	
	this.btnToggleModule = function(module) {
		if (this.taken.includes(module)) {
			for (let i in this.taken) {
				if(this.taken[i] == module) {
					this.taken.splice(i,1);
				}
			}
		} else {
			this.taken.push(module);
		}
		return true;
	}
	
	this.reset = function() {
		this.taken = [];
		this.reverse = true;
		this.sort("code");
	}
	
	this.compare = function(basis, reverse = false) {
		//console.log(`Comparing based on ${basis}`);
		let R = 1;
		if (reverse) {
			console.log("Reversing order of comparison.")
			R = -1;
		}

		let compareBy = function(basis, M, N) {
			let u = null;
			let v = null;
			try {
				u = M.get(basis);
				v = N.get(basis);
			} catch { return null; }
			//console.log(`GOT ${u} and ${v}`);
			if (u < v) { return -R; }
			if (u == v) { return 0; }
			if (u > v) { return R; }
			return null;
		}

		return function(M, N) {
			return compareBy(basis, M, N);
		};
	}

	this.sort = function(S) {
		if (['code','seme','cred'].includes(S)) {
			console.log(`Sorting on ${S}`)
			if (this.sorter == S) {
				this.reverse = !this.reverse;
			} else {
				this.reverse = false;
				this.sorter = S;
			}
			this.data = this.data.sort(this.compare('code')).sort(this.compare(S, this.reverse));
			return this
		} else { return this }
	}
}

Modules.prototype.push = function push() {
  Array.prototype.push.apply(this.data, arguments);
}