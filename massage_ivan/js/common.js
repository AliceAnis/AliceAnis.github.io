$(document).ready(function() {

	$("#portfolio_grid").mixItUp();

	$(".gallery li").click(function() {
		$(".gallery li").removeClass("active");
		$(this).addClass("active");
	});

	$(".popup").magnificPopup({type:'image'});
	$(".popup_content").magnificPopup({type:"inline", midClick: true});

	$('.feedback button').magnificPopup({
		items: {
			src: '#feedback_popup',
			type: 'inline'
		}
	});

	$('.header_buttons button, .price button, .about_massage button').magnificPopup({
		items: {
			src: '#enroll_popup',
			type: 'inline'
		}
	});

	$('select').styler();

	$(".title_text h1, .title_text > p").animated("fadeInDown", "fadeOutUp");
	$(".s_header, .massage_details").animated("fadeInUp", "fadeOutDown");	

	$(".animation_1").animated("flipInY", "flipOutY");
	$(".animation_2").animated("fadeInLeft", "fadeOutLeft");
	$(".animation_3").animated("fadeInRight", "fadeOutRight");	

	function heightDetect() {
		$(".header").css("height", $(window).height());
		$(".title_wrapper").css("height", $(window).height());
	};
	heightDetect();
	$(window).resize(function() {
		heightDetect();
	});

	$(".toggle_mnu").click(function() {
		$(".sandwich").toggleClass("active");
	});

	$(".top_mnu ul a").click(function() {
		$(".top_mnu").fadeOut(600);
		$(".title_text").removeClass("h_opacity");
		$(".sandwich").toggleClass("active");
	}).append("<span>");

	$(".toggle_mnu").click(function() {
		if ($(".top_mnu").is(":visible")) {
			$(".title_text").removeClass("h_opacity");		
			$(".top_mnu").fadeOut(600);
			$(".top_mnu li a").removeClass("fadeInUp animated");
		} else {
			$(".title_text").addClass("h_opacity");
			$(".top_mnu").fadeIn(600);
			$(".top_mnu li a").addClass("fadeInUp animated");
		};
	});

	$(".portfolio_item").each(function(i){
		$(this).find("a").attr("href", "#work_" + i);
		$(this).find(".port_descr").attr("id", "work_" + i);
	});

	$("input, select, textarea").not("[type=submit]").jqBootstrapValidation();

	$(".top_mnu ul a, .header_menu ul a, .choice a, .title_centered a, .price_button").mPageScroll2id();
	
});

$(window).load(function() { 
	$(".loader_inner").fadeOut(); 
	$(".loader").delay(300).fadeOut("slow"); 
});