define([
	"jquery",
	"config",
	"utils/ajaxclient",
	
	], function($, config, ajaxClient){

	//cache DOM
	var _$containerEl = $('#container');
	var _$formBuilderEl = $('#form-builder');
	var _$saveButton = $('#save');
	var _$publishButton = $('#publish');
	var _$cancelButton = $('#cancel');
	var _$previewButton = $('#preview');

    var renderForm = function () {
    	var $formBuilderDiv = $("<div />");
    	$formBuilderDiv.attr("id", "form-builder");

    	fb = new Formbuilder({
        selector: $formBuilderDiv,
        bootstrapData: [
          {
            "label": "Do you have a website?",
            "field_type": "website",
            "required": false,
            "field_options": {},
            "cid": "c1"
          },
          {
            "label": "Please enter your clearance number",
            "field_type": "text",
            "required": true,
            "field_options": {},
            "cid": "c6"
          },
          {
            "label": "Security personnel #82?",
            "field_type": "radio",
            "required": true,
            "field_options": {
                "options": [{
                    "label": "Yes",
                    "checked": false
                }, {
                    "label": "No",
                    "checked": false
                }],
                "include_other_option": true
            },
            "cid": "c10"
          },
          {
            "label": "Medical history",
            "field_type": "file",
            "required": true,
            "field_options": {},
            "cid": "c14"
          }
        ]
      });

	_$containerEl.html($formBuilderDiv);

		
		fb.on('save', function(payload){
	        console.log(payload);
	    });
    };

    

    return {
		renderForm: renderForm
        
	};

});
