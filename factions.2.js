function ViewFactions(){ // get buttons for the allowed factions
	View("factions");

	var acount = 0;
	var cur_a = -1;
	var g = E("div");

	var allies = [[0,1], [0,1,2], [1,2]];
	var enemies = [2,-1,0];
	var alignments = []; // currently used alignments
	for(si = 0; si < _sections.length; si++)
		alignments.push(_catalog[_sections[si].fi].alignment);

	for(fi = 0; fi < _catalog.length; fi++)
	{
		var a = parseInt(_catalog[fi].alignment);
		var f = _catalog[fi].faction;
		if($.inArray(enemies[a], alignments) == -1 && !(_sections.length && (_catalog[fi].masterList && !(_sections[0].fi === fi))) && !(_sections.length && (_catalog[_sections[0].fi].masterList === _catalog[fi].faction))) // no enemies used, can't ally in units from themed list unless you yourself are the themed list, 
		{
			if(a != cur_a)
			{
				cur_a = a;
				acount = 0;
			}
			if(acount % 3 == 0)
				g = E("div",{class:"btn-group btn-group-justified", role:"group"}).appendTo($("#factions"));

			g.append(
				E("div", {class:"btn-group",role:"group"}).append(
					E("button", {_fi:fi,class:"btn smtxt " + _btnClass[a]}).click(SelectFaction).text(f)
				));
			acount++;
		}
	}
}


function SelectFaction(){ // select a faction
	_cur.fi = parseInt($(this).attr("_fi"));

	_section = Section(_cur.fi); // new section to edit
	ViewUnits(_cur.fi, ["R","H","L"]);
}

function CancelFaction(){
	ViewMain();
}
