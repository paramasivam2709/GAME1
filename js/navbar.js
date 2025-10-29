'use strict';

$(window).on('load', function() {
    // ...existing code...
});

(function($) {
    // Mobile Navigation
    $('.nav-switch').on('click', function() {
        $('.main-menu').slideToggle(400);
        $(this).find('i').toggleClass('fa-bars fa-times');
    });

    // Add this for mobile dropdown toggle
    $('.main-menu .has-dropdown > a').on('click', function(e) {
        if ($(window).width() <= 767) {
            e.preventDefault();
            $(this).next('.dropdown').slideToggle(200);
            $(this).parent().toggleClass('active');
        }
    });

    // Close menu when clicking outside
    $(document).on('click', function(e) {
        if ($(window).width() <= 767) {
            if (!$(e.target).closest('.main-menu, .nav-switch').length) {
                $('.main-menu').slideUp(400);
                $('.nav-switch i').removeClass('fa-times').addClass('fa-bars');
            }
        }
    });

    // ...existing code...
})(jQuery);