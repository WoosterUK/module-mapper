var LEVELS = [1,2,3,5]

var DELTA = {
	"1": ["1","1","2"],
	"2": ["1","2","3"],
	"3": ["2","3","5"],
	"5": ["3","5","5"]
};

var viewlevel = "1";

var getType = function (elem) {
  return Object.prototype.toString.call(elem).slice(8, -1);
};

console.log(`${JSON.stringify(modules.getModules(false, true))}`)

/*var DEFUNCT = {}
for (const i of modules.getModules(false, true)) {
	j = i.get('repl');
	console.log(j)
	if (j !== null) {
		if (getType(j) === 'String') {DEFUNCT[j] = i;}
		if (getType(j) === 'Object') {
			for (const item of j) {
				DEFUNCT[item] = i;
			}
		}
	}
}*/
console.log(`DEFUNCT = ${JSON.stringify(DEFUNCT)}`)

var IMPLICATIONS = {}
for (const i in DEFUNCT) {
	j = DEFUNCT[i]
	IMPLICATIONS[i] = j;
	IMPLICATIONS[j] = i;
}
console.log(`IMPLICATIONS = ${JSON.stringify(IMPLICATIONS)}`)

function updateColour(colour, location) {
	console.log(`view.js: updateColour called with ${colour} at ${location}`);
	let C = "#" + colour;
	document.body.style.setProperty(`--module-${location}`, C);
	return null;
}

function toggleClass(name) {
	console.log("called toggleClass(name) with name " + name);
	let e = document.getElementsByClassName(name);
	console.log("found " + e.length + " objects");
	for (const item of e) {
		console.log("item display is " + getComputedStyle(item, null).display);
		item.classList.toggle("tblHidden");
	}
}

function levelInc() {
	let num = viewlevel;
	console.log("called levelInc(num) with num " + num);
	toggleClass("tblLevel-" + DELTA[num][2]);
	toggleClass("tblLevel-" + DELTA[num][1]);
	viewlevel = DELTA[num][2];
	renderDynamic(viewlevel);
}

function levelDec() {
	let num = viewlevel;
	console.log("called levelDec(num) with num " + num);
	toggleClass("tblLevel-" + DELTA[num][0]);
	toggleClass("tblLevel-" + DELTA[num][1]);
	viewlevel = DELTA[num][0];
	renderDynamic(viewlevel);
}

function btnConstructor(options={'value':false, 'onclick':false, 'id':false}, content='') {
	let S = '<button type="button"';
	for (const key in options) {
		if (options[key]) {
			S += ' ' + key + '=' + options[key];
		}
	}
	S += '>' + content + '</button>';
	return S;
}

function moduleRow(M, S) {
	let module = M;
	let status = S;
	
	let moduleCellBuilder = function(text, centre=false) {
		let tmp = "";

		if (!centre) {
			tmp += `<td class="chkModule-${S}">`;
		} else {
			tmp += `<td class="chkModule-${S}" style="text-align:center">`;
		}

		tmp += text;
		tmp += '</td>';
		return tmp;
	}
	
	let moduleRowBuilder = function() {
		let level = M.getLevel();
		let code = M.getCode();
		let output = "";
		output += `<tr class="tblLevel-${level} tblModule-${code} tblHidden chkModule-${S}"><td></td>`;
		output += moduleCellBuilder(constructorCheckbox());
		// needs any notes; inactivity flag; code and name as link

		output += moduleCellBuilder(`<a class="hrefModule" href="${M.getLink()}" target="_blank">${M.getCode()} ${M.getName()}</a>`);
		output += moduleCellBuilder(`${M.getSeme()}`, centre = true);
		output += moduleCellBuilder(`${M.getCred()}`, centre = true);

		output += "</tr>";
		return output;
	}
	
	let constructorCheckbox = function() {
		let code = M.getCode();
		let checked = (S == "chos");
		let disabled = ((S == "excl") || (S == "unsa"));
		let tmp = "";
		tmp += `<input type="checkbox" name="${code}" value="True" onclick="{modules.btnToggleModule(\'${code}\');renderDynamic(viewlevel);}" `;
		tmp += `class="chkModule-${S}"`;
		if (checked) {
			tmp += ' checked ';
		} else if (disabled) {
			tmp += ' disabled ';
		}
		tmp += '></input>';
		
		if (M.getNote() != null) {
			tmp += '<div class="tooltip"><img src="images/flag.png" style="width:16px;height:16px;">';
			tmp += '<span class="tooltiptext">' + M.getNote() + '</span></img></div>';
		}
		
		if (M.getInac()) {
			tmp += '<div class="tooltip"><img src="images/rotate.png" style="width:16px;height:16px;">';
			tmp += '<span class="tooltiptext">Module not running in <span class="varYear"></span>.</span></img></div>';
		}
		
		return tmp;
	}
	
	return moduleRowBuilder();
}

