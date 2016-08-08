"use strict";

$(function(){
	
	var $inputs = $('.form_wrapper input');
	var $tooltips = $('.tooltip');

	$inputs.on('mouseover', function(){
		var inpId = $(this).attr('id');
		$('.tool_' + inpId).fadeIn('fast');
	});

	$inputs.on('mouseout', function(){
		var inpId = $(this).attr('id');
		$('.tool_' + inpId).fadeOut('fast');
	});

	$('#help').on('click', function() {
		$tooltips.fadeIn('fast');
		return false;
	});
});
