/***************************************************
==================== JS INDEX ======================
****************************************************
01. Preloader
02. Go top Top
03. magnific Popup
04. Offcanvas Js
05. Text Slider
06. Testimonial Slider
07. Testimonial Slider Two
08. Gallery Slider
09. Team Slider
10. Mobile Menu
11. Register Plugins
12. Header Sticky
13. Service Icon Animation
14. Work Process Image Animation
15. About Animation
16. Choose Animation
17. Button Border
18. Characters Animatoin
19. Words Animatoin
20. Fade Animation

****************************************************/

(function($) {
    "use strict";

    var device_width = window.screen.width;
    let smoother;


    ////////////////////////////////////////////////////
    // 04. Offcanvas Js
    $(".tp-offcanvas-open-btn").on("click", function() {
        $(".tp-offcanvas__area").addClass("offcanvas-opened");
        $(".body-overlay").addClass("opened");
    });

    $(".tp-offcanvas-close-btn").on("click", function() {
        $(".tp-offcanvas__area").removeClass("offcanvas-opened");
        $(".body-overlay").removeClass("opened");
    });


    /////////////////////////////////////////////////////
    // 11. Register Plugins
    gsap.registerPlugin(ScrollSmoother, ScrollTrigger, SplitText, ScrambleTextPlugin);

    if (device_width > 767) {
        const smoother = ScrollSmoother.create({
            smooth: 1.2,
            effects: device_width < 1025 ? false : true,
            smoothTouch: 0.5,
            normalizeScroll: false,
            ignoreMobileResize: true,
        });
    }
    /////////////////////////////////////////////////////

    /////////////////////////////////////////////////////
    // 01. Preloader actova preloader (Disabled)
    /*
    const preloader = document.querySelector('.preloader-wrapper');

    if (preloader) {
        const loaderCircle = preloader.querySelector('.loader-circle');
        const topBg = preloader.querySelector('.split.top-bg');
        const bottomBg = preloader.querySelector('.split.bottom-bg');

        window.addEventListener('load', () => {
            const tl = gsap.timeline();

            // CIRCLE IN
            tl.to(loaderCircle, {
                    duration: 0.6,
                    autoAlpha: 1,
                    scale: 1,
                    ease: 'back.out(1.4)'
                })

                // CIRCLE OUT
                .to(loaderCircle, {
                    duration: 0.4,
                    autoAlpha: 0,
                    scale: 0.6,
                    ease: 'power2.in',
                    delay: 0.3
                })

                // SPLIT OPEN ANIMATION
                .to([topBg, bottomBg], {
                    duration: .9,
                    yPercent: (i) => (i === 0 ? -100 : 100),
                    ease: 'power2.inOut'
                }, 'lineDone+=0.03')

                // HEIGHT SHRINK
                .to([topBg, bottomBg], {
                    duration: 0.6,
                    height: 0,
                    ease: 'power2.inOut'
                })

                // REMOVE PRELOADER
                .to(preloader, {
                    duration: 0.6,
                    autoAlpha: 0,
                    display: 'none',
                    onComplete() {
                        preloader.remove?.();
                    }
                });

        });
    }
    */
    /////////////////////////////////////////////////////


    ////////////////////////////////////////////////////
    // 02. Data Background
    $("[data-background").each(function() {
        $(this).css("background-image", "url( " + $(this).attr("data-background") + "  )");
    });


    /////////////////////////////////////////////////////
    // 02. Go top Top
    let scroll_top = document.getElementById("scroll_top");

    if (scroll_top) {
        window.onscroll = function() {
            scrollTopFunc()
        };

        function scrollTopFunc() {
            if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
                scroll_top.classList.add('showed');
            } else {
                scroll_top.classList.remove('showed');
            }
        }

        scroll_top.addEventListener('click', function() {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        });
    }
    /////////////////////////////////////////////////////


    /////////////////////////////////////////////////////
    // 03. Marquee Text
    const marqueeDirection = 'left';

    gsap.set(".tp--marquee-text-inner", {
        xPercent: 0
    });

    let tween = gsap.to(".tp--marquee-text-inner", {
        xPercent: -50,
        duration: 20,
        ease: "linear",
        repeat: -1
    });

    tween.timeScale(marqueeDirection === 'right' ? -1 : 1);

    /////////////////////////////////////////////////////


    /////////////////////////////////////////////////////
    // 04. Counter Activation
    const counter_1 = window.counterUp.default
    const counter_cb = entries => {

        entries.forEach(entry => {
            const el = entry.target
            if (entry.isIntersecting && !el.classList.contains('is-visible')) {
                counter_1(el, {
                    duration: 1500,
                    delay: 16,
                })
                el.classList.add('is-visible')
            }
        })
    }

    const counter_1_io = new IntersectionObserver(counter_cb, {
        threshold: 1
    })

    const counter_1_els = document.querySelectorAll('.tp-counter-active');
    counter_1_els.forEach((el) => {
        counter_1_io.observe(el)
    });
    /////////////////////////////////////////////////////


    /////////////////////////////////////////////////////
    // 035. magnific Popup
    $('.tp-video-popup').magnificPopup({
        type: 'iframe'
    });
    /////////////////////////////////////////////////////


    /////////////////////////////////////////////////////
    // 06. Testimonial Slider
    const tsm_slider = new Swiper('.tp-testimonial-active', {
        loop: true,
        speed: 1500,
        slidesPerView: 1,
        navigation: {
            nextEl: ".tp-tsm-next",
            prevEl: ".tp-tsm-prev",
        },
    })
    ////////////////////////////////////////////////////


    ////////////////////////////////////////////////////
    var tsm2_slider_thumb = new Swiper(".tp-testimonial-thumb-active", {
        loop: true,
        spaceBetween: 10,
        slidesPerView: 1,
        freeMode: true,
        effect: "fade",
        watchSlidesProgress: true,
    });

    var tsm2_slider = new Swiper(".tp-testimonial-active-2", {
        loop: true,
        spaceBetween: 10,
        slidesPerView: 1,
        speed: 1200,
        navigation: {
            nextEl: ".tp-tsm-th-next",
            prevEl: ".tp-tsm-th-prev",
        },
        thumbs: {
            swiper: tsm2_slider_thumb,
        },
    });
    ////////////////////////////////////////////////////


    /////////////////////////////////////////////////////
    // 06. Testimonial Slider
    const tsm_slider2 = new Swiper('.tp-testimonial2-active', {
        loop: true,
        speed: 1500,
        slidesPerView: 3,
        navigation: {
            nextEl: ".tp-tsm-next",
            prevEl: ".tp-tsm-prev",
        },
        breakpoints: {
            240: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            1200: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
        },
    })

    function setEqualHeight() {
        let maxHeight = 0;
        document.querySelectorAll('.tp-testimonial2-active .swiper-slide').forEach(slide => {
            slide.style.height = "auto";
            let h = slide.offsetHeight;
            if (h > maxHeight) maxHeight = h;
        });
        document.querySelectorAll('.tp-testimonial2-active .swiper-slide').forEach(slide => {
            slide.style.height = maxHeight + "px";
        });
    }

    // Run on load and resize
    window.addEventListener('load', setEqualHeight);
    window.addEventListener('resize', setEqualHeight);

    ////////////////////////////////////////////////////


    /////////////////////////////////////////////////////
    // 06. Testimonial Slider
    var tsm_slider4 = new Swiper(".tp-testimonial4-active", {
        loop: true,
        effect: "cards",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 1.2,
        speed: 1000,
        navigation: {
            nextEl: ".tsm4-btn-next",
            prevEl: ".tsm4-btn-prev",
        },
    });
    /////////////////////////////////////////////////////


    /////////////////////////////////////////////////////
    // 06. Procress Slider
    const process_slider = new Swiper('.tp-process-slider', {
        loop: false,
        speed: 1500,
        slidesPerView: 3,
        navigation: {
            nextEl: ".tp-process-next",
            prevEl: ".tp-process-prev",
        },
        breakpoints: {
            240: {
                slidesPerView: 1,
            },
            800: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 3,
            },
        },
    })
    ////////////////////////////////////////////////////


    /////////////////////////////////////////////////////
    // Price Slider
    const price_slider = new Swiper('.tp-price-slider', {
        loop: false,
        speed: 1500,
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            240: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 3,
            },
        },
    })
    ////////////////////////////////////////////////////


    /////////////////////////////////////////////////////
    // 03. Brand Slider
    const marquee = document.querySelector(".tp-brand-slider");
    if (marquee) {
        const speed = 50; // pixels per second
        let position = 0;
        let isHovered = false;

        // Duplicate content for seamless looping
        marquee.innerHTML += marquee.innerHTML;

        let lastTimestamp = null;

        function animateMarquee(timestamp) {
            if (!lastTimestamp) lastTimestamp = timestamp;
            const delta = timestamp - lastTimestamp;
            lastTimestamp = timestamp;

            if (!isHovered) {
                position -= (speed * delta) / 1000;
                if (Math.abs(position) >= marquee.scrollWidth / 2) {
                    position = 0;
                }
                marquee.style.transform = `translateX(${position}px)`;
            }

            requestAnimationFrame(animateMarquee);
        }

        marquee.addEventListener("mouseenter", () => {
            isHovered = true;
        });

        marquee.addEventListener("mouseleave", () => {
            isHovered = false;
        });

        requestAnimationFrame(animateMarquee);
    }
    /////////////////////////////////////////////////////





    /////////////////////////////////////////////////////
    // 10. Mobile Menu
    $('.tp-main-menu-content').meanmenu({
        meanScreenWidth: "1200",
        meanMenuContainer: '.tp-mobile-menu-pos',
        meanMenuCloseSize: '24px',
    });
    /////////////////////////////////////////////////////



    /////////////////////////////////////////////////////
    // 04. Header Search actova search start
    (function() {
        const openIcon = document.querySelector('.tp-search-icon');
        const closeBtn = document.querySelector('.tp-search-close');

        function createOverlay() {
            let ovalay = document.querySelector('.ovalay');
            if (!ovalay) {
                ovalay = document.createElement('div');
                ovalay.className = 'ovalay tp-search-ovalay';
                document.body.appendChild(ovalay);
            }
            return ovalay;
        }

        function removeOverlay() {
            const ovalay = document.querySelector('.ovalay');
            if (ovalay) ovalay.remove();
        }

        function closeSearch() {
            const form = document.querySelector('.tp-search-form');
            if (!form) return;

            form.classList.add('hide');

            setTimeout(() => {
                form.classList.remove('showed');
                removeOverlay();
            }, 300);
        }

        if (openIcon) {
            openIcon.addEventListener('click', function(e) {
                e.preventDefault();
                const form = document.querySelector('.tp-search-form');
                if (!form) return;

                form.classList.remove('hide');
                form.classList.add('showed');

                const ovalay = createOverlay();
                ovalay.onclick = closeSearch;
            });
        }

        if (closeBtn) {
            closeBtn.addEventListener('click', function(e) {
                e.preventDefault();
                closeSearch();
            });
        }

        document.addEventListener('click', function(e) {
            const form = document.querySelector('.tp-search-form');
            if (!form || !form.classList.contains('showed')) return;

            if (form.contains(e.target) || (openIcon && openIcon.contains(e.target))) return;

            closeSearch();
        });
    })();

    ////////////////////////// header search end ////////////////////////////


    /////////////////////////////////////////////////////
    // 06. Hero Slider
    const hero_slider = new Swiper('.tp-hero-slider', {
        loop: true,
        speed: 2500,
        slidesPerView: 1,
        effect: "fade",
        autoplay: {
            delay: 2500,
        },
    })
    ////////////////////////////////////////////////////


    /////////////////////////////////////////////////////
    // Home 2 Hero
    document.addEventListener('DOMContentLoaded', () => {
        const canvas = document.getElementById('tp-wave-canva');
        const section = document.getElementById('tp-wave-animation');

        if (!canvas || !section) return;

        const ctx = canvas.getContext('2d');
        const dpr = window.devicePixelRatio || 1;

        let w = 0,
            h = 0,
            grid = 50;
        let ripples = [];
        let defaultAlpha = 1;

        const box = {
            x: w * 0.7,
            y: h * 0.2,
            width: w * 0.2,
            height: h * 0.3
        };

        function resize() {
            w = section.clientWidth;
            h = section.clientHeight;

            canvas.width = w * dpr;
            canvas.height = h * dpr;
            canvas.style.width = w + 'px';
            canvas.style.height = h + 'px';
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

            const cssGrid = parseFloat(
                getComputedStyle(document.documentElement).getPropertyValue('--grid-size')
            );
            grid = Number.isFinite(cssGrid) && cssGrid > 0 ? cssGrid : 50;

            box.x = w * 0.7;
            box.y = h * 0.2;
            box.width = w * 0.2;
            box.height = h * 0.3;
        }

        function onMouseMove(e) {
            const rect = section.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            ripples.push({
                x,
                y,
                radius: 0,
                alpha: 1
            });
            defaultAlpha -= 0.05; // fade out default wave
            if (defaultAlpha < 0) defaultAlpha = 0;
        }

        function draw() {
            ctx.clearRect(0, 0, w, h);

            // Smooth fade in/out default wave
            if (ripples.length === 0) {
                defaultAlpha += 0.02; // fade in
                if (defaultAlpha > 1) defaultAlpha = 1;
            }

            // Draw mouse ripples
            ripples.forEach(r => {
                for (let gx = r.x - 100; gx < r.x + 100; gx += grid) {
                    for (let gy = r.y - 100; gy < r.y + 100; gy += grid) {
                        const dist = Math.hypot(gx - r.x, gy - r.y);
                        const wave = Math.sin(dist / 20 - r.radius / 10) * 0.5 + 0.5;
                        if (wave > 0.5) {
                            ctx.fillStyle = `rgba(161,255,117,${wave * r.alpha})`;
                            ctx.fillRect(gx, gy, grid, grid);
                        }
                    }
                }
                r.radius += 2;
                r.alpha *= 0.95;
            });

            ripples = ripples.filter(r => r.alpha > 0.05);

            requestAnimationFrame(draw);
        }

        window.addEventListener('resize', resize);
        section.addEventListener('mousemove', onMouseMove);
        section.addEventListener('mouseleave', () => {
            defaultAlpha = 0;
        });

        resize();
        draw();
    });
    /////////////////////////////////////////////////////


    /////////////////////////////////////////////////////
    // Image Trail ANimatoin
    document.addEventListener('DOMContentLoaded', () => {
        const trail_sections = document.querySelectorAll('.image-trail-animation');
        if (!trail_sections.length) return;

        const MathUtils = {
            lerp: (a, b, n) => (1 - n) * a + n * b,
            distance: (x1, y1, x2, y2) => Math.hypot(x2 - x1, y2 - y1)
        };

        trail_sections.forEach(section => {
            const content = section.querySelector('.image-trail-images');
            if (!content) return;
            const images = [...content.querySelectorAll('img')];

            let mousePos = {
                x: 0,
                y: 0
            };
            let lastMousePos = {
                x: 0,
                y: 0
            };
            let cacheMousePos = {
                x: 0,
                y: 0
            };

            const getMousePos = (ev) => {
                const rect = section.getBoundingClientRect();
                return {
                    x: ev.clientX - rect.left,
                    y: ev.clientY - rect.top
                };
            };

            section.addEventListener('mousemove', ev => {
                mousePos = getMousePos(ev);
            });

            class ImageItem {
                constructor(el) {
                    this.el = el;
                }
                isActive() {
                    return gsap.isTweening(this.el) || this.el.style.opacity != 0;
                }
            }

            class ImageTrail {
                constructor() {
                    this.images = images.map(img => new ImageItem(img));
                    this.imagesTotal = this.images.length;
                    this.imgPosition = 0;
                    this.zIndexVal = 1;
                    this.threshold = 100;
                    requestAnimationFrame(() => this.render());
                }

                render() {
                    const distance = MathUtils.distance(mousePos.x, mousePos.y, lastMousePos.x, lastMousePos.y);
                    cacheMousePos.x = MathUtils.lerp(cacheMousePos.x || mousePos.x, mousePos.x, 0.1);
                    cacheMousePos.y = MathUtils.lerp(cacheMousePos.y || mousePos.y, mousePos.y, 0.1);

                    if (distance > this.threshold) {
                        this.showNextImage();
                        ++this.zIndexVal;
                        this.imgPosition = this.imgPosition < this.imagesTotal - 1 ? this.imgPosition + 1 : 0;
                        lastMousePos = { ...mousePos
                        };
                    }

                    requestAnimationFrame(() => this.render());
                }

                showNextImage() {
                    const img = this.images[this.imgPosition].el;
                    gsap.killTweensOf(img);

                    gsap.set(img, {
                        opacity: 1,
                        scale: 1,
                        zIndex: this.zIndexVal,
                        x: cacheMousePos.x - img.width / 2,
                        y: cacheMousePos.y - img.height / 2
                    });

                    gsap.to(img, {
                        duration: 0.9,
                        ease: "expo.out",
                        x: mousePos.x - img.width / 2,
                        y: mousePos.y - img.height / 2
                    });

                    gsap.to(img, {
                        duration: 1,
                        ease: "power1.out",
                        opacity: 0,
                        delay: 0.4
                    });

                    gsap.to(img, {
                        duration: 1,
                        ease: "quint.out",
                        scale: 0.2,
                        delay: 0.4
                    });
                }
            }

            new ImageTrail();
        });
    });
    /////////////////////////////////////////////////////


    /////////////////////////////////////////////////////
    // FAQ
    document.addEventListener('DOMContentLoaded', () => {
        const items = document.querySelectorAll('.tp-faq-item');
        const titles = document.querySelectorAll('.tp-faq-title');

        if (items.length) {
            const first = items[0];
            first.classList.add('active');
            const firstAns = first.querySelector('.tp-faq-body');
            if (firstAns) firstAns.style.maxHeight = firstAns.scrollHeight + 'px';
        }

        titles.forEach(title => {
            title.addEventListener('click', () => {
                const currentItem = title.closest('.tp-faq-item');
                const currentAns = currentItem.querySelector('.tp-faq-body');

                const opened = document.querySelector('.tp-faq-item.active');
                if (opened && opened !== currentItem) {
                    opened.classList.remove('active');
                    const openedAns = opened.querySelector('.tp-faq-body');
                    if (openedAns) openedAns.style.maxHeight = 0;
                }

                const willOpen = !currentItem.classList.contains('active');
                currentItem.classList.toggle('active', willOpen);
                if (currentAns) {
                    currentAns.style.maxHeight = willOpen ? currentAns.scrollHeight + 'px' : 0;
                }
            });
        });
    });
    /////////////////////////////////////////////////////


    /////////////////////////////////////////////////////
    // FAQ
    document.addEventListener('DOMContentLoaded', () => {
        const service_faq_items = document.querySelectorAll('.tp-service-faq-item');
        const titles = document.querySelectorAll('.tp-service-faq-title');

        if (service_faq_items.length) {
            const first = service_faq_items[0];
            first.classList.add('active');
            const firstAns = first.querySelector('.tp-service-faq-body');
            if (firstAns) firstAns.style.maxHeight = firstAns.scrollHeight + 'px';
        }

        titles.forEach(title => {
            title.addEventListener('click', () => {
                const currentItem = title.closest('.tp-service-faq-item');
                const currentAns = currentItem.querySelector('.tp-service-faq-body');

                const opened = document.querySelector('.tp-service-faq-item.active');
                if (opened && opened !== currentItem) {
                    opened.classList.remove('active');
                    const openedAns = opened.querySelector('.tp-service-faq-body');
                    if (openedAns) openedAns.style.maxHeight = 0;
                }

                const willOpen = !currentItem.classList.contains('active');
                currentItem.classList.toggle('active', willOpen);
                if (currentAns) {
                    currentAns.style.maxHeight = willOpen ? currentAns.scrollHeight + 'px' : 0;
                }
            });
        });
    });
    /////////////////////////////////////////////////////


    /////////////////////////////////////////////////////
    // Blog 3 Animation
    const blog3Items = document.querySelectorAll('.tp-blog-item-3');

    blog3Items.forEach((item, index) => {
        const img = item.querySelector('img');
        const displacement = item.querySelector('feDisplacementMap');
        let currentScale = 0;
        let targetScale = 0;
        let animationFrame;

        function animate() {
            currentScale += (targetScale - currentScale) * 0.06;
            displacement.setAttribute('scale', currentScale.toFixed(2));
            if (Math.abs(targetScale - currentScale) > 0.5) {
                animationFrame = requestAnimationFrame(animate);
            }
        }

        img.addEventListener('mouseenter', () => {
            targetScale = 60;
            cancelAnimationFrame(animationFrame);
            animate();
        });

        img.addEventListener('mouseleave', () => {
            targetScale = 0;
            cancelAnimationFrame(animationFrame);
            animate();
        });
    });
    /////////////////////////////////////////////////////


    /////////////////////////////////////////////////////
    // 00. Project 3 Animation
    if (screen.width > 767) {
        let cards = gsap.utils.toArray(".tp-project-card-3");
        let section = ".tp-project-area-3";

        cards.forEach((card) => {
            ScrollTrigger.create({
                trigger: card,
                start: "top-=100 top",
                endTrigger: section,
                end: "bottom bottom-=232",
                pin: true,
                pinSpacing: false,
                pinType: "transform",
                markers: false,
            });
        });

        $('.tp-project-card-3').css("transition", "none");
    }
    /////////////////////////////////////////////////////



    /////////////////////////////////////////////////////
    let text_move_animation = gsap.utils.toArray(".text-move-animation");

    if (text_move_animation) {
        text_move_animation.forEach(splitTextLine => {
            var delay_value = 0.1
            if (splitTextLine.getAttribute("data-delay")) {
                delay_value = splitTextLine.getAttribute("data-delay");
            }
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: splitTextLine,
                    start: 'top 85%',
                    duration: 1,
                    scrub: false,
                    markers: false,
                    toggleActions: 'play none none none'
                }
            });

            const itemSplitted = new SplitText(splitTextLine, {
                type: "lines"
            });
            gsap.set(splitTextLine, {
                perspective: 400
            });
            itemSplitted.split({
                type: "lines"
            })
            tl.from(itemSplitted.lines, {
                duration: 1,
                delay: delay_value,
                opacity: 0,
                rotationX: -80,
                force3D: true,
                transformOrigin: "top center -50",
                stagger: 0.1
            });
        });
    }
    /////////////////////////////////////////////////////


    /////////////////////////////////////////////////////
    // Full Image 
    let full_image = document.querySelector('.full-image');

    if (full_image) {
        gsap.to(".mask-circle", {
            attr: {
                r: 500
            },
            ease: "power2.out",
            duration: 3,
            scrollTrigger: {
                trigger: full_image,
                start: "top center",
                end: "top top",
                scrub: false,
                markers: false,
            }
        });
    }
    /////////////////////////////////////////////////////


    ///////////////////////////////////////////
    // On Hover Animation
    const links = document.querySelectorAll('.scramble-link');

    links.forEach(link => {
        const span = link.querySelector('.scramble-text');
        const originalText = span.textContent;

        // Set min-width based on character count
        const charCount = originalText.length;
        span.style.minWidth = `${charCount + 1}ch`;

        function scramble() {
            if (!gsap.isTweening(span)) {
                gsap.to(span, {
                    duration: 0.4,
                    ease: 'sine.in',
                    scrambleText: {
                        text: originalText,
                        speed: 2,
                        chars: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
                    }
                });
            }
        }

        link.addEventListener('pointerenter', scramble);
        link.addEventListener('focus', scramble);
    });
    /////////////////////////////////////////////


    //////////////////////////////////////////
    // On Scroll and On Load Animation
    const chars = "///aaa///iii";

    // Scramble animation function (character-by-character)
    function gsapScramble(target, finalText, duration = 0.5) {
        const length = finalText.length;
        let scrambleArray = new Array(length).fill(" ");

        return new Promise(resolve => {
            let revealIndex = 0;

            const ticker = gsap.ticker.add(() => {
                for (let i = revealIndex; i < length; i++) {
                    scrambleArray[i] = finalText[i] === " " ? " " : chars[Math.floor(Math.random() * chars.length)];
                }
                target.textContent = scrambleArray.join("");
            });

            const tl = gsap.timeline({
                onComplete: () => {
                    gsap.ticker.remove(ticker);
                    resolve();
                }
            });

            for (let i = 0; i < length; i++) {
                tl.to({}, {
                    duration: duration / length,
                    onComplete: () => {
                        scrambleArray[revealIndex] = finalText[revealIndex];
                        target.textContent = scrambleArray.join("");
                        revealIndex++;
                    }
                });
            }
        });
    }

    // Function to split and animate one block
    function handleScrambleBlock(block, duration = 0.5) {
        const split = new SplitText(block, {
            type: "lines"
        });
        split.lines.forEach(line => {
            const trimmed = line.textContent.trim();
            line.innerHTML = `<span class="scramble-part">${trimmed}</span>`;
        });

        const scrambleParts = block.querySelectorAll('.scramble-part');
        scrambleParts.forEach(part => {
            const finalText = part.textContent;
            gsapScramble(part, finalText, duration);
        });
    }

    // Main function: apply animation based on trigger type
    function applyScrambleAnimation(selector, triggerType = 'scroll') {
        const elements = document.querySelectorAll(selector);

        elements.forEach(block => {
            if (triggerType === 'scroll') {
                ScrollTrigger.create({
                    trigger: block,
                    start: "top bottom",
                    once: true,
                    onEnter: () => handleScrambleBlock(block)
                });
            } else if (triggerType === 'load') {
                handleScrambleBlock(block);
            }
        });
    }

    // Run after DOM ready
    document.addEventListener("DOMContentLoaded", function() {
        // Scroll-triggered animation
        applyScrambleAnimation('.scramble-on-scroll', 'scroll');

        // Page load animation
        applyScrambleAnimation('.scramble-on-load', 'load');
    });
    //////////////////////////////////////////////////////////


    /////////////////////////////////////////////////////////////////////////
    //  Scramble Button
    document.querySelectorAll('.scramble-btn-text').forEach(scrambleEl => {
        const originalText = scrambleEl.textContent;

        // Fix width
        const span = document.createElement('span');
        span.style.visibility = 'hidden';
        span.style.position = 'absolute';
        span.style.whiteSpace = 'nowrap';
        span.style.font = getComputedStyle(scrambleEl).font;
        span.textContent = originalText;
        document.body.appendChild(span);

        // const width = span.getBoundingClientRect().width + 5;
        const width = Math.ceil(span.getBoundingClientRect().width + 5);
        document.body.removeChild(span);

        scrambleEl.style.display = 'inline-block';
        scrambleEl.style.width = width + 'px';
        scrambleEl.style.whiteSpace = 'nowrap';

        // Add hover scramble animation
        scrambleEl.closest('a').addEventListener('mouseenter', () => {
            if (!gsap.isTweening(scrambleEl)) {
                gsap.to(scrambleEl, {
                    duration: 0.5,
                    ease: 'sine.inOut',
                    scrambleText: {
                        text: originalText,
                        speed: 2,
                        chars: '/a/i'
                    }
                });
            }
        });
    });
    /////////////////////////////////////////////////////////////////////////


    /////////////////////////////////////////////////////////////////////////
    function revealTextOnScroll(selector = '.reveal-text') {
        document.querySelectorAll(selector).forEach(el => {
            const split = new SplitText(el, {
                type: "chars"
            });
            gsap.set(split.chars, {
                opacity: 0
            });

            ScrollTrigger.create({
                trigger: el,
                start: "top 80%",
                once: true,
                onEnter: () => {
                    gsap.to(split.chars, {
                        opacity: 1,
                        duration: 0.01,
                        stagger: 0.04,
                        ease: "power1.inOut"
                    });
                }
            });
        });
    }

    // Call it once after DOM is ready
    revealTextOnScroll();
    /////////////////////////////////////////////////////////////////////////


    /////////////////////////////////////////////////////////////////////////
    // Button Bounce
    document.querySelectorAll(".tp-btn-animate").forEach(button => {
        gsap.from(button, {
            scrollTrigger: {
                trigger: button,
                start: "top 85%",
                toggleActions: "play none none none"
            },
            y: -100,
            opacity: 0,
            duration: 1.5,
            ease: "bounce"
        });
    });
    /////////////////////////////////////////////////////////////////////////


    /////////////////////////////////////////////////////////////////////////
    // Remove data-speed
    if (screen.width <= 1199) {
        document.querySelectorAll('.remove-speed img[data-speed]').forEach((img) => {
            img.removeAttribute('data-speed');
        });
    }
    /////////////////////////////////////////////////////////////////////////


    /////////////////////////////////////////////////////
    // 05. Text Slider
    const text_slider = new Swiper('.tp-industry-grid', {
        loop: true,
        speed: 7000,
        slidesPerView: 'auto',
        autoplay: {
            delay: 1,
        },
    })

    /////////////////////////////////////////////////////
    /////////////////////////////////////////////////////
    // 05. Text Slider
    const industry_slider = new Swiper('.tp-industry-grid', {
        loop: true,
        speed: 7000,
        slidesPerView: 'auto',
    })
    /////////////////////////////////////////////////////


    // /////////////////////////////////////////////////////
    // 09. Card 3 Item animation
    const vSwiper = new Swiper('.vertical-card-slider', {
        direction: 'vertical',
        slidesPerView: 3,
        centeredSlides: true,
        spaceBetween: 20,
        loop: true,
        speed: 1200,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false
        },
    });
    /////////////////////////////////////////////////////


    /////////////////////////////////////////////////////
    // Button Hover Animation
    $(".tp-btn-hover").on("mouseenter mouseout", function(e) {
        const $span = $(this).find("span");
        if (!$span.length) return;

        const parentOffset = $(this).offset(),
            relX = e.pageX - parentOffset.left,
            relY = e.pageY - parentOffset.top;

        $span.css({
            top: relY,
            left: relX
        });
    });
    /////////////////////////////////////////////////////


    /////////////////////////////////////////////////////
    // Button Two Animation
    document.querySelectorAll(".tp-btn-anim .tp-btn-text").forEach(el => {
        const text = el.textContent.trim();
        el.innerHTML = "";

        const block = document.createElement("div");
        block.classList.add("btn-anim__block");

        [...text].forEach(char => {
            const span = document.createElement("span");
            span.className = "btn-anim__letter";
            span.textContent = char === " " ? "\u00A0" : char; // Non-breaking space
            block.appendChild(span);
        });

        el.appendChild(block);
        el.appendChild(block.cloneNode(true));
    });
    /////////////////////////////////////////////////////


    /////////////////////////////////////////////////////
    const featureItems = document.querySelectorAll('.tp-feature2-item');
    const featureImages = document.querySelectorAll('.tp-feature2-image');

    let featureCurrentIndex = 0;

    function activateFeatureByIndex(index) {
        if (index < 0 || index >= featureItems.length) return;

        featureItems.forEach(i => i.classList.remove('active'));
        featureItems[index].classList.add('active');

        featureImages.forEach(img => img.classList.remove('active'));
        document.getElementById(featureItems[index].dataset.target).classList.add('active');

        featureCurrentIndex = index;
    }

    // Click events work
    featureItems.forEach((item, idx) => {
        item.addEventListener('click', () => {
            activateFeatureByIndex(idx);
        });
    });

    // Scroll-triggered feature switching
    if (device_width > 767) {
        let lastIndex = -1;
        ScrollTrigger.create({
            trigger: ".tp-feature2-wrapper",
            start: "top top",
            end: "+=200%",
            scrub: true,
            pin: true,
            // pinSpacing: false,
            onUpdate: self => {
                const index = Math.floor(self.progress * featureItems.length);
                if (index !== lastIndex) {
                    activateFeatureByIndex(index);
                    lastIndex = index;
                }
            }
        });
    }
    /////////////////////////////////////////////////////


    /////////////////////////////////////////////////////
    // 10. Addons hover effect
    const addons_items = document.querySelectorAll(".tp-addons-item");
    const together = document.querySelector(".tp-addons-together");

    if (addons_items.length > 0) {
        addons_items.forEach(el => el.classList.add("active"));
        together.classList.add("active");

        function clearActive() {
            addons_items.forEach(el => el.classList.remove("active"));
            together.classList.remove("active");
        }

        addons_items.forEach(el => {
            el.addEventListener("mouseenter", () => {
                clearActive();
                el.classList.add("active");
            });
        });

        together.addEventListener("mouseenter", () => {
            clearActive();
            together.classList.add("active");
        });

        document.querySelector(".tp-addons-wrapper").addEventListener("mouseleave", () => {
            addons_items.forEach(el => el.classList.add("active"));
            together.classList.add("active");
        });
    }
    /////////////////////////////////////////////////////


    /////////////////////////////////////////////////////
    (function() {
        const journeys = [{
                left: "topPathL",
                right: "topPathR",
                dot: "dotTop",
                duration: 6000
            },
            {
                left: "midPathL",
                right: "midPathR",
                dot: "dotMid",
                duration: 6000
            },
            {
                left: "bottomPathL",
                right: "bottomPathR",
                dot: "dotBottom",
                duration: 6000
            }
        ];

        function animatePath(dot, path, len, duration, reverse = false, cb) {
            if (!dot || !path) return; // safety check
            const start = performance.now();

            function step(now) {
                let t = (now - start) / duration;
                if (t > 1) t = 1;
                let posLen = reverse ? (1 - t) * len : t * len;
                const pt = path.getPointAtLength(posLen);
                dot.setAttribute("transform", `translate(${pt.x},${pt.y})`);
                if (t < 1) {
                    requestAnimationFrame(step);
                } else {
                    cb && cb();
                }
            }
            requestAnimationFrame(step);
        }

        function loopJourney(j) {
            const dot = document.getElementById(j.dot);
            const leftPath = document.getElementById(j.left);
            const rightPath = document.getElementById(j.right);

            // skip if any element is missing
            if (!dot || !leftPath || !rightPath) return;

            const lenL = leftPath.getTotalLength();
            const lenR = rightPath.getTotalLength();

            // left path (normal direction)
            animatePath(dot, leftPath, lenL, j.duration / 2, false, () => {
                // right path (reverse = true so it looks left → right)
                animatePath(dot, rightPath, lenR, j.duration / 2, true, () => {
                    loopJourney(j); // repeat
                });
            });
        }

        journeys.forEach(j => loopJourney(j));
    })();
    /////////////////////////////////////////////////////


    /////////////////////////////////////////////////////
    const toggleBtn = document.querySelector(".tp-price-toggle-btn");
    const monthly = document.querySelector('.tp-price-list.monthly');
    const annual = document.querySelector('.tp-price-list.annual');

    if (toggleBtn && monthly && annual) {
        let yearly = false;

        toggleBtn.addEventListener("click", () => {
            yearly = !yearly;
            toggleBtn.classList.toggle("active");

            if (yearly) {
                annual.classList.add('active');
                monthly.classList.remove('active');
            } else {
                monthly.classList.add('active');
                annual.classList.remove('active');
            }
        });
    }
    /////////////////////////////////////////////////////


    /////////////////////////////////////////////////////
    // 13. Service Icon Animation
    try {
        let service_area = document.querySelectorAll(".service__area");
        let service_icons = document.querySelectorAll(".service__item.style-1 .icon");

        service_area.forEach((item, i) => {
            let stl = gsap.timeline({
                scrollTrigger: {
                    trigger: item,
                    start: "top center",
                    end: "bottom center",
                    markers: false,
                    scrub: 1,
                },
            });
            stl.to(service_icons, {
                rotate: "-180deg",
            });
        });
    } catch (error) {
        console.log("Item Not found");
    }
    /////////////////////////////////////////////////////


    /////////////////////////////////////////////////////
    // 18. Characters Animatoin
    let charsAnimation = gsap.utils.toArray(".actova-chars");
    charsAnimation.forEach(splitChars => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: splitChars,
                start: 'top 90%',
                end: 'bottom 60%',
                scrub: false,
                toggleActions: 'play none none none'
            }
        });

        const textSplitChars = new SplitText(splitChars, {
            type: "chars"
        });
        gsap.set(splitChars, {
            perspective: 400
        });
        textSplitChars.split({
            type: "chars"
        })
        tl.from(textSplitChars.chars, {
            duration: 2,
            opacity: 0,
            scale: 0,
            y: 80,
            rotationX: 100,
            transformOrigin: "0% 50% -50",
            ease: "back",
            stagger: 0.1
        });
    });
    /////////////////////////////////////////////////////


    /////////////////////////////////////////////////////
    // 19. Words Animatoin
    let wordsAnimation = gsap.utils.toArray(".actova-word");
    wordsAnimation.forEach(splitWords => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: splitWords,
                start: 'top 90%',
                end: 'bottom 60%',
                scrub: false,
                toggleActions: 'play none none none'
            }
        });

        const textSplitWords = new SplitText(splitWords, {
            type: "words"
        });
        gsap.set(splitWords, {
            perspective: 400
        });
        textSplitWords.split({
            type: "words"
        })
        tl.from(textSplitWords.words, {
            duration: 1,
            delay: 0.3,
            opacity: 0,
            rotationX: 10,
            x: 50,
            force3D: true,
            transformOrigin: "top center -50",
            stagger: 0.1,
        });
    });
    /////////////////////////////////////////////////////

    /////////////////////////////////////////////////////
    // 19. Line Animatoin
    let linesAnimation = gsap.utils.toArray(".actova-lines");
    linesAnimation.forEach(splitLines => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: splitLines,
                start: 'top 90%',
                scrub: false,
                toggleActions: 'play none none none'
            }
        });

        const textSplitLines = new SplitText(splitLines, {
            type: "lines"
        });
        gsap.set(splitLines, {
            perspective: 400
        });
        textSplitLines.split({
            type: "lines"
        })
        tl.from(textSplitLines.lines, {
            duration: 1.5,
            delay: 0.4,
            opacity: 0,
            rotationX: 15,
            x: 150,
            force3D: true,
            transformOrigin: "top center -50",
            stagger: 0.1,
        });
    });
    /////////////////////////////////////////////////////


    /////////////////////////////////////////////////////
    // Image Move Animation
    gsap.utils.toArray('.tp-img-move').forEach(img => {
        let imgMspeed = img.dataset.distance || -150;

        gsap.to(img, {
            scrollTrigger: {
                trigger: img,
                start: 'top 80%',
                end: 'bottom top',
                scrub: true,
            },
            y: imgMspeed,
            ease: "none",
        });
    });
    /////////////////////////////////////////////////////


    /////////////////////////////////////////////////////
    // Images parallax without Lenis
    gsap.utils.toArray('.img-parallax').forEach(container => {
        const img = container.querySelector('img');

        gsap.fromTo(img, {
            y: -50
        }, {
            y: 50,
            ease: "power1.out",
            scrollTrigger: {
                trigger: container,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
                markers: true,
            }
        });
    });
    /////////////////////////////////////////////////////


    /////////////////////////////////////////////////////
    // 20. Fade Animation
    let fadeArray_items = document.querySelectorAll(".tp-fade-animation");
    if (fadeArray_items.length > 0) {
        const fadeArray = gsap.utils.toArray(".tp-fade-animation")
        // gsap.set(fadeArray, {opacity:0})
        fadeArray.forEach((item, i) => {

            var fade_direction = "bottom"
            var onscroll_value = 1
            var duration_value = 1.15
            var fade_offset = 50
            var delay_value = 0.15
            var ease_value = "power2.out"

            if (item.getAttribute("data-fade-offset")) {
                fade_offset = item.getAttribute("data-fade-offset");
            }
            if (item.getAttribute("data-duration")) {
                duration_value = item.getAttribute("data-duration");
            }

            if (item.getAttribute("data-fade-from")) {
                fade_direction = item.getAttribute("data-fade-from");
            }
            if (item.getAttribute("data-on-scroll")) {
                onscroll_value = item.getAttribute("data-on-scroll");
            }
            if (item.getAttribute("data-delay")) {
                delay_value = item.getAttribute("data-delay");
            }
            if (item.getAttribute("data-ease")) {
                ease_value = item.getAttribute("data-ease");
            }

            let animation_settings = {
                opacity: 0,
                ease: ease_value,
                duration: duration_value,
                delay: delay_value,
            }

            if (fade_direction == "top") {
                animation_settings['y'] = -fade_offset
            }
            if (fade_direction == "left") {
                animation_settings['x'] = -fade_offset;
            }

            if (fade_direction == "bottom") {
                animation_settings['y'] = fade_offset;
            }

            if (fade_direction == "right") {
                animation_settings['x'] = fade_offset;
            }

            if (onscroll_value == 1) {
                animation_settings['scrollTrigger'] = {
                    trigger: item,
                    start: 'top 85%',
                }
            }
            gsap.from(item, animation_settings);
        })
    }
    /////////////////////////////////////////////////////


    /////////////////////////////////////////////////////
    // 21. Image Reveal Animation 
    let imgs_reveal = document.querySelectorAll(".img-reveal");

    imgs_reveal.forEach((container) => {
        let image = container.querySelector("img");
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: container,
                toggleActions: "restart none none reset",
                once: true,
            }
        });

        tl.set(container, {
            autoAlpha: 1
        });
        tl.from(container, 1.5, {
            xPercent: -100,
            ease: Power2.out
        });
        tl.from(image, 1.5, {
            xPercent: 100,
            scale: 1.3,
            delay: -1.5,
            ease: Power2.out
        });
    });
    /////////////////////////////////////////////////////


    /////////////////////////////////////////////////////
    // Full Image 
    $(function() {
        let full_images = document.querySelector('.tp-about-full-image');

        if (full_images && screen.width > 767) {
            gsap.to(".tp-about-full-image video", { // Actova Video
                width: "100%",
                ease: "power2.out",
                duration: 3,
                scrollTrigger: {
                    trigger: full_images,
                    start: "top 50%",
                    end: "top top",
                    scrub: 1.5,
                    markers: false,
                }
            });

            const textTL = gsap.timeline({
                scrollTrigger: {
                    trigger: full_images,
                    start: "top 50%",
                    end: "top top",
                    scrub: 1.5,
                    markers: false,
                }
            });

            textTL.to(".tp-about-full-image .text-left", {
                    left: "-20%",
                    opacity: 0.5,
                    ease: "power3.out",
                    duration: 3,
                })
                .to(".tp-about-full-image .text-right", {
                    right: "-20%",
                    opacity: 0.5,
                    ease: "power3.out",
                    duration: 2,
                }, "<");
        }

    });

    /////////////////////////////////////////////////////


    $(window).scroll(function() {
        if ($(window).width() <= 767) { // Adjust the breakpoint as needed (576px is Bootstrap's sm breakpoint)
            return; // Disable animation for small devices
        }

        var scroll = $(window).scrollTop();

        // Move banner down and scale down gradually
        var translateYBanner = Math.min(scroll / 2, 500); // Moves down, limit to 500px
        var scale = Math.max((100 - scroll / 5) / 100, 0); // Ensure scale never goes below 0
        var opacity = Math.max(1 - scroll / 500, 0); // Ensure opacity never goes below 0

        $(".tp-hero5-area .tp-hero5-content").css({
            transform: 'translate3d(0%, ' + translateYBanner + 'px, 0) scale(' + scale + ')',
            opacity: opacity > 0 ? opacity : 0, // Prevent negative opacity
        });

        // Dashboard effect: Move up and rotateX from 45deg to 0deg
        var translateYDashboard = Math.min(scroll / 2, 300); // Move up, limit to 300px
        var rotateXValue = Math.max(30 - (scroll / 10), 0); // Gradually reduce rotateX from 45deg to 0deg

        // Apply smooth transition of rotateX from 45deg to 0deg
        $(".hero5-img img").css({
            "transform": "translate3d(0, -" + translateYDashboard + "px, 0) rotateX(" + rotateXValue + "deg)",
        });
    });

    /////////////////////////////////////////////////////
    // 06. Testimonial Slider
    if (document.querySelector('.tp-testimonial5-active')) {
        const tsm_slider5 = new Swiper('.tp-testimonial5-active', {
            loop: true,
            speed: 1500,
            slidesPerView: 4,
            navigation: {
                nextEl: ".tp-tsm-next",
                prevEl: ".tp-tsm-prev",
            },
            breakpoints: {
                240: {
                    slidesPerView: 1,
                    spaceBetween: 15,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 15,
                },
                1200: {
                    slidesPerView: 3,
                    spaceBetween: 15,
                },
                1600: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                },
            },
        });

        function setEqualHeight() {
            let maxHeight = 0;
            document.querySelectorAll('.tp-testimonial5-active .swiper-slide').forEach(slide => {
                slide.style.height = "auto";
                let h = slide.offsetHeight;
                if (h > maxHeight) maxHeight = h;
            });
            document.querySelectorAll('.tp-testimonial5-active .swiper-slide').forEach(slide => {
                slide.style.height = maxHeight + "px";
            });
        }

        // Run on load and resize
        window.addEventListener('load', setEqualHeight);
        window.addEventListener('resize', setEqualHeight);
    }
    ////////////////////////////////////////////////////

    //////////////////////////////////////////////////// home - 05
    if (document.querySelector('.tp-hero5-area')) {

        function moveRandom(el) {
            const x = (Math.random() - 0.5) * 1000;
            const y = (Math.random() - 0.5) * 1000;

            el.style.transform = `translate(${x}px, ${y}px)`;

            // repeat movement
            setTimeout(() => moveRandom(el), 3000);
        }

        function createSnowflake() {
            const snowflake = document.createElement('div');
            snowflake.classList.add('snowflake');

            const size = Math.random() * 5 + 2; // Size between 5px and 15px
            const uniqueId = Date.now() + Math.random();

            snowflake.innerHTML = `
        <svg width="${size}" height="${size}" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="7" cy="7" r="7" fill="url(#paint0_radial_${uniqueId})"/>
            <defs>
                <radialGradient id="paint0_radial_${uniqueId}" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(7 7) rotate(90) scale(7)">
                    <stop stop-color="#ffffff"/>
                    <stop offset="1" stop-color="white" stop-opacity="0"/>
                </radialGradient>
            </defs>
        </svg>
      `;

            // Random starting position
            snowflake.style.left = Math.random() * window.innerWidth + 'px';
            snowflake.style.top = Math.random() * window.innerHeight + 'px';

            document.querySelector('.tp-hero5-area').appendChild(snowflake);

            // Start floating movement
            setTimeout(() => moveRandom(snowflake), 200);
        }

        // Create random floating dots
        for (let i = 0; i < 125; i++) {
            createSnowflake();
        }
    }
    ////////////////////////////////////////////////////

    ////////////////////////////////////////////////////
    if (document.querySelector("#dotTop") && document.querySelector("#dotBottom")) {
        gsap.registerPlugin(MotionPathPlugin);

        const moveTL = gsap.timeline({
            repeat: -1
        });

        moveTL.to("#dotTop", {
            duration: 5,
            motionPath: {
                path: "#topPath",
                align: "#topPath",
                alignOrigin: [0.5, 0.5],
                start: 0,
                end: 1
            },
            ease: "none"
        }, 0);

        moveTL.to("#dotBottom", {
            duration: 5,
            motionPath: {
                path: "#bottomPath",
                align: "#bottomPath",
                alignOrigin: [0.5, 0.5],
                start: 0,
                end: 1
            },
            ease: "none"
        }, 0);

        moveTL.to(["#dotTop", "#dotBottom"], {
            duration: 3,
            motionPath: {
                path: "#mergePath",
                align: "#mergePath",
                alignOrigin: [0.5, 0.5],
                start: 0,
                end: 1
            },
            ease: "none"
        });

        moveTL.to("#dotTop", {
            duration: 2,
            motionPath: {
                path: "#topRightPath",
                align: "#topRightPath",
                alignOrigin: [0.5, 0.5],
                start: 0,
                end: 1
            },
            ease: "none"
        });

        moveTL.to("#dotBottom", {
            duration: 2,
            motionPath: {
                path: "#bottomRightPath",
                align: "#bottomRightPath",
                alignOrigin: [0.5, 0.5],
                start: 0,
                end: 1
            },
            ease: "none"
        }, "<");
    }
    ////////////////////////////////////////////////////


    ////////////////////////////////////////////////////
    document.addEventListener("DOMContentLoaded", function() {
        const integrationList = document.querySelector(".tp-integration5-list");
        if (integrationList) {
            gsap.registerPlugin(ScrollTrigger);
            gsap.from(".tp-integration5-item", {
                scrollTrigger: {
                    trigger: ".tp-integration5-list",
                    start: "top 80%",
                    toggleActions: "play none none reverse",
                },
                y: -80,
                opacity: 0,
                duration: 1,
                ease: "bounce.out",
                stagger: 0.15,
            });
        }
    });
    ////////////////////////////////////////////////////


    ////////////////////////////////////////////////////
    document.addEventListener("DOMContentLoaded", function() {
        const ctaArea = document.querySelector(".tp-cta5-content");
        const images = document.querySelectorAll(".tp-cta5-area .img");

        if (ctaArea && images.length > 0) {
            ctaArea.addEventListener("mousemove", (e) => {
                const rect = ctaArea.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                const moveX = (x / rect.width - 0.5) * 30;
                const moveY = (y / rect.height - 0.5) * 20;

                images.forEach((img, index) => {
                    const speed = (index + 1) * 0.5;
                    gsap.to(img, {
                        x: moveX * speed,
                        y: moveY * speed,
                        duration: 1,
                        ease: "power2.out",
                    });
                });
            });

            ctaArea.addEventListener("mouseleave", () => {
                gsap.to(images, {
                    x: 0,
                    y: 0,
                    duration: 1,
                    ease: "power3.out",
                });
            });
        }
    });
    ////////////////////////////////////////////////////


    ////////////////////////////////////////////////////
    document.addEventListener("DOMContentLoaded", function() {
        const texts = document.querySelectorAll(".elastic-anim");
        if (texts.length > 0) {
            texts.forEach((el) => animation_text_1(el));
        }
    });

    function animation_text_1(element) {
        const theText = typeof element === "string" ? document.querySelector(element) : element;
        if (!theText) return;

        function wrapTextNodes(node) {
            const children = Array.from(node.childNodes);
            children.forEach(child => {
                if (child.nodeType === 3) {
                    const text = child.textContent;
                    const fragment = document.createDocumentFragment();
                    for (let i = 0; i < text.length; i++) {
                        const char = text[i] === " " ? "\u00A0" : text[i];
                        const div = document.createElement("div");
                        div.textContent = char;
                        fragment.appendChild(div);
                    }
                    node.replaceChild(fragment, child);
                } else if (child.nodeType === 1) {
                    wrapTextNodes(child);
                }
            });
        }

        wrapTextNodes(theText);

        gsap.registerPlugin(ScrollTrigger);
        gsap.fromTo(theText.querySelectorAll("div"), {
            opacity: 0,
            y: 30
        }, {
            duration: 2,
            opacity: 1,
            y: 0,
            stagger: 0.03,
            ease: "elastic(1.2, 0.5)",
            scrollTrigger: {
                trigger: theText,
                start: "top 70%",
                toggleActions: "restart none none none"
            }
        });
    }
    ////////////////////////////////////////////////////


    ////////////////////////////////////////////////////
    // TIMER JS
    const __days = document.querySelector("#countdown_days")
    const __hours = document.querySelector("#countdown_hours")
    const __minutes = document.querySelector("#countdown_minutes")
    const __seconds = document.querySelector("#countdown_seconds")

    if (__days && __hours && __minutes && __seconds) {
        const newYearEnd = 'Jan 01 2027 00:00:00';

        function countdown() {
            const newYearEndDate = new Date(newYearEnd);
            const currentDate = new Date();

            const totalSeconds = (newYearEndDate - currentDate) / 1000;
            const days = Math.floor(totalSeconds / 3600 / 24);
            const hours = Math.floor(totalSeconds / 3600) % 24;
            const minutes = Math.floor(totalSeconds / 60) % 60;
            const seconds = Math.floor(totalSeconds % 60);


            __days.innerHTML = formatTime(days);
            __hours.innerHTML = formatTime(hours);
            __minutes.innerHTML = formatTime(minutes);
            __seconds.innerHTML = formatTime(seconds);

        }
        countdown();

        function formatTime(time) {
            return time < 10 ? `0${time}` : time;
        }

        setInterval(countdown, 1000);
    }
    ////////////////////////////////////////////////////


    ////////////////////////////////////////////////////
    if (document.querySelector(".tp-event-slider") && document.querySelector(".tp-event-slider2")) {
        var eventSlider = new Swiper(".tp-event-slider", {
            spaceBetween: 10,
            slidesPerView: 'auto',
            freeMode: true,
            watchSlidesProgress: true,
        });
        var eventSlider2 = new Swiper(".tp-event-slider2", {
            spaceBetween: 10,
            navigation: {
                nextEl: ".event-btn-next",
                prevEl: ".event-btn-prev",
            },
            thumbs: {
                swiper: eventSlider,
            },
        });
    }
    ////////////////////////////////////////////////////

    ////////////////////////////////////////////////////
    // Home One Hero Animation | Actova
    const heroSection = document.querySelector('.tp-hero1-area');
    const heroImg = document.querySelector('.tp-hero1-area .hero-img');
    const actovaText = document.querySelector('.tp-hero1-area .actova-text');

    if (heroImg) {
        gsap.from(heroImg, {
            y: 300,
            scrollTrigger: {
                trigger: heroSection,
                scrub: 2,
            }
        });
    }

    if (actovaText) {
        gsap.from(actovaText, {
            y: 400,
            scrollTrigger: {
                trigger: heroSection,
                scrub: 1.5,
            }
        });
    }

    // Header sticky on scroll
    const header_sticky = document.querySelector(".tp-header-stikcy");

    if (header_sticky) {
        let lastScroll = 0;
        const headerHeight = header_sticky.offsetHeight;

        gsap.set(header_sticky, {
            y: 0
        });

        ScrollTrigger.create({
            start: 0,
            end: "max",
            onUpdate: (self) => {
                const scroll = smoother ? smoother.scrollTop() : window.scrollY;

                const isScrollingDown = scroll > lastScroll;
                const isScrollingUp = scroll < lastScroll;

                if (isScrollingDown && scroll > 100) {
                    gsap.to(header_sticky, {
                        y: -headerHeight,
                        duration: 0.4,
                        ease: "power2.out"
                    });
                }

                if (isScrollingUp) {
                    gsap.to(header_sticky, {
                        y: 0,
                        duration: 0.4,
                        ease: "power2.out"
                    });

                    if (scroll > 100) {
                        header_sticky.classList.add("scrolled");
                    }
                }

                if (scroll <= 100) {
                    header_sticky.classList.remove("scrolled");
                }

                lastScroll = scroll;
            }
        });
    }
    // end header sticky on scroll


    ////////////////////////////////////////////////////
    // 03. Menu Controls JS
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



    ////////////////////////////////////////////////////
    // 60. Summit animation effect
    const summit_anim = document.getElementById("summit-dots-animation");
    if (summit_anim) {
        document.addEventListener("DOMContentLoaded", () => {
            const summit_anim = document.getElementById("summit-dots-animation");
            const particleCount = 20;

            for (let i = 0; i < particleCount; i++) {
                const dot = document.createElement("div");
                dot.classList.add("particle");

                const size = gsap.utils.random(3, 8);
                dot.style.width = size + "px";
                dot.style.height = size + "px";

                summit_anim.appendChild(dot);

                gsap.delayedCall(gsap.utils.random(0, 10), () => {
                    summitDotsAnimation(dot);
                });
            }

            function summitDotsAnimation(dot) {
                const w = summit_anim.offsetWidth;
                const h = summit_anim.offsetHeight;

                const startX = gsap.utils.random(0, w);
                const endX = startX + gsap.utils.random(-100, 100);
                const startY = h + gsap.utils.random(20, 80);
                const endY = -30;

                gsap.set(dot, {
                    x: startX,
                    y: startY,
                    opacity: 0
                });

                const duration = gsap.utils.random(15, 30);

                gsap.timeline({
                        onComplete: () => summitDotsAnimation(dot)
                    })
                    .to(dot, {
                        duration: duration,
                        x: endX,
                        y: endY,
                        opacity: 1,
                        ease: "none"
                    })
                    .to(dot, {
                        duration: 0.6,
                        opacity: 0,
                        ease: "power1.in"
                    }, "-=0.5");
            }
        });
    }
    ////////////////////////////////////////////////////


    ////////////////////////////////////////////////////
    // 61. Past conference slider
    var past_conf = new Swiper(".tp-past-conference-slider", {
        loop: true,
        speed: 2000,
        slidesPerView: 1,
        autoplay: {
            delay: 2500,
        },
        breakpoints: {
            240: {
                slidesPerView: 1,
                spaceBetween: 15,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 15,
            },
            1500: {
                slidesPerView: 2,
                spaceBetween: 24,
            },
        },
    });
    ////////////////////////////////////////////////////


    ////////////////////////////////////////////////////
    // 62. Conference ticket animation
    const ticketArea = document.querySelector(".tp-aai-conference-ticket-area");
    const ticketBgImg = document.querySelector(".tp-aai-conference-ticket-bg");

    if (ticketArea && ticketBgImg && screen.width > 767) {
        var xPercentLeft = '-90';
        var xPercentRight = '82';

        if (screen.width > 1367 && screen.width < 1800) {
            xPercentLeft = '-75';
            xPercentRight = '75';
        } else if (screen.width <= 1366 && screen.width > 1024) {
            xPercentLeft = '-80';
            xPercentRight = '72';
        } else if (screen.width <= 1024 && screen.width > 991) {
            xPercentLeft = '-90';
            xPercentRight = '82';
        } else if (screen.width <= 990 && screen.width > 767) {
            xPercentLeft = '0';
            xPercentRight = '0';
        }

        gsap.fromTo(ticketBgImg, {
            width: "400px"
        }, {
            width: "100%",
            duration: 10,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ticketArea,
                start: "top 80%",
                end: "top top",
                scrub: true
            }
        });

        ScrollTrigger.create({
            trigger: ticketArea,
            start: "top top",
            end: "+=350%",
            pin: true,
            pinSpacing: true,
            scrub: 1
        });

        let ticketTL = gsap.timeline({
            scrollTrigger: {
                trigger: ticketArea,
                start: "top top",
                end: "+=350%",
                scrub: 1
            }
        });

        ticketTL.fromTo(".tp-aai-conference-ticket-text", {
                opacity: 0
            }, {
                opacity: 1,
                duration: 1.5,
                ease: "power2.out",
                onStart: () => {
                    gsap.set(".tp-aai-conference-ticket-text", {
                        display: "block"
                    });
                }
            },
            "+=0.2"
        );

        ticketTL.to(".tp-aai-conference-ticket-text.text-1", {
            xPercent: xPercentLeft,
            duration: 5,
            ease: "power3.out"
        }, "+=0.2");

        ticketTL.to(".tp-aai-conference-ticket-text.text-2", {
            xPercent: xPercentRight,
            duration: 5,
            ease: "power3.out"
        }, "<");

        ticketTL.fromTo(".tp-aai-conference-ticket-box", {
                opacity: 0
            }, {
                opacity: 1,
                duration: 3,
                ease: "power2.out",
                onStart: () => {
                    gsap.set(".tp-aai-conference-ticket-box", {
                        display: "block"
                    });
                }
            },
            "+=0.3"
        );
    }
    ////////////////////////////////////////////////////


    ////////////////////////////////////////////////////
    // 63. Footer text animation
    const footerText6 = document.querySelector(".tp-footer6-text");
    const footerText6Reveal = footerText6 ?.querySelector(".text-reveal");

    if (footerText6 && footerText6Reveal) {

        let FT6mouseX = 0,
            FT6mouseY = 0;
        let FT6currentX = 0,
            FT6currentY = 0;
        let FT6IsInside = false;

        function FooterText6GetRadius() {
            const width = window.innerWidth;

            if (width < 500) return 40;
            if (width < 992) return 70;
            if (width < 1200) return 90;
            if (width < 1500) return 120;
            return 160;
        }

        footerText6.addEventListener("mousemove", (e) => {
            const rect = footerText6.getBoundingClientRect();
            FT6mouseX = e.clientX - rect.left;
            FT6mouseY = e.clientY - rect.top;

            if (!FT6IsInside) {
                footerText6Reveal.style.opacity = 1;
                FT6IsInside = true;
            }
        });

        footerText6.addEventListener("mouseleave", () => {
            footerText6Reveal.style.opacity = 0;
            FT6IsInside = false;
        });

        function FooterText6Animation() {
            const radius = FooterText6GetRadius();

            FT6currentX += (FT6mouseX - FT6currentX) * 0.15;
            FT6currentY += (FT6mouseY - FT6currentY) * 0.15;

            footerText6Reveal.style.clipPath = `circle(${radius}px at ${FT6currentX}px ${FT6currentY}px)`;

            requestAnimationFrame(FooterText6Animation);
        }

        FooterText6Animation();

    }
    ////////////////////////////////////////////////////


    ////////////////////////////////////////////////////
    // 64. Text animation on scroll
    function tpTextInvertAnimation() {
        if (!$(".tp-text-invert").length) {
            return;
        }

        const invertSplit = new SplitText(".tp-text-invert", {
            type: "lines"
        });

        invertSplit.lines.forEach((target) => {
            gsap.to(target, {
                backgroundPositionX: 0,
                ease: "none",
                scrollTrigger: {
                    trigger: target,
                    scrub: 3,
                    start: "top 90%",
                    end: "bottom center",
                },
            });
        });
    }

    $(function() {
        tpTextInvertAnimation();
    });
    //////////////////////////////////////////////////////


    ////////////////////////////////////////////////////
    // 65. Conference area animation
    if (document.querySelector(".tp-conference-area")) {

        gsap.to(".tp-conference-area .circle-img, .tp-conference-content", {
            scale: 1,
            ease: "none",
            scrollTrigger: {
                trigger: ".tp-conference-area",
                start: "top 80%",
                end: "bottom center",
                scrub: true
            }
        });

        gsap.to(".tp-conference-area .full-img", {
            scale: 1.2,
            ease: "none",
            scrollTrigger: {
                trigger: ".tp-conference-area",
                start: "top 80%",
                end: "bottom center",
                scrub: true
            }
        });
    }
    ////////////////////////////////////////////////////


    ////////////////////////////////////////////////////
    // 66. Contact Canvas Background Animation
    const contactCanvas = document.getElementById('contactGlowCanvas');

    if (contactCanvas) {
        const ctx = contactCanvas.getContext('2d');

        contactCanvas.width = 1243;
        contactCanvas.height = 1243;

        const centerX = 621.5;
        const centerY = 621.5;
        const radius = 287.5;
        const blur = 167;

        const gradient = ctx.createRadialGradient(
            centerX, centerY, 0,
            centerX, centerY, radius + blur
        );

        gradient.addColorStop(0, 'rgba(161, 255, 117, 1)');
        gradient.addColorStop(0.3, 'rgba(161, 255, 117, 0.8)');
        gradient.addColorStop(0.5, 'rgba(161, 255, 117, 0.4)');
        gradient.addColorStop(0.7, 'rgba(161, 255, 117, 0.15)');
        gradient.addColorStop(0.85, 'rgba(161, 255, 117, 0.05)');
        gradient.addColorStop(1, 'rgba(161, 255, 117, 0)');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius + blur, 0, Math.PI * 2);
        ctx.fill();
    }
    //////////////////////////////////////////////////////


    // Contact Form Handler
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const status = document.getElementById('form-status');
            const btn = contactForm.querySelector('button[type="submit"]');
            
            // Premium feedback effect
            if (status) {
                status.style.display = 'block';
                status.innerHTML = 'Sending message...';
                btn.disabled = true;
                btn.style.opacity = '0.5';

                setTimeout(() => {
                    status.innerHTML = 'Thank you! Your message has been sent successfully.';
                    contactForm.reset();
                    btn.disabled = false;
                    btn.style.opacity = '1';
                }, 1500);
            }
        });
    }

})(jQuery);
