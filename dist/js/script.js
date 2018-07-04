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
        // $win.scroll(function () {
        //     if ($win.scrollTop() + $win.height() >= $marker.offset().top) {
        //         // записую случайные буквы
        //         var st = setInterval(function () {
        //             $("#short_link").text(str_rand());
        //         }, 90);
        //         // останавливаю запись букв
        //         setTimeout(function () {
        //             clearInterval(st);
        //         }, 1000);
        //         // записую текст
        //         setTimeout(function () {
        //             $("#short_link").html('tima');
        //         }, 1001);
        //     }
        // });

        var widthWin = $(window);
        var myElem = $('#short_link');

        // window.onscroll = function () {
        //     if ($(document).scrollTop() + $(window).height() > $('#short_link').offset().top && $(document).scrollTop() - $('#short_link').offset().top < $('#short_link').height()) {
        //     }
        //     else {
        //         // записую случайные буквы
        //         var st = setInterval(function () {
        //             $("#short_link").text(str_rand());
        //         }, 100);
        //         // останавливаю запись букв
        //         setTimeout(function () {
        //             clearInterval(st);
        //         }, 1500);
        //         // записую текст
        //         setTimeout(function () {
        //             $("#short_link").html('tima');
        //         }, 1501);
        //     }
        // };


    });

    // hov

    var timeout;
    $('#container').mousemove(function(e){
        if(timeout) clearTimeout(timeout);
        setTimeout(callParallax.bind(null, e), 200);

    });

    function callParallax(e){
        parallaxIt(e, '.slide', -100);
        parallaxIt(e, '#container .slide img', -30);
    }

    function parallaxIt(e, target, movement){
        var $this = $('#container');
        var relX = e.pageX - $this.offset().left;
        var relY = e.pageY - $this.offset().top;

        TweenMax.to(target, 1, {
            x: (relX - $this.width()/2) / $this.width() * 300,
            y: (relY - $this.height()/2) / $this.height() * 200,
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
    //slider btn
    var btnNext = document.querySelector('.slick-prev.slick-arrow');
    btnNext.innerHTML = "<span class=\"glyphicon glyphicon-menu-left\" aria-hidden=\"true\"></span>";
    var btnprev = document.querySelector('.slick-next.slick-arrow');
    btnprev.innerHTML = "<span class=\"glyphicon glyphicon-menu-right\" aria-hidden=\"true\"></span>";
    //wow animate
    new WOW().init();
});
