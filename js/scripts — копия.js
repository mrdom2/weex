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
        autoControls: false, // показывает кнопку плей и стоп
        onSliderResize: function (currentIndex) {
            if ($(document).width() < 768) {
                $(".step1img,.step2img,.step3img").css("opacity", "1");
                if (currentIndex == 0) {
                    $(".step2img, .step3img").hide();
                    $(".step1img").show();
                } else if (currentIndex == 1) {
                    $(".step1img, .step3img").hide();
                    $(".step2img").show();
                } else if (currentIndex == 2) {
                    $(".step1img, .step2img").hide();
                    $(".step3img").show();
                }
            } else {
                $(".step1img,.step2img,.step3img").show();
                if (currentIndex == 0) {
                    $(".step3img, .step2img").css("opacity", "0.8");
                    $(".step1img").css("opacity", "1");
                } else if (currentIndex == 1) {
                    $(".step1img, .step3img").css("opacity", "0.8");
                    $(".step2img").css("opacity", "1");
                } else if (currentIndex == 2) {
                    $(".step1img, .step2img").css("opacity", "0.8");
                    $(".step3img").css("opacity", "1");
                }
            }
        },
        onSliderLoad: function (currentIndex) {
            if ($(document).width() < 768) {
                if (currentIndex == 0) {
                    $(".step2img, .step3img").hide();
                    $(".step1img").show();
                } else if (currentIndex == 1) {
                    $(".step1img, .step3img").hide();
                    $(".step2img").show();
                } else if (currentIndex == 2) {
                    $(".step1img, .step2img").hide();
                    $(".step3img").show();
                }
            } else {
                if (currentIndex == 0) {
                    $(".step3img, .step2img").css("opacity", "0.8");
                    $(".step1img").css("opacity", "1");
                } else if (currentIndex == 1) {
                    $(".step1img, .step3img").css("opacity", "0.8");
                    $(".step2img").css("opacity", "1");
                } else if (currentIndex == 2) {
                    $(".step1img, .step2img").css("opacity", "0.8");
                    $(".step3img").css("opacity", "1");
                }
            }
        },
        onSlideBefore: function ($slideElement, oldIndex, newIndex) {
            if ($(document).width() < 768) {
                if (newIndex == 0) {
                    $(".step2img, .step3img").hide();
                    $(".step1img").show();
                } else if (newIndex == 1) {
                    $(".step1img, .step3img").hide();
                    $(".step2img").show();
                } else if (newIndex == 2) {
                    $(".step1img, .step2img").hide();
                    $(".step3img").show();
                }
            } else {
                if (newIndex == 0) {
                    $(".step3img, .step2img").css("opacity", "0.8");
                    $(".step1img").css("opacity", "1");
                } else if (newIndex == 1) {
                    $(".step1img, .step3img").css("opacity", "0.8");
                    $(".step2img").css("opacity", "1");
                } else if (newIndex == 2) {
                    $(".step1img, .step2img").css("opacity", "0.8");
                    $(".step3img").css("opacity", "1");
                }
            }
        }
    });
});
