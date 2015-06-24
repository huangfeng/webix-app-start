/*
	App configuration
*/

define([
	"libs/webix-mvc/core",
	"helpers/menu"
], function(core, menu){

	//configuration
	var app = core.create({
		id:			"new-app", //change this line!
		name:		"New App",
		version:	"0.1.0",
		debug:		true,
		start:		"/top/start"
	});

	app.use(menu);
	return app;
});