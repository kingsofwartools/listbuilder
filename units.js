function ViewUnits(fi, uTypes){ // view the unit selection list
	View("units");

	_uTypes = uTypes; // make available for back-tracking from options screen
	var udiv = $("#units");

	// header
	if(_cur.si == -1) { // faction button
		E("div",{class:"btn-group btn-group-justified", role:"group"}).appendTo(udiv)
		.append(
			E("div", {class:"btn-group",role:"group"})
			.append(
				E("button", {class:"btn " + _btnClass[_catalog[fi].alignment]}).click(ViewFactions).text("Select a Faction: " + _catalog[fi].faction)
			)
		);
	}
	else { // faction header
		E("div",{class:"subtitle"}) //factionHead " + _fctnClass[_catalog[fi].alignment]
			.text(_catalog[fi].faction)
			.appendTo(udiv);
	}


	for(ui = 0; ui < _catalog[fi].units.length; ui++)
	{
		var displayed = false;
		var u = _catalog[fi].units[ui];
		for(ut = 0; ut < u.unitType.length; ut++)
		{
			if(
				(uTypes[0] == "T" && u.irregular == 1)
					||
				($.inArray(u.unitType[ut], uTypes) != -1
					&&
					u.irregular == 0)
				)
			{
				displayed = true;
				if($("#unitrow_"+fi+"_"+ui).length == 0)
				{ // unit table header
					var tb = UnitTable(udiv, fi, ui, ut);
				}
				UnitTableRow(tb, u, fi, ui, ut);
			}
		}
		if(displayed && (u.special != "" || u.options.length > 0))
		{
			UnitTableFooter(tb, u);
		}
	}

	E("div",{class:"btn-group btn-group-justified", role:"group"}).appendTo(udiv)
	.append(
		E("div", {class:"btn-group",role:"group"})
		.append(
			E("button", {class:"btn btn-danger"}).click(ViewMain).text("Cancel")
		)
	);
}

function UnitTable(div, fi, ui, ut, si, sui, suii) { // create a stats table and attach it to [div]
	console.log('unitTable')
	if (typeof suii === 'undefined') {
		var si = _cur.si;
		var sui = -1;
		var suii = -1;
	}

	var u = _catalog[fi].units[ui];

	var mt = $.inArray(u.mType, _mTypesIndex);
	var mType = _mTypes[mt];
	if(u.unitType[ut] == "He")
		mType = "Hero (" + _mTypesAbbr[mt] + ")";
		console.log('mt',mt)
		console.log('_mTypesAbbr[mt]',_mTypesAbbr[mt])
	if(u.unitType[ut] == "M" && _mTypesAbbr[mt] != "Mon")
		mType = "Monster (" + _mTypesAbbr[mt] + ")";

	return E("tbody")
	.appendTo(
		E("table", {class:"table unitTable",id:"unitrow_"+fi+"_"+ui})
		.append(
			E("thead")
			.append(
				E("tr",{class:"unitRow"})
				.append(
					E("th",{class:"unitName",colspan:6})
					.text(u.name)
					.append(
						suii != -1
						? // editable listing
							E("button", {class:"btn btn-xs btn-edit btn-primary",_fi:fi,_ui:ui,_ut:ut,_si:si,_sui:sui,_suii:suii})
							.click(SelectUnit)
							.append(
								E("span",{class:"glyphicon glyphicon-wrench"})
								)
						: ""
						)
					)
				.append(
					E("th",{class:"unitModel",colspan:6}).text(mType)
					)
				)
			.append(
				E("tr")
				.append(E("th",{colspan:2}).text("Unit Size"))
				.append(E("th",{class:"center"}).text("US"))
				.append(E("th",{class:"center"}).text("Sp"))
				.append(E("th",{class:"center"}).text("Me"))
				.append(E("th",{class:"center"}).text("Ra"))
				.append(E("th",{class:"center"}).text("De"))
				.append(E("th",{class:"center"}).text("Att"))
				.append(E("th",{class:"center"}).text("Ne"))
				.append(E("th",{class:"center"}).text("Pts"))
				)
			)
		.appendTo(div)
		);
}

