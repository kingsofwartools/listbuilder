var _sections = []; // store the currently selected army
var _section = {}; // current working section
var _items = []; // used items / artefacts
var _unit = {}; // current working unit
var _btnClass = ["btn-success", "btn-warning", "btn-danger"];
var _fctnClass = ["green", "yellow", "red"];
var _uTypes = []; // currently available unit types
var _cur = { fi:-1,si:-1,sui:-1,suii:-1 }; // index of currently open item
var _points = [];

function boot(){ // boot up the system
	ViewFactions();
}

function View(viewname) { // show a specific view
	$(".dynamic").empty();
	$(".view").css("display", "none");
	$("#view_" + viewname).css("display", "block");
	$("#printbtn").css("visibility", "hidden");
	$("#backbtn").css("visibility", "hidden");
}

function Section(fi) {
	_cur.si = -1;
	return { // currently open section
			fi:fi,
			units:[[],[],[],[],[],[]]
			// core, troops, monster, war engine, hero, titan
		}
}

function CopySection(src) { // create a copy of a section
	var section = {
		fi:src.fi,
		units:[[],[],[],[],[],[]]
	};

	for(ui = 0; ui < src.units.length; ui++)
		for(uii = 0; uii < src.units[ui].length; uii++)
			section.units[ui].push(CopyUnit(src.units[ui][uii]));
		
	return section;
}

function Unit(fi) {
	_cur.sui = -1;
	_cur.suii = -1;
	return { // currently open unit
			fi:fi, // catalog faction index
			ui:-1, // catalog unit index
			ut:-1, // unit type index
			live:0, // unit type index
			options:[],
			item:0
		};
}

function CopyUnit(src) { // create a copy of a unit info object

	var unit = {
		fi:src.fi,
		ui:src.ui,
		ut:src.ut,
		options:[],
		item:src.item
	};
	for(i = 0; i < src.options.length; i++)
		unit.options.push(src.options[i]);
	
	return unit;
}

function E(tag, attr) { // create an HTML element with attributes
	var elem = $(document.createElement(tag));
	if(arguments.length == 2)
		for(var i in attr) 
			elem.attr(i,attr[i]);
	return elem; 
}
