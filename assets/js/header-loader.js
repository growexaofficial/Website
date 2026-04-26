/**
 * Header Loader for Growexa Website
 * Centralizes the header from header.html across all pages.
 */

$(document).ready(function() {
    const headerPlaceholder = $("#header-placeholder");
    if (!headerPlaceholder.length) return;

    // Load header.html
    $.get("header.html", function(data) {
        // Fix relative paths for assets and links if the page is in a subdirectory
        const pathDepth = (window.location.pathname.match(/\//g) || []).length;
        // In a flat root structure, depth is 1 (e.g., /index.html) or more if nested.
        // Adjust prefix based on how many levels deep we are.
        // Assuming the site is served from a folder, we might need a more robust way.
        // For now, since all files are in root, we'll keep it simple but extensible.
        
        headerPlaceholder.replaceWith(data);

        // Highlight active menu item
        const currentPath = window.location.pathname.split('/').pop() || 'index.html';
        $('.tp-main__menu nav ul li a, .tp-main-menu-content ul li a').each(function() {
            if ($(this).attr('href') === currentPath) {
                $(this).addClass('active');
                $(this).parents('li').addClass('active');
            }
        });

        // Re-initialize Header Components
        initHeaderComponents();
    });

    function initHeaderComponents() {
        // 1. Mobile Menu (Meanmenu)
        if ($.fn.meanmenu) {
            $('.tp-main-menu-content').meanmenu({
                meanScreenWidth: "1200",
                meanMenuContainer: '.tp-mobile-menu-pos',
                meanMenuCloseSize: '24px',
            });
        }

        // 2. Mobile Menu Controls (from main.js)
        if ($('.tp-main-menu-content').length && $('.tp-main-menu-mobile').length) {
            let navContent = document.querySelector(".tp-main-menu-content").outerHTML;
            let mobileNavContainer = document.querySelector(".tp-main-menu-mobile");
            mobileNavContainer.innerHTML = navContent;

            let arrow = $(".tp-main-menu-mobile .has-dropdown > a");

            arrow.each(function() {
                let self = $(this);
                let arrowBtn = document.createElement("BUTTON");
                arrowBtn.classList.add("dropdown-toggle-btn");
                arrowBtn.innerHTML = "<i class='far fa-angle-right'></i>";

                self.append(function() {
                    return arrowBtn;
                });

                self.find("button").on("click", function(e) {
                    e.preventDefault();
                    let self = $(this);
                    self.toggleClass("dropdown-opened");
                    self.parent().toggleClass("expanded");
                    self.parent().parent().addClass("dropdown-opened").siblings().removeClass("dropdown-opened");
                    self.parent().parent().children(".tp-submenu").slideToggle();
                });
            });
        }

        // 3. Offcanvas Toggle
        $(".tp-offcanvas-open-btn").on("click", function() {
            $(".tp-offcanvas__area").addClass("offcanvas-opened");
            $(".body-overlay").addClass("opened");
        });

        $(".tp-offcanvas-close-btn").on("click", function() {
            $(".tp-offcanvas__area").removeClass("offcanvas-opened");
            $(".body-overlay").removeClass("opened");
        });

        $(".body-overlay").on("click", function() {
            $(".tp-offcanvas__area").removeClass("offcanvas-opened");
            $(this).removeClass("opened");
        });

        // 4. Search Form Toggle
        $(".tp-search-icon").on("click", function(e) {
            e.preventDefault();
            $(".tp-search-form").addClass("showed");
            if (!$('.tp-search-ovalay').length) {
                $('<div class="ovalay tp-search-ovalay"></div>').appendTo('body').on('click', function() {
                    $(".tp-search-form").removeClass("showed");
                    $(this).remove();
                });
            }
        });

        $(".tp-search-close").on("click", function(e) {
            e.preventDefault();
            $(".tp-search-form").removeClass("showed");
            $('.tp-search-ovalay').remove();
        });

        // 5. Sticky Header Logic
        const header_sticky = document.querySelector(".tp-header-stikcy");
        if (header_sticky) {
            let lastScroll = 0;
            const headerHeight = header_sticky.offsetHeight;

            $(window).on('scroll', function() {
                const scroll = $(window).scrollTop();
                const isScrollingDown = scroll > lastScroll;
                const isScrollingUp = scroll < lastScroll;

                if (scroll > 100) {
                    header_sticky.classList.add("scrolled");
                    if (isScrollingDown) {
                        $(header_sticky).css('transform', `translateY(-${headerHeight}px)`);
                    } else if (isScrollingUp) {
                        $(header_sticky).css('transform', 'translateY(0)');
                    }
                } else {
                    header_sticky.classList.remove("scrolled");
                    $(header_sticky).css('transform', 'translateY(0)');
                }
                lastScroll = scroll;
            });
        }
    }
});