function UnitTableRow(tb, unitObj, fi, ui, ut, si, sui, suii, showBtn) { // add a stats table row
	// fi means force index
	// ui means unit index
	// ut means unitType index (eg. 0, 1, 2 for troop/reg/horde etc.)
	// si means section index. a section being a group of units including a core unit.
	// sui means section unit index - the index of the specific unit in the section it's attached to
	// suii means the index of the troop in the troops attached to the unit.
	if (typeof suii === 'undefined') {
		var si = _cur.si;
		var sui = -1;
		var suii = -1;
	}
	if (typeof showBtn === 'undefined') {
		var showBtn = true;
	}
	var points = unitObj.values[ut];
	var u = _catalog[fi].units[ui];
	var mc = $.inArray(u.unitType[ut],_mCountsIndex);
	if(suii != -1)
	{
		showBtn = false;
		var nfo = _sections[si].units[sui][suii]
		for(var oi = 0; oi < u.options.length; oi++)
			if($.inArray(oi, nfo.options) != -1)
			if (typeof(u.ovals[oi]) === 'object') {
				points += u.ovals[oi][u.unitType[ut]]
			} else {
				points += u.ovals[oi];
			}
			if (typeof(_artefacts[nfo.item].cost) === 'object') {
				points += _artefacts[nfo.item].cost[u.unitType[ut]]
			} else {
				points += _artefacts[nfo.item].cost
			}
		_points[fi] += points;
	}

	tb.append(
		E("tr")
		.append(E("td",{colspan:2}).text(u.models[ut] == 1 ? 1 : _mCountsLabel[mc] + " ("+u.models[ut]+")"))
		.append(E("td",{align:"center"}).text(unitObj.unitStrength[ut]))
		.append(E("td",{align:"center"}).text(unitObj.stats[0]))
		.append(E("td",{align:"center"}).text(unitObj.stats[1] == 0 ? "-" : unitObj.stats[1]))
		.append(E("td",{align:"center"}).text(unitObj.stats[2] == 0 ? "-" : unitObj.stats[2]))
		.append(E("td",{align:"center"}).text(unitObj.stats[3]))
		.append(E("td",{align:"center"}).text(unitObj.att[ut]))
		.append(E("td",{align:"center"}).text(unitObj.nerve[ut]))
		.append(E("td",{align:"center",id:"unitcost_"+fi+"_"+ui}).append(
			showBtn ?
			E("button", {class:"btn btn-xs btn-primary",_fi:fi,_ui:ui,_ut:ut,_si:si,_sui:sui,_suii:suii}).click(SelectUnit).text(points)
			: points)
			)
	);
}

function UnitTableFooter(tb, unitObj, item, options, showAllOp, unitType) { // add special/options to the end of the table
	var tf = E("td",{colspan:10,class:"footer"}).appendTo(E("tr").appendTo(tb));
	if(unitObj.special != "")
	E("div")
		.append(E("b").text("Special: "))
		.append(unitObj.special)
		.appendTo(tf)
	;

	if(unitObj.keywords != "")
	E("div")
		.append(E("b").text(""))
		.append(unitObj.keywords)
		.appendTo(tf)
	;

	if(arguments.length < 5)
		showAllOp = true; // show all available options
	if(arguments.length < 4)
		options = [];

	if(unitObj.options.length > 0) // there are options to show
		if(!(options.length == 0 && !showAllOp)) // !(none are selected, and don't show unselected)
			if(showAllOp) // long list version
				var o = E("ul").appendTo(E("div")
					.append(E("b").text("Options: "))
					.appendTo(tf));
			else // short print version
				E("b").text("Options: ").appendTo(tf);


	var bump = "";
	for(var oi = 0; oi < unitObj.options.length; oi++)
	{
		var showOp = true;
		if(!showAllOp)
			if($.inArray(oi, options) == -1)
				showOp = false; // only show options in use
		if(showOp) {
			if(showAllOp) {
				if (typeof(unitObj.ovals[oi]) === 'object') {
					var cost = null
					if (unitType) {
						cost = unitObj.ovals[oi][unitType]
					} else {
						cost = Object.values(unitObj.ovals[oi]).join('/')
					}
					E("li").text(unitObj.options[oi] + " (+"+cost+" pts)").appendTo(o);
				} else {
					E("li").text(unitObj.options[oi] + " (+"+unitObj.ovals[oi]+" pts)").appendTo(o);
				}
			} else {
					if (typeof(unitObj.ovals[oi]) === 'object') {
						var cost = null
						if (unitType) {
							cost = unitObj.ovals[oi][unitType]
						} else {
							cost = Object.values(unitObj.ovals[oi]).join('/')
						}
						tf.append(bump + unitObj.options[oi] + " (+"+cost+" pts)");
						bump = ", ";
					} else {
						tf.append(bump + unitObj.options[oi] + " (+"+unitObj.ovals[oi]+" pts)");
						bump = ", ";
					}
				}
		}

	}


	if(arguments.length >= 3) // show artefact
		if(item > 0)
		if (typeof(_artefacts[item].cost) === 'object') {
			E("div")
			.append(E("b").text("Magic Artefact: "))
			.append(_artefacts[item].name + " (+"+_artefacts[item].cost[unitType]+"pt)")
			.appendTo(tf);
		} else {
			E("div")
			.append(E("b").text("Magic Artefact: "))
			.append(_artefacts[item].name + " (+"+_artefacts[item].cost+"pt)")
			.appendTo(tf);
		}

	return tf;
}

function SelectUnit()
{
	var fi = parseInt($(this).attr("_fi"));
	var ui = parseInt($(this).attr("_ui"));
	var ut = parseInt($(this).attr("_ut"));

	_cur.si = parseInt($(this).attr("_si"));
	_cur.sui = parseInt($(this).attr("_sui"));
	_cur.suii = parseInt($(this).attr("_suii"));

	if(_cur.si != -1) // editing in an existing section
	{
		_section = CopySection(_sections[_cur.si]);
	}

	if(_cur.suii == -1)
	{
		_unit = Unit(fi); // new unit to edit
		_unit.ui = ui;
		_unit.ut = ut;
	}
	else
	{
		_unit = CopyUnit(_sections[_cur.si].units[_cur.sui][_cur.suii]);
	}

	ViewOptions();
}
