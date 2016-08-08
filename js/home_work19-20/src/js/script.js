$(function () {
	$('.banners-item').click(function () {
	        if ($(this).className != 'active') {
	            $(this).siblings().removeClass('active');
	            $(this).addClass('active');
	        } else {
	        	$(this).removeClass('active');
	        }
	});
	
});