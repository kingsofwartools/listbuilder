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
			// if(_catalog[_sections[si].fi].special != "")
			// 	f.children().append(E("br")).append("Faction Special: " + _catalog[_sections[si].fi].special);

		}
		else
			var f = $("#faction_"+_sections[si].fi);
		// section header?
		var uNfo = _sections[si].units[0][0];
		var uDta = _catalog[uNfo.fi].units[uNfo.ui];
		var mc = $.inArray(uDta.unitType[uNfo.ut],_mCountsIndex);
		var tMax = null
		var smReg = null
		var smHL = null
		var lgH = null
		var lgL = null
		if (mc == 1) { // Regiment
			if (uDta.mType === 'I' || uDta.mType === 'HI' || uDta.mType === 'Ch' || uDta.mType === 'C') {
				tMax = 2
				smReg = true
			} else if (uDta.mType === 'LI' || uDta.mType === 'MI' || uDta.mType === 'LC') {
				tMax = 2

			}
		} else if (mc == 2 || mc == 3) { // Horde or legion
			if (uDta.mType === 'I' || uDta.mType === 'HI' || uDta.mType === 'Ch' || uDta.mType === 'C') {
				tMax = 4
				smHL = true
			} else if (uDta.mType === 'LI' || uDta.mType === 'MI' || uDta.mType === 'LC') {
				tMax = 4
				if (mc == 2) {
					lgH = true
				} else if (mc == 3) {
					lgL = true
				}
			}
		}
		var hmwt = _sections[si].units[2].length + _sections[si].units[3].length + _sections[si].units[4].length + _sections[si].units[5].length;
		var sh = E("div",{class:"sectionHead",align:"center"}).appendTo(f);
		sh.append(E("span", {class:"pull-left"}).text(_mCountsLabel[mc]));


		if(_sections[si].units[1].length < tMax) {
			sh.append(E("button",{class:"btn btn-xs btn-primary", _si:si, _suii:-1, _fi:_sections[si].fi, _utype:"T"}).text("+Troop").click(AddUnit));
			}
		if((smReg && hmwt == 0) || (smHL && (_sections[si].units[2].length == 0 && _sections[si].units[5].length == 0)) || (lgH && hmwt < 2 && _sections[si].units[2].length == 0) || (lgL && hmwt < 2 && _sections[si].units[2].length == 0)) {
			sh.append(E("button",{class:"btn btn-xs btn-primary", _si:si, _fi:_sections[si].fi, _utype:"M"}).text("+Mon").click(AddUnit));
			// TODO: check monsters work
			// TODO: check they work correctly with titans
			}
		if((smReg && hmwt == 0) || (smHL && _sections[si].units[3].length == 0) || (lgH && hmwt < 2 && _sections[si].units[3].length == 0) || (lgL && hmwt < 2 && _sections[si].units[3].length == 0)){
			sh.append(E("button",{class:"btn btn-xs btn-primary", _si:si, _fi:_sections[si].fi, _utype:"W"}).text("+War").click(AddUnit));
		}
		if((smReg && hmwt == 0) || (smHL && _sections[si].units[4].length == 0) || (lgH && hmwt < 2 && _sections[si].units[4].length == 0) || (lgL && hmwt < 2 && _sections[si].units[4].length == 0)) {
			sh.append(E("button",{class:"btn btn-xs btn-primary", _si:si, _fi:_sections[si].fi, _utype:"He"}).text("+Hero").click(AddUnit));
			}
		if((smReg && hmwt == 0) || (smHL && (_sections[si].units[2].length == 0 && _sections[si].units[5].length == 0)) || (lgH && hmwt < 2 && _sections[si].units[5].length == 0) || (lgL && hmwt < 2 && _sections[si].units[5].length == 0)) {
			sh.append(E("button",{class:"btn btn-xs btn-primary", _si:si, _fi:_sections[si].fi, _utype:"Ti"}).text("+Titan").click(AddUnit));
			// TODO: check titans work
			// TODO: check they work correctly with monsters
		}
		for(sui = 0; sui < _sections[si].units.length; sui++)
		{
			for(suii = 0; suii < _sections[si].units[sui].length; suii++)
			{
				var uNfo = _sections[si].units[sui][suii];
				var uDta = _catalog[uNfo.fi].units[uNfo.ui];

				var tb = UnitTable(f, uNfo.fi, uNfo.ui, uNfo.ut, si, sui, suii);
				UnitTableRow(tb, uDta, uNfo.fi, uNfo.ui, uNfo.ut, si, sui, suii);
				var tf = UnitTableFooter(tb, uDta, uNfo.item, uNfo.options, false, uDta.unitType[uNfo.ut]);
			}
		}

		var sectionSubHeadText = '';
		if (smReg) {
			sectionSubHeadText = 'Unlocks 2 troops + 1 Hero/Monster/Titan/War Engine'
		} else if (smHL) {
			sectionSubHeadText = 'Unlocks 4 troops + 1 Hero + 1 Mon/Titan + 1 War Engine'
		} else if (lgH) {
			sectionSubHeadText = 'Unlocks 2 troops + any 2 of Hero/Mon/Titan/War Engine'
		} else if (lgL) {
			sectionSubHeadText = 'Unlocks 4 troops + any 2 of Hero/Mon/Titan/War Engine'
		}
		if (sectionSubHeadText) {
			var ssh = E("div",{class:"sectionSubHead clearfix"}).appendTo(f);
			sh.append(E("p").text(sectionSubHeadText));
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

	const duplicates = _sections.reduce((duplicatesDictionary, section, sectionIndex) => {
		section.units.forEach(unit => {
			if (section.fi !== _sections[0].fi) return false;
			if (!unit[0]) return false;
			var u = _catalog[section.fi].units[unit[0].ui];
				if (duplicatesDictionary[u.name]) {
					duplicatesDictionary[u.name]++
				} else if (!(['T','R','H','L'].includes(u.unitType[unit[0].ut]))) {
					duplicatesDictionary[u.name] = 1;
			}
		})
		return duplicatesDictionary
	}, {})

	let maxDuplicates = null;
	if (total < 1500) {
		maxDuplicates = 1
	} else {
		maxDuplicates = Math.floor(total / 1000) + 1
	}

	const largestDuplicates = Math.max(...Object.values(duplicates));
	if (largestDuplicates > maxDuplicates) {
		const tooManyDuplicatesType = Object.keys(duplicates).find(duplicate => {
			return duplicates[duplicate] === largestDuplicates;
		})
		$(".note").text(`Note: for its points value, your list currently contains too many units of type '${tooManyDuplicatesType}'. You will need to either add more points or remove one or more duplicates of this unit`);
	} else {
		$(".note").text('');
	}

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
