define([
	"jquery",
	"config",
	"utils/ajaxclient",
	
	], function($, Config, AjaxClient){

	//cache DOM
	var _$mainContainer = $('#container');
	var _$formListTable = $('#forms-list-table');
	var _$tableBody = _$formListTable.find('tbody');
	var _$addNewButton = $('#add-new');

	/* Creates header (all column headers) of the table.
    *************************************************************************/
    var _createTableHead = function () {
    	$table = $('<table></table>')
    			.attr('id', 'forms-list-table')
                .addClass('table table-striped')
                .appendTo(_$mainContainer);
        var $thead = $('<thead></thead>')
            .appendTo($table);
        var $theadRow = $('<tr></tr>')
        	.appendTo($thead);
        var headerCell = '<th> Template # </th>' +
        				  '<th> Title </th>' +
        				  '<th> Status </th>' +
        				  '<th> Created By </th>' +
        				  '<th> Published On </th>' +
        				  '<th> Action </th>'

           
           $theadRow.append(headerCell);
    };


	var _render = function () {

       _createTableHead();



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


	return {

		renderTable: _render
	}

});