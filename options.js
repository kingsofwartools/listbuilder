function ViewOptions() { // view the options for the currently edited unit
	View("options");
	var o = $("#options");

	var u = _catalog[_unit.fi].units[_unit.ui];
	
	// show the table for the selected unit
	var tb = UnitTable(o, _unit.fi, _unit.ui, _unit.ut);
	UnitTableRow(tb, u, _unit.fi, _unit.ui, _unit.ut, _cur.si, _cur.sui, _cur.suii, false);
	var tf = UnitTableFooter(tb, u, 0, [], false);
	
	
	if(u.options.length > 0) { // show the on/off buttons for each option
		var ol = E("ul").appendTo(E("div")
			.append(E("b").text("Options: "))
			.appendTo(tf))
		;
		for(oi = 0; oi < u.options.length; oi++)
		{
			var btn1 = "btn-default";
			var btn2 = "btn-success active";
			if($.inArray(oi, _unit.options) != -1)
			{
				btn2 = "btn-default";
				btn1 = "btn-success active";
			}
			E("li").text(u.options[oi] + " (+"+u.ovals[oi]+" pts)")
			.append(E("br"))
			.append(
				E("div",{class:"btn-group btn-toggle"})
				.append(
					E("button",{class:"btn btn-xs " + btn1, id:"ob_on_"+oi, _oi:oi, _on:1})
					.click(SetOption)
					.text("YES")
					)
				.append(
					E("button",{class:"btn btn-xs " + btn2, id:"ob_off_"+oi, _oi:oi, _on:0})
					.click(SetOption)
					.text("NO")
					)
				)
			.appendTo(ol);
		}
	}

	{ // show the drop-down list of magic items
		var d = E("div").attr("class", "dropdown theme-dropdown clearfix").appendTo(tf);
		E("button")
			.attr("id", "magicitems")
			.attr("type", "button")
			.attr("class", "btn btn-xs btn-primary ")
			.attr("data-toggle", "dropdown")
			.attr("aria-haspopup", "true")
			.attr("aria-expanded", "true")
			.text("Item:")
			.appendTo(d);
		E("span",{id:"unitArtefact"}).text(" " + _artefacts[_unit.item].name + " (+"+_artefacts[_unit.item].cost+" pts)").appendTo(d);
		var ul = E("ul")
			.attr("class", "dropdown-menu")
			.attr("aria-labelledby", "magicitems")
			.attr("id", "magiclist")
			.appendTo(d);

		for(ai = 0; ai < _artefacts.length; ai++)
		{
			// if($.inArray(ai,_items) != -1 && ai != _unit.item)
				// continue; // don't allow multiples of any item
				
			var li = E("li").appendTo(ul);
			var a = E("a")
						.attr("_ai", ai)
						.click(SetArtefact)
						.text(_artefacts[ai].name + " (+"+_artefacts[ai].cost+" pts)")
						.appendTo(li);
		}

		var buttons = E("div",{class:"btn-group btn-group-justified", role:"group"}).appendTo(o);
		
		buttons.append(
			E("div", {class:"btn-group",role:"group"})
			.append(
				E("button", {class:"btn btn-success"}).click(Save).text("Save")
				)
			);
		
		if(_cur.suii != -1) // editing a unit
		{
			buttons.append(
				E("div", {class:"btn-group",role:"group"})
				.append(
					E("button", {class:"btn btn-warning", }).click(DeleteUnitClick).text("Delete")
					)
				);
		}
		buttons.append(
			E("div", {class:"btn-group",role:"group"})
			.append(
				E("button", {class:"btn btn-danger"}).click(Cancel).text("Cancel")
				)
			);
	}
}

