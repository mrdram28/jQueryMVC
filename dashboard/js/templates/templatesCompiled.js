define(["handlebars_runtime"],function(Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['employees'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "                <tr>\r\n                  <td>"
    + alias4(((helper = (helper = helpers.firstName || (depth0 != null ? depth0.firstName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"firstName","hash":{},"data":data}) : helper)))
    + "</td>\r\n                  <td>"
    + alias4(((helper = (helper = helpers.lastName || (depth0 != null ? depth0.lastName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"lastName","hash":{},"data":data}) : helper)))
    + "</td>\r\n                  <td>"
    + alias4(((helper = (helper = helpers.empNumber || (depth0 != null ? depth0.empNumber : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"empNumber","hash":{},"data":data}) : helper)))
    + "</td>\r\n                </tr>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div id=\"employeesTableContainer\" class=\"container-fluid bg-grey\">\r\n      <h1>Employees</h1>\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-4\">Employees table with all records</div>\r\n        <div class=\"col-sm-8\">\r\n          <div class=\"btn-group pull-right\">\r\n            <a href=\"#\" class=\"btn btn-primary\">Export</a>\r\n            <a href=\"#\" id=\"add-new\" class=\"btn btn-default\">Add New</a>\r\n          </div>       \r\n        </div>\r\n        \r\n      </div>\r\n\r\n      <div id=\"employee-table\">\r\n        <table class=\"table table-striped\">\r\n          <thead>\r\n            <tr>\r\n              <th>Firstname</th>\r\n              <th>Lastname</th>\r\n              <th>Employee Number</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.employees : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "          </tbody>\r\n        </table>\r\n      </div>\r\n\r\n\r\n    </div>";
},"useData":true});
});