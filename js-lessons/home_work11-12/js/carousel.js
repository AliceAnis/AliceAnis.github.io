(function ($) {
	$.fn.myCarousel = function (options) {
	    var leftArrow = $('.carousel_arrow_left');
	    var rightArrow = $('.carousel_arrow_right');
	    var elementsList = $('.carousel_list');

	    options = $.extend({
	    	pixelsOffset: 150,
	    	currentLeftValue: 0,
	    	maximumOffset: 0
	    }, options);
	    
	    var elementsCount = elementsList.find('li').length;
	    var minimumOffset = - ((elementsCount - 5) * options.pixelsOffset);
	    	 
	    leftArrow.click(function() {
	    	if (options.currentLeftValue != options.maximumOffset) {
	    		options.currentLeftValue += 175;
	        	elementsList.animate({ left : options.currentLeftValue + "px"}, 500);
	    	}
	    });
	 
	    rightArrow.click(function() {
	    	if (options.currentLeftValue != minimumOffset) {
	    	options.currentLeftValue -= 175;
	        elementsList.animate({ left : options.currentLeftValue + "px"}, 500);
	    	}
	    });
	    return this;
	}
})(jQuery);