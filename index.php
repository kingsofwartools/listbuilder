<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
	<title>Kings of War 3 listbuilder</title>
	<meta http-equiv="cache-control" content="max-age=0" />
	<meta http-equiv="cache-control" content="no-cache" />
	<meta http-equiv="expires" content="0" />
	<meta http-equiv="expires" content="Tue, 01 Jan 1980 1:00:00 GMT" />
	<meta http-equiv="pragma" content="no-cache" />
	<meta name="description" content="Maintained by Guy Harper-Day">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <link href="bootstrap/css/bootstrap-theme.min.css" rel="stylesheet">
    <link href="style.css" rel="stylesheet">
</head>
<body role="document">
	<div class="container max">
		<div class="title clearfix">
			<div id="backbtn" class="pull-left" style="visibility:hidden"><button onclick="ViewMain()" class="btn btn-xs btn-primary"><span class="glyphicon glyphicon-backward"></span></button></div>
		Kings of War 3 listbuilder
			<div id="printbtn" class="pull-right" style="visibility:hidden"><button onclick="ViewPrint()" class="btn btn-xs btn-primary"><span class="glyphicon glyphicon-print"></span></button></div>
		</div>

		<div id="view_main" class="view">
			<div id="armylist" class="dynamic"></div>
		</div>

		<div id="view_factions" class="view">
			<div id="factions" class="dynamic"></div>
		</div>

		<div id="view_units" class="view">
			<div id="units" class="dynamic"></div>
		</div>

		<div id="view_print" class="view">
			<div id="print" class="dynamic"></div>
		</div>

		<div id="view_options" class="view">
			<table class="subTable subtitle clearfix"><tr>
				<td>
				</td>
				<td>
					Unit Options
				</td>
				<td>
				</td>
			</tr></table>
			<div id="options" class="dynamic"></div>
		</div>

		<div id="view_prompt" class="view">
			<div id="prompt" class="dynamic"></div>
			<div role="group" class="btn-group btn-group-justified">
				<div role="group" class="btn-group">
					<button class="btn btn-warning" onclick="DeleteUnit()">Delete</button>
				</div>
				<div role="group" class="btn-group">
					<button class="btn btn-danger" onclick="TogglePrompt()">Cancel</button>
				</div>
			</div>
		</div>

	</div>

	<script src="jquery.min.js" ></script>
	<script src="bootstrap/js/bootstrap.min.js"></script>
	<script src="dataset-full.16.js"></script>
	<script src="common.js" ></script>
	<script src="factions.2.js" ></script>
	<script src="main.js" ></script>
	<script src="units.js" ></script>
	<script src="options.js" ></script>
	<script src="print.2.js" ></script>
	<script>$( document ).ready(function() { boot(); } );</script>
</body>
</html>
