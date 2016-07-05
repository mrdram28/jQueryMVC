requirejs.config({
    baseUrl: 'js',
    paths: {
      'jquery': 'libs/jquery/jquery-1.12.4.min',
      'jquery-ui': 'libs/jquery/jquery-ui.min',
      'bootstrap': 'libs/bootstrap/bootstrap.min',
      'crossroads': 'libs/crossroads/crossroads.min',
      'signals': 'libs/crossroads/signals.min',
      'formbuilder': 'libs/formbuilder/formbuilder',
      'vendor': 'libs/formbuilder/vendor/js/vendor',
      
    },
    shim: {
      'bootstrap': {
            deps: ['jquery'],
        },
      'crossroads': {
            deps: ['signals'],
       },
      'formbuilder': {
            deps: ['vendor'],
       }
    }
});

require([
  // Load our app module and pass it to our definition function
  'app',
], function(App){
  // The "app" dependency is passed in as "App"
  App.initialize();
});