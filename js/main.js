


'use strict';


$(window).on('load', function() {
	/*------------------
		Preloder
	--------------------*/
	$(".loader").fadeOut(); 
	$("#preloder").delay(400).fadeOut("slow");

});

(function($) {

	/*------------------
		Navigation
	--------------------*/
	$('.nav-switch').on('click', function(event) {
    $(this).toggleClass('active');
    $('.main-menu').slideToggle(400);
    event.preventDefault();
});
    
	// Mobile submenu toggle
$('.main-menu .has-dropdown > a').on('click', function(e) {
    if ($(window).width() <= 767) {
        e.preventDefault();
        var $li = $(this).parent();
        $li.toggleClass('open');
        $li.children('.sub-menu').slideToggle(300);
    }
});

// Close mobile menu when clicking outside
$(document).on('click', function(e) {
    if ($(window).width() <= 767) {
        if (!$(e.target).closest('.main-menu, .nav-switch').length) {
            $('.main-menu').slideUp(300);
            $('.nav-switch').removeClass('active');
            $('.main-menu .has-dropdown.open').removeClass('open')
                .children('.sub-menu').slideUp(200);
        }
    }
});

// Reset menu on resize
$(window).on('resize', function() {
    if ($(window).width() > 767) {
        $('.main-menu').removeAttr('style');
        $('.sub-menu').removeAttr('style');
        $('.has-dropdown').removeClass('open');
    }
});


	/*------------------
		Background Set
	--------------------*/
	$('.set-bg').each(function() {
		var bg = $(this).data('setbg');
		$(this).css('background-image', 'url(' + bg + ')');
	});


	/*------------------
		Hero Slider
	--------------------*/
	$('.hero-slider').owlCarousel({
		loop: true,
		nav: false,
		dots: true,
		mouseDrag: false,
		animateOut: 'fadeOut',
    	animateIn: 'fadeIn',
		items: 1,
		autoplay: true
	});
	var dot = $('.hero-slider .owl-dot');
	dot.each(function() {
		var index = $(this).index() + 1;
		if(index < 10){
			$(this).html('0').append(index);
			$(this).append('<span>.</span>');
		}else{
			$(this).html(index);
			$(this).append('<span>.</span>');
		}
	});


	/*------------------
		News Ticker
	--------------------*/
	$('.news-ticker').marquee({
	    duration: 10000,
	    //gap in pixels between the tickers
	    //gap: 200,
	    delayBeforeStart: 0,
	    direction: 'left',
	    duplicated: true
	});

})(jQuery);

