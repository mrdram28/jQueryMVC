define(["jquery", "app/globals", "app/ajaxclient", "handlebars_runtime", "templates/templatesCompiled"], function($, globals, ajaxClient,Handlebars){

	var _url = globals.baseUrl + "/" + "assets/json-data/employees.json";

	//cache DOM
	var _$el = $('#employeesTableContainer');
	var _$addNewButton = $('#add-new');
	var _$table = $('#employee-table');
	var _$tableBody = _$table.find('tbody');

	//bind events
    _$addNewButton.on('click', addEmployee);
    
    var _render = function () {

       console.log(globals.baseUrl);

       ajaxClient.do('POST', _url, {}).success(function(response){

       		if(!$.isEmptyObject( response )){
       			var _employees = response.employees;
       			var _employeesLength = _employees.length;
       			console.log( _employeesLength );
       			if( _employeesLength > 0 ){
              var employeeJson = {};
              var employeesArr = [];
	       			$.each( _employees, function(index, employee){
	       				//_$tableBody.append( _drawRow(employee));
                var employeeData = {
                    "firstName": employee.firstName,
                    "lastName": employee.lastName,
                    "empNumber": employee.employeeNumber,
                  }
                  employeesArr.push(employeeData);

	       			});
              employeeJson.employees =  employeesArr;

              console.log(employeeJson);

              var employeesScript = Handlebars.templates.employees(employeeJson);

              $(document.body).append(employeesScript);

       			}else{
       				console.log( "No Rows Available" );
       				_addNoDataRow();
       		}
       			
       		}
  		  		
       }).error(function(response){

       		console.log( "Server Error " + response.status + " " + response.responseText );


       });

    };	
	
	var _drawRow = function (employee) {
		var $row = $("<tr />");
		var employeeFieldLength = Object.keys(employee).length;
		if( !$.isEmptyObject( employee ) ){
			$.each(employee, function(key, value){
				var $cell = $("<td />");
				$cell.append( value );
				$row.append( $cell );
			});
		}else{
				var $cell = $("<td />");
       			$cell.text("No data available!");
       			$cell.attr("colspan", 3);
       			$cell.css("text-align", "center");
       			$row.append($cell);
		}
		
	    
	   return $row;
	};

	/* Adds "no data available" row to the table.
        *************************************************************************/
    var _addNoDataRow = function () {
    	console.log( "No Rows Available" );
        if (_$tableBody.find('>tr').length > 0) {
                return;
            }

            var $tr = $('<tr></tr>')
                .addClass('table-no-data-row')
                .appendTo(_$tableBody);

            var totalColumnCount = _$table.find('thead th').length;
            console.log( totalColumnCount );
            $('<td></td>')
                .attr('colspan', totalColumnCount)
                .addClass('text-center')
                .html("No Data available!")
                .appendTo($tr);
        };

	var addEmployee = function(){


	};

	var update = function(){

	};

	var remove = function(){

	};

	return {
		addEmployee: addEmployee,
        remove: remove,
        update: update,
		render: _render
	};

});