(function($) {
    "use strict";
    
    $(window).on('load', function() {
        const footerPlaceholder = $("#footer-placeholder");
        if (!footerPlaceholder.length) return;

        $.ajax({
            url: "footer.html",
            type: "GET",
            dataType: "html",
            cache: false,
            success: function(data) {
                footerPlaceholder.replaceWith(data);
                
                // Active Link Logic
                const currentPath = window.location.pathname.split('/').pop() || 'index.html';
                $('.footer-links li a').each(function() {
                    if ($(this).attr('href') === currentPath) {
                        $(this).addClass('active');
                    }
                });

                // Refresh GSAP
                if (window.ScrollTrigger) {
                    ScrollTrigger.refresh();
                }
            },
            error: function(xhr, status, error) {
                console.error("Footer Loader Error:", error);
            }
        });
    });
})(jQuery);