function defunctRow(M, S) {
	console.log(`called defunctRow with ${M} and ${S}`);
	var tmp = "";

	tmp += `<div class="rTableRow"><div class="rTableCell"><input type="checkbox" name="${M}" value="True" onclick="{modules.btnToggleModule(\'${M}\');renderDynamic(viewlevel);}" `;
	tmp += `class ="chkDefunct-${S}"`;
	if (S == "chos") {
		tmp += ' checked ';
	}
	tmp += `></input></div><div class="rTableCell">${M}</div></div>`

	return tmp;
}

sortingPriority = function(M, S) {
	let arrow = {
		false: "&#9650;",
		true:  "&#9660;"
	};
	if (['code','seme','cred'].includes(S)) {
		if (M.sorter == S) {
			return arrow[M.reverse];
		} else { return ""; }
	} else { return ""; }
}

renderStatic = function(V) {
	let tmp = "<tr>";
	tmp += '<td>';
	if (V != "1") {
		tmp += btnConstructor({'onclick':"levelDec()",'id':"buttonLevelDec"}, content = '&lt;');
	}
	tmp += '</td>';
	tmp += '<td><button onclick="{reset();}">Reset</button></td>';
	tmp += '<th id="tblLevel"></th>';
	tmp += `<th><a onclick="modules.sort('seme');renderDynamic(viewlevel);">Semester ${sortingPriority(modules, 'seme')}</a></th>`;
	tmp += '<th id="tblCredits"></th>';
	tmp += '<td>';
	if (V != "5") {
		tmp += btnConstructor({'onclick':"levelInc()",'id':"buttonLevelInc"},content = '&gt;');
	}
	tmp += '</td>';
	tmp += "</tr>";
	return tmp;
}

renderDynamic = function(L) {
	let idReplacements = {};
	let classReplacements = {};
	{ // set up the tblHeader table row element
		let credits = 0;
		let tmp = "";
		
		tmp += renderStatic(viewlevel);
		
		for (const module of modules.getModules()) {
			let status = module.getStatus(modules.taken, IMPLICATIONS);
			tmp += moduleRow(module, status);
			if ((status == "chos") && (module.getLevel() === L)) {
				credits += module.getCred();
				//console.log(`Adding ${module.getCode()} with ${module.getCred()} credits`);
			}
		}
		
		idReplacements['tblSelector'] = tmp;

		tmp = "";
		{ // set up tblDefunct row element
			
			for (const module of modules.getModules(false, true)) {
				//console.log(module)
				let status = module.getStatus(modules.taken, IMPLICATIONS);
				tmp += defunctRow(module.getCode(), status);
				if ((status == "chos") && (module.getLevel() === L)) {
					//console.log(`Adding ${module.getCode()} with NA credits`);
				}
			}
		}
		//console.log(tmp)
		idReplacements['tblDefunct'] = tmp;

		idReplacements['tblCredits'] = `<a onclick="modules.sort('cred');renderDynamic(viewlevel);">Cr: ${credits} ${sortingPriority(modules, 'cred')}</a>`;
		idReplacements['tblLevel'] = `<a onclick="modules.sort('code');renderDynamic(viewlevel);">Level ${L} ${sortingPriority(modules, 'code')}</a>`;
	}
	
	{
		let classes = {
			'neut': 'Available',
			'unsa': 'Missing pre-requisites',
			'chos': 'Selected'
		};
		let output = "<table>";
		
		for (const key in classes) {
			output += `<tr><td class="chkModule-${key}">${classes[key]}</td></tr>`;
		}
		
		output += "</table>";
		
		//idReplacements['key'] = output;
	}

	{
		classReplacements['varYear'] = DATA["year"];
	}

	for (const key in idReplacements) {
		document.getElementById(key).innerHTML = idReplacements[key];
	}

	for (const key in classReplacements) {
		for (const item of document.getElementsByClassName(key)) {
			item.innerHTML = classReplacements[key];
		}
	}
	
	toggleClass(`tblLevel-${viewlevel}`);

	console.log(`modules = ${JSON.stringify(modules)}`)
}

reset = function() {
	modules.reset();
	viewlevel = "1";
	renderDynamic(viewlevel);
}

resetColours = function() {
	let colours = {
		"neut": "fdf6e3",
		"chos": "a5baa4",
		"unsa": "d87b5d"
	}
	for (const key in colours) {
		let colour = colours[key];
		let upperName = key.charAt(0).toUpperCase() + key.slice(1);
		document.getElementById(`btnModule${upperName}`).jscolor.fromString(colour);
		document.body.style.setProperty(`--module-${key}`, '#'+colour);
	}
}

renderDynamic(viewlevel);
for (const name of ['neut','unsa','chos']) {
  let colour = getComputedStyle(document.documentElement).getPropertyValue(`--module-${name}`);
  let upperName = name.charAt(0).toUpperCase() + name.slice(1);
  //console.log(`DOM made ${name} into ${upperName}.`);
  let e = document.getElementById(`btnModule${upperName}`);
  e.setAttribute('style', 'border:2px solid black; width:100%;');
  e.setAttribute('class',`jscolor`);
  e.setAttribute('data-jscolor', `{valueElement:null, value:'${colour}'}`);
  e.setAttribute('onblur',`updateColour(this.jscolor,'${name}')`);
}