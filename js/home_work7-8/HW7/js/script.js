"use strict";

$(function(){
	
	var $tabs = $('.tab');
	var $content = $('.tab_content');
	
	$tabs.on('click', function(){

		$content.hide();

		var tabId = $(this).attr('id');
		$tabs.each(function(){
			if ($(this).attr('id') == tabId) {
				$(this).addClass('active');
				$('#' + tabId + '_content').show();
			} else {
				$(this).removeClass('active');
			}
		});
	});
});
