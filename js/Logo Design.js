jQuery(function(){
	jQuery('.showSingle').click(function(e){
		  jQuery('.targetDiv').hide();
		  jQuery('#section'+$(this).attr('target')).show();
		  $("#dropdownBtn").html($(e.target).text());
	});
});