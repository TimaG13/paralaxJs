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

    $(function () {
        // генератор случайной буквы
        function str_rand() {
            var result = '';
            var words = 'QWERTYUIOPASDFGHJKLZXCVBNM';
            var max_position = words.length - 1;
            for (i = 0; i < 4; ++i) {
                position = Math.floor(Math.random() * max_position);
                result = result + words.substring(position, position + 1);
            }
            return result;
        }

        // функция скрол
        var $win = $(window);
        var $marker = $('#gen');
        $win.scroll(function () {
            if ($win.scrollTop() + $win.height() >= $marker.offset().top) {
                // записую случайные буквы
                var st = setInterval(function () {
                    $("#short_link").text(str_rand());
                }, 90);
                // останавливаю запись букв
                setTimeout(function () {
                    clearInterval(st);
                }, 1000);
                // записую текст
                setTimeout(function () {
                    $("#short_link").html('tima');
                }, 1001);
            }
        });

        var widthWin = $(window);
        var myElem = $('#short_link');

        window.onscroll = function () {
            if ($(document).scrollTop() + $(window).height() > $('#short_link').offset().top && $(document).scrollTop() - $('#short_link').offset().top < $('#short_link').height()) {
            }
            else {
                // записую случайные буквы
                var st = setInterval(function () {
                    $("#short_link").text(str_rand());
                }, 100);
                // останавливаю запись букв
                setTimeout(function () {
                    clearInterval(st);
                }, 1500);
                // записую текст
                setTimeout(function () {
                    $("#short_link").html('tima');
                }, 1501);
            }
        };


    });

    //hov

    var timeout;
    $('#container').mousemove(function (e) {
        if (timeout) clearTimeout(timeout);
        setTimeout(callParallax.bind(null, e), 200);

    });

    function callParallax(e) {
        parallaxIt(e, '.slide', -100);
        parallaxIt(e, '#container .slide', 0);
    }

    function parallaxIt(e, target, movement) {
        var $this = $('#container');
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
    // $('.tile').on('scrollSpy:enter', function() {
    //     //когда элемент виден
    //     console.log('enter:', $(this).attr('id'));
    // });
    //
    // $('.tile').on('scrollSpy:exit', function() {
    //     //когда элемент не виден
    //     console.log('exit:', $(this).attr('id'));
    // });
    //
    // $('.tile').scrollSpy();
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

        // TweenMax.to(
        //     $layer_1,
        //     1,
        //     {
        //         css: {
        //             transform: 'translateX(' + left / 40 + 'px) translateY(' + tops / 40 + 'px)'
        //         },
        //         ease: Expo.easeOut,
        //         overwrite: 'all'
        //     });
        //
        // TweenMax.to(
        //     $layer_0,
        //     10,
        //     {
        //         css: {transform: 'rotate(' + left / 50 + 'deg)'},
        //         ease: Expo.easeOut,
        //         overwrite: 'none'
        //     });
        TweenMax.to(
            $layer_2,
            16, {
                css: {
                    transform: "matrix3d(0," * tops / left / 5 + "0" * tops / left / 5 + "%,0,0)"
                },
                ease: Expo.easeOut,
                overwrite: 'none'
            });
        TweenMax.set($layer_3, {perspective:400});
        TweenMax.to(
            $layer_3,
            10, {css:
                    {
                       transform: 'rotate3d(0,0,' + left / 50 + 'deg,0)',
                    },
                ease: Expo.easeOut,
                overwrite: 'none'
            })
    });


});
