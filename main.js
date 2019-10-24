function ViewMain(){ // view the current army list
	if(_sections.length == 0) // no army to view
	{
		ViewFactions();
		return;
	}
	View("main");
	$("#printbtn").css("visibility", "visible");
	
	var army = $("#armylist");
	army.empty();
	
	army.append(E("div",{class:"subtitle"}).text("Total: ").append(E("span",{id:"total"})).append("pts"));
	
	_points = []; // clear the points calculator
	for(fi = 0; fi < _catalog.length; fi++)
		_points.push(0);
	
	for(si = 0; si < _sections.length; si++)
	{
		// faction header?
		if($("#faction_"+_sections[si].fi).length == 0)
		{
			var f = E("div",{id:"faction_"+_sections[si].fi})
						.append(
							E("div",{class:"factionHead " + _fctnClass[_catalog[_sections[si].fi].alignment]})
							.text(_catalog[_sections[si].fi].faction)
							.append(E("span", {id:"factionPoints_"+_sections[si].fi}))
							.append(E("span", {id:"factionPerc_"+_sections[si].fi}))
							)
						.appendTo(army);
			if(_catalog[_sections[si].fi].special != "")
				f.children().append(E("br")).append("Faction Special: " + _catalog[_sections[si].fi].special);

		}
		else
			var f = $("#faction_"+_sections[si].fi);
		// section header?
		var uNfo = _sections[si].units[0][0];
		var uDta = _catalog[uNfo.fi].units[uNfo.ui];
		var mc = $.inArray(uDta.unitType[uNfo.ut],_mCountsIndex);
		var tMax = mc == 1 ? 2 : 4;
		var hwm = _sections[si].units[2].length + _sections[si].units[3].length + _sections[si].units[4].length + _sections[si].units[5].length;
		var sh = E("div",{class:"sectionHead clearfix",align:"center"}).appendTo(f);
		sh.append(E("span", {class:"pull-left"}).text(_mCountsLabel[mc]));

		// Infantry, Heavy Infantry, Chariot or Cavalry Regiment: 2 troops + 1 hero/mon/titan/war engine
		// Infantry, Heavy Infantry, Chariot or Cavalry Horde: 4 troops + 1 hero + 1 Mon/Titan + 1 WE
		// Large Infantry, Monstrous Infantry or Large Cavalry Horde: 2 troops + 2 of 1 hero/mon/titan/war engine (max 1 per type)
		// Large Infantry, Monstrous Infantry or Large Cavalry Legion: 4 troops + 2 of 1 hero/mon/titan/war engine (max 1 per type)
		
		if(_sections[si].units[1].length < tMax)
			sh.append(E("button",{class:"btn btn-xs btn-primary", _si:si, _suii:-1, _fi:_sections[si].fi, _utype:"T"}).text("+Troop").click(AddUnit));
		if((hwm == 0 & tMax == 2) || (_sections[si].units[2].length == 0 && tMax == 4))
			sh.append(E("button",{class:"btn btn-xs btn-primary", _si:si, _fi:_sections[si].fi, _utype:"M"}).text("+Mon").click(AddUnit));
		if((hwm == 0 & tMax == 2) || (_sections[si].units[3].length == 0 && tMax == 4))
			sh.append(E("button",{class:"btn btn-xs btn-primary", _si:si, _fi:_sections[si].fi, _utype:"W"}).text("+War").click(AddUnit));
		if((hwm == 0 & tMax == 2) || (_sections[si].units[4].length == 0 && tMax == 4))
			sh.append(E("button",{class:"btn btn-xs btn-primary", _si:si, _fi:_sections[si].fi, _utype:"He"}).text("+Hero").click(AddUnit));

		for(sui = 0; sui < _sections[si].units.length; sui++)
		{
			for(suii = 0; suii < _sections[si].units[sui].length; suii++)
			{
				var uNfo = _sections[si].units[sui][suii];
				var uDta = _catalog[uNfo.fi].units[uNfo.ui];

				var tb = UnitTable(f, uNfo.fi, uNfo.ui, uNfo.ut, si, sui, suii);
				UnitTableRow(tb, uDta, uNfo.fi, uNfo.ui, uNfo.ut, si, sui, suii);
				var tf = UnitTableFooter(tb, uDta, uNfo.item, uNfo.options, false);				
			}
		}
	}
	
	var total = 0;
	for(fi = 0; fi < _catalog.length; fi++)
		total += _points[fi];
	for(fi = 0; fi < _catalog.length; fi++)
		if($("#factionPoints_"+fi).length > 0)
		{
			$("#factionPoints_"+fi).text(" / " + _points[fi] + "pts");
			var perc = parseInt(_points[fi]*10000/total)/100;
			$("#factionPerc_"+fi).text(" / " + perc + "%");
		}
	$("#total").text(total);

	E("div",{class:"btn-group btn-group-justified", role:"group"}).appendTo(army)
	.append(
		E("div", {class:"btn-group",role:"group"})
		.append(
			E("button", {type:"button", class:"btn btn-primary"}).click(AddSection).text("Add a Section")
		)
	)
}

function AddSection() { // add an army section
	_section = Section(_cur.fi); // new section
	_unit = Unit(_cur.fi); //  new unit
	_cur.si = -1;
	ViewUnits(_cur.fi, ["R","H","L"]);
}

function AddUnit() { // add a unit to a section
	_cur.fi = parseInt($(this).attr("_fi"));
	_cur.si = parseInt($(this).attr("_si"));
	_cur.suii = -1;
	var uType = $(this).attr("_uType");

	_section = CopySection(_sections[_cur.si]); // existing section
	_unit = Unit(_cur.fi); // new unit
	ViewUnits(_cur.fi, [uType]);
}