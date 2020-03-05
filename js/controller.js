modules = new Modules();

for (let i in DATA["modules"]) {
	modules.push(new TaughtModule(DATA["modules"][i]));
}

var DEFUNCT = {};
var tmp = [];
for (const m of modules.getModules()) {
	var code = m.get('code');
	var repl = m.get('repl');
	if (repl && !(tmp.includes(repl))) {
		DEFUNCT[repl] = code;
		tmp.push(repl);
		modules.push(new TaughtModule(
		{
			"code": repl,
			"name": '',
			"excl": code,
			"link": '',
			"inac": '',
			"seme": '',
			"cred": 'NA',
			"repl": '',
			"defu": true
		}))
	}
}
//console.log(tmp);
tmp = "";

modules.sort('code').sort('code');