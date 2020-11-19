$(document).ready(function () {
    const player = new Plyr('#player');
    if ($(window).scrollTop() >= 10) {
        $('header').addClass('top-nav-collapse');
        $('header').css({
            paddingTop: 0.5 + '%',
            paddingBottom: 0.5 + '%'
        });
    }
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 10) {
            $('header').addClass('top-nav-collapse');
            $('header').css({
                paddingTop: 0.5 + '%',
                paddingBottom: 0.5 + '%'
            });
        } else {
            $('header').removeClass('top-nav-collapse');
            $('header').css({
                paddingTop: 15 + 'px',
                paddingBottom: 15 + 'px'
            });
        }
    });

    $("nav").on("click", "a", function (event) {
        event.preventDefault();

        var id = $(this).attr('href'),
            top = $(id).offset().top - 100;

        if (id == "#feeds") {
            top = top = $(id).offset().top + 200;
        }

        $('body,html').animate({
            scrollTop: top
        }, 1500);
    });



    $('.slider').bxSlider({
        pager: false, // показ номера страницы
        auto: false, // сделать автоматический переход
        autoControls: false // показывает кнопку плей и стоп
    });

    $('.slidersteps').bxSlider({
        pager: false, // показ номера страницы
        mode: 'fade',
        auto: false, // сделать автоматический переход
        autoControls: false // показывает кнопку плей и стоп
    });
});
