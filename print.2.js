function ViewPrint(){ // view the current army list
	if(_sections.length == 0) // no army to view
	{
		ViewFactions();
		return;
	}
	View("print");
	$("#backbtn").css("visibility", "visible");

	var div = $("#print");
	div.empty();

	_points = []; // clear the points calculator, faction table pointers
	var tr = [];
	for(fi = 0; fi < _catalog.length; fi++)
	{
		tr.push(0);
		_points.push(0);
	}


	var tb = E("tbody")
			.append(
				E("tr")
				.append(E("th",{colspan:9, class:"center"}).text("Total: ").append(E("span", {id:"total"})).append("pts"))
				)
			.appendTo(E("table", {class:"subTable smtxt printTable"}).appendTo(div));

	for(si = 0; si < _sections.length; si++)
	{
		// faction header
		if($("#faction_"+_sections[si].fi).length == 0)
		{
			tr[_sections[si].fi] = E("tr",{id:"faction_"+_sections[si].fi, class:"factionPrintRow"})
			.appendTo(tb);

			var td = E("td",{colspan:9,align:"center"})
				.text(_catalog[_sections[si].fi].faction)
				.append(E("span", {id:"factionPoints_"+_sections[si].fi}))
				.append(E("span", {id:"factionPerc_"+_sections[si].fi}))
				.appendTo(tr[_sections[si].fi]);

			tr[_sections[si].fi] = E("tr")
				.append(E("th",{class:"center"}).text("Sp"))
				.append(E("th",{class:"center"}).text("Me"))
				.append(E("th",{class:"center"}).text("Ra"))
				.append(E("th",{class:"center"}).text("De"))
				.append(E("th",{class:"center"}).text("Att"))
				.append(E("th",{class:"center"}).text("Ne"))
				.append(E("th",{class:"center"}).text("Pts"))
				.appendTo(tb);

		}

		for(sui = 0; sui < _sections[si].units.length; sui++)
		{
			for(suii = 0; suii < _sections[si].units[sui].length; suii++)
			{
				var uNfo = _sections[si].units[sui][suii];
				var uDta = _catalog[uNfo.fi].units[uNfo.ui];
				var mc = uDta.models[uNfo.ut];
				var points = uDta.values[uNfo.ut];
				var extra = uDta.special.replace('&quot;','"');
				points += _artefacts[uNfo.item].cost;
				if(uDta.special != "" || uNfo.item != 0 || uNfo.options.length != 0)
				{
					for(var oi = 0; oi < uDta.options.length; oi++)
						if($.inArray(oi, uNfo.options) != -1)
						{
							if (typeof(uDta.ovals[oi]) === 'object') {
								points += uDta.ovals[oi][uDta.unitType[uNfo.ut]]
							} else {
								points += uDta.ovals[oi];
							}
							extra = extra + (extra == "" ? "" : ", ") + uDta.options[oi].replace('&quot;','"');
						}
					if(uNfo.item > 0)
						extra = extra + (extra == "" ? "" : ", ") + _artefacts[uNfo.item].name;
				}
				_points[uNfo.fi] += points;

				var mt = $.inArray(uDta.mType, _mTypesIndex);
				var uSize = uDta.models[uNfo.ut] == 1 ? " " : " ("+uDta.models[uNfo.ut]+") ";
				var mType = "(" + _mTypesAbbr[mt] + ")";
				if(uDta.unitType[uNfo.ut] == "He")
					mType = "[Hero " + mType + "]";

				var thisRow = E("tr",{class:"printRow"})
					.append(E("td",{colspan:2	}).text(uDta.name).append(E("I").text(uSize + mType)))
					.append(E("td",{align:"center"}).text(uDta.stats[0]))
					.append(E("td",{align:"center"}).text(uDta.stats[1] == 0 ? "-" : uDta.stats[1] + "+"))
					.append(E("td",{align:"center"}).text(uDta.stats[2] == 0 ? "-" : uDta.stats[2] + "+"))
					.append(E("td",{align:"center"}).text(uDta.stats[3] + "+"))
					.append(E("td",{align:"center"}).text(uDta.att[uNfo.ut]))
					.append(E("td",{align:"center"}).text(uDta.nerve[uNfo.ut]))
					.append(E("td",{align:"center"}).text(points));

				tr[uNfo.fi].after(thisRow);
				tr[uNfo.fi] = thisRow;

				if(extra != "")
				{
					thisRow = E("tr").append(E("td",{colspan:9,class:"extra"}).text(extra));
					tr[uNfo.fi].after(thisRow);
					tr[uNfo.fi] = thisRow;
				}
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
}
