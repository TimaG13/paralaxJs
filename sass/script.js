
//scroll
$(function () {

    var $window = $(window);		//Window object

    var scrollTime = 0.5;			//Scroll time
    var scrollDistance = 200;		//Distance. Use smaller value for shorter scroll and greater value for longer scroll

    $window.on("mousewheel DOMMouseScroll", function (event) {

        event.preventDefault();

        var delta = event.originalEvent.wheelDelta / 120 || -event.originalEvent.detail / 3;
        var scrollTop = $window.scrollTop();
        var finalScroll = scrollTop - parseInt(delta * scrollDistance);

        TweenMax.to($window, scrollTime, {
            scrollTo: {y: finalScroll, autoKill: false},
            ease: Power1.easeOut,
            autoKill: true,
            overwrite: 5
        });

    });

});
$(document).ready(function () {

    // anim rand text
    $('#short_link').on('scrollSpy:enter', function () {
        //когда элемент виден
        $(function () {
            // генератор случайной буквы
            function str_rand() {
                var result = '';
                var words = 'QWERTY UIOPAS D FGHJ KLZXCV BNM';
                var max_position = words.length - 1;
                for (i = 0; i < 15; ++i) {
                    position = Math.floor(Math.random() * max_position);
                    result = result + words.substring(position, position + 1);
                }
                return result;
            }
            // записую случайные буквы
            var st = setInterval(function () {
                $("#short_link").text(str_rand());
            }, 50);
            // останавливаю запись букв
            setTimeout(function () {
                clearInterval(st);
            }, 1000);
            // записую текст
            setTimeout(function () {
                $("#short_link").html('Lorem ipsum');
            }, 1001);

        });
    });
    $('#short_link').scrollSpy();
    ///////////////////
    //hov

    var timeout;
    $('.gallery').mousemove(function (e) {
        if (timeout) clearTimeout(timeout);
        setTimeout(callParallax.bind(null, e), 200);

    });

    function callParallax(e) {
        parallaxIt(e, '.slide', -100);
        parallaxIt(e, '.gallery .slide', 0);
    }

    function parallaxIt(e, target, movement) {
        var $this = $('.gallery');
        var relX = e.pageX - $this.offset().left;
        var relY = e.pageY - $this.offset().top;

        TweenMax.to(target, 1, {
            x: (relX - $this.width() / 2) / $this.width() * 100,
            y: (relY - $this.height() / 2) / $this.height() * 100,
            ease: Power2.easeOut
        })
    }

    //carousel
    $('.center').slick({
        variableWidth: true,
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });

    ///////////////////
    // anim-1
    $('.anim-1').on('scrollSpy:enter', function () {
        //когда элемент виден
        //animated
        $(".anim-1").addClass("animated");
        $(".anim-1").css({"animation-name": "fadeIn", "visibility": "visible"});
        setTimeout(function () {
            $(".anim-1").removeClass("animated");
        }, 200);
    });
    $('.anim-1').on('scrollSpy:exit', function () {
        //когда элемент не виден
        $(".anim-1").css({"animation-name": "none", "visibility": "hidden"});
    });
    $('.anim-1').scrollSpy();
    ///////////////////
///////////////////
    // anim-1-box2
    $('.anim-1-box2').on('scrollSpy:enter', function () {
        //когда элемент виден
        $(".anim-1-box2").css({"animation-name": "myanim1","opacity": "1"});
        setTimeout(function () {
            $(".anim-1-box2").removeClass("animated");
        }, 200);
    });
    $('.anim-1-box2').on('scrollSpy:exit', function () {
        //когда элемент не виден
        $(".anim-1-box2").css({"animation-name": "none","opacity": "0"});
    });
    $('.anim-1-box2').scrollSpy();
    ///////////////////
    // anim-2-box2
    $('.anim-2-box2').on('scrollSpy:enter', function () {
        //когда элемент виден
        $(".anim-2-box2").css({"animation-name": "myanim2","opacity": "1"});
        setTimeout(function () {
            $(".anim-2-box2").removeClass("animated");
        }, 200);
    });
    $('.anim-2-box2').on('scrollSpy:exit', function () {
        //когда элемент не виден
        $(".anim-2-box2").css({"animation-name": "none","opacity": "0"});
    });
    $('.anim-2-box2').scrollSpy();
    ///////////////////
    // anim-3-box2
    $('.anim-3-box2').on('scrollSpy:enter', function () {
        //когда элемент виден
        $(".anim-3-box2").css({"animation-name": "myanim3", "opacity": "1"});
        setTimeout(function () {
            $(".anim-3-box2").removeClass("animated");
        }, 200);
    });
    $('.anim-3-box2').on('scrollSpy:exit', function () {
        //когда элемент не виден
        $(".anim-3-box2").css({"animation-name": "none", "opacity": "0"});
    });
    $('.anim-3-box2').scrollSpy();
    ///////////////////
///////////////////
    // anim slider
    $('.myAnimSlider').on('scrollSpy:enter', function () {
        //когда элемент виден
        $(".myAnimSlider").css({"animation-name": "myAnimSlider", "opacity": "1"});
        setTimeout(function () {
            $(".myAnimSlider").removeClass("animated");
        }, 200);
    });
    $('.myAnimSlider').on('scrollSpy:exit', function () {
        //когда элемент не виден
        $(".myAnimSlider").css({"animation-name": "none", "opacity": "0"});
    });
    $('.myAnimSlider').scrollSpy();
    ///////////////////


    //slider btn
    var btnNext = document.querySelector('.slick-prev.slick-arrow');
    btnNext.innerHTML = "<span class=\"glyphicon glyphicon-menu-left\" aria-hidden=\"true\"></span>";
    var btnprev = document.querySelector('.slick-next.slick-arrow');
    btnprev.innerHTML = "<span class=\"glyphicon glyphicon-menu-right\" aria-hidden=\"true\"></span>";
    //wow animate
    new WOW().init();
    //paralax img
    var $layer_0 = $('.layer-0'),
        $layer_1 = $('.layer-1'),
        $layer_2 = $('.layer-2'),
        $layer_3 = $('.layer-3'),
        $layer_4 = $('.layer-4'),
        $container = $('body'),
        container_w = $container.width(),
        container_h = $container.height();

    $(window).on('mousemove.parallax', function (event) {
        var pos_x = event.pageX,
            pos_y = event.pageY,
            left = 0,
            tops = 0;

        left = container_w / 2 - pos_x;
        tops = container_h / 2 - pos_y;
        TweenMax.to(
            $layer_1,
            1,
            {
                css: {
                    transform: 'translateX(' + left / 40 + 'px) translateY(' + tops / 40 + 'px)'
                },
                ease: Expo.easeOut,
                overwrite: 'all'
            });
        TweenMax.to(
            $layer_0,
            10,
            {
                css: {transform: 'rotate(' * tops / left / 5 + 'deg)'},
                ease: Expo.easeOut,
                overwrite: 'none'
            });
        TweenMax.to(
            $layer_2,
            16, {
                css: {
                    transform: "matrix3d(0," * tops / left / 5 + "0" * tops / left / 5 + "%,0,0)"
                },
                ease: Expo.easeOut,
                overwrite: 'none'
            });
        TweenMax.to(
            $layer_3,
            10, {
                css:
                    {
                        transform: 'rotateY(0' + left / 100 + 'deg)'
                    },
                ease: Expo.easeOut,
                overwrite: 'none'
            });
        TweenMax.to(
            $layer_4,
            10, {
                css:
                    {
                        transform: 'rotateY(0' + left / 50 + 'deg)'
                    },
                ease: Expo.easeOut,
                overwrite: 'all'
            })
    });
    /////////


});