function DeleteUnitClick() { // prompt for deletion of a unit
	var nfo = _sections[_cur.si].units[_cur.sui][_cur.suii];
	var u = _catalog[nfo.fi].units[nfo.ui];
	p = $("#prompt");
	p.empty();
	p.append("Delete this unit?");
	p.append(E("div",{id:"deleteName"}).text(u.name + " (" +u.models[nfo.ut] + ")"));
	if(_cur.sui == 0)
		p.append("Deleting a core Regiment or Horde will also delete any attached Troop, Monster, War Engine, or Hero.");
	
	TogglePrompt();
}

function DeleteUnit() { // perform the delete action
	_sections[_cur.si].units[_cur.sui].splice(_cur.suii,1);
	if(_cur.sui == 0)
		_sections.splice(_cur.si,1);
	ViewMain();
}

function TogglePrompt() { // close/open the prompt
	toggle("prompt");
	toggle("options");
}

function toggle(view){
	$("#view_"+view).css("display", $("#view_"+view).css("display") == "block" ? "none" : "block");
}
function Cancel(){
	if(_cur.suii == -1)
		ViewUnits(_unit.fi, _uTypes) 
	else
		ViewMain();
}

function SetArtefact() {
	ai = $(this).attr("_ai");
	_unit.item = ai;
	$("#unitArtefact").text(" " + _artefacts[ai].name + " (+"+_artefacts[ai].cost+" pts)");
	UpdateUnitCost();
}

function UpdateUnitCost() {
	var u = _catalog[_unit.fi].units[_unit.ui];
	var cost = u.values[_unit.ut];
	for(oi = 0; oi < u.options.length; oi++)
		if($.inArray(oi, _unit.options) != -1)
			cost += u.ovals[oi];
	cost +=  _artefacts[_unit.item].cost;
	$("#unitcost_"+_unit.fi+"_"+_unit.ui).text(cost);
}

function SetOption() { // turn an option on/off
	var on = parseInt($(this).attr("_on"));
	var oi = parseInt($(this).attr("_oi"));
	if($.inArray(oi, _unit.options) == -1 && on == 0
		||
		$.inArray(oi, _unit.options) != -1 && on == 1)
		{ return; } // no change, don't do anything
		
	if(on)
	{
		$("#ob_on_"+oi).attr("class", "btn btn-xs btn-success active");
		$("#ob_off_"+oi).attr("class", "btn btn-xs btn-default");
		_unit.options.push(oi);
	}
	else
	{
		$("#ob_off_"+oi).attr("class", "btn btn-xs btn-success active");
		$("#ob_on_"+oi).attr("class", "btn btn-xs btn-default");
		_unit.options.splice($.inArray(oi, _unit.options),1);
	}
	UpdateUnitCost();
}

function Save() { // save the final options, apply to army list, go to list view
	var mc = $.inArray(_catalog[_unit.fi].units[_unit.ui].unitType[_unit.ut], _mCountsIndex);
	var sui = _mCountsSectionUnit[mc]; // section unit index of troop/horde/hero/etc
	var uSrc = _catalog[_unit.fi].units[_unit.ui]; // data source
	if(uSrc.irregular == 1)
		sui = 1; // if irregular, it's always a troop selection
	if(_cur.fi == -1)
		_cur.fi = _unit.fi;

	var unit = CopyUnit(_unit);
	if(_cur.suii == -1) // new unit
		_section.units[sui].push(unit);
	else
		_section.units[sui][_cur.suii] = unit;

	var section = CopySection(_section);
	if(_cur.si == -1) // new section
	{
		section.fi = unit.fi;
		_sections.push(section);
	}
	else
		_sections[_cur.si] = section;
	
	// reset magic items list
	MagicItems()
	
	ViewMain();
}

function MagicItems() {	// reset magic items list
	_items = [];
	for(si = 0; si < _sections.length; si++)
		for(sui = 0; sui < _sections[si].units.length; sui++)
			for(suii = 0; suii < _sections[si].units[sui].length; suii++)
				if(_sections[si].units[sui][suii].item > 0)
					_items.push(parseInt(_sections[si].units[sui][suii].item));
}