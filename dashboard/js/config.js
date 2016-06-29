requirejs.config({
    "baseUrl": "js/lib",
    "paths": {
      "jquery": "jquery-1.12.4.min",
      "bootstrap": "bootstrap.min",
      
      "handlebars_runtime": "handlebars.runtime",
      "app": "../app",
      "templates": "../templates",
      "templatesCompiled": "templates/templatesCompiled"
      
    },
    "shim": {
        "bootstrap": {
            deps: ["jquery"],
            
        },
        "templatesCompiled":{

        	 deps: ["jquery","handlebars"],
        }
      }
});

require(["bootstrap", "../app"]);

