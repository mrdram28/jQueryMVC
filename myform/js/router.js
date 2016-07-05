define([
	'jquery',
	'crossroads',
	'controllers/form.controller',
	'controllers/dashboard.controller'
	], function($, crossroads, FormCtrl, DashboardCtrl){


	var initialize = function(){
	// Define the routes
	crossroads.addRoute('/', function() {
	    console.log("Home Page..");
	});
	crossroads.addRoute('/dashboard', function() {
	    DashboardCtrl.renderTable();
	});
	crossroads.addRoute('/form', function() {
	    FormCtrl.renderForm();
	});
	

	//Listen to hash changes
	window.addEventListener("hashchange", function() {
	    var route = '/';
	    var hash = window.location.hash;
	    if (hash.length > 0) {
	        route = hash.split('#').pop();
	    }
	    crossroads.parse(route);
	});

	// trigger hashchange on first page load
	window.dispatchEvent(new CustomEvent("hashchange"));

	};

	return {
	    initialize: initialize
	  };

});