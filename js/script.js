$(document).ready(function() {
    
    $(window).scroll(function(){
        if($(window).scrollTop() > 100)
        {
            $('.nav-wrap').addClass("nav-wrap-fixed");
        }
        else if($(window).scrollTop() < 100) {
            $('.nav-wrap').removeClass("nav-wrap-fixed");
        }
        
        if($(window).scrollTop() > 260) {
            $('.scroll-menu-wrap').addClass("scroll-menu-fixed");
        }
        else if($(window).scrollTop() < 260) {
            $('.scroll-menu-wrap').removeClass("scroll-menu-fixed");
        }
    });
    
    //убирает подсказки при клике на поле ввода
    $('input,textarea').focus(function(){
       $(this).data('placeholder',$(this).attr('placeholder'))
       $(this).attr('placeholder','');
     });
     $('input,textarea').blur(function(){
       $(this).attr('placeholder',$(this).data('placeholder'));
     });
    //
    
    $(".building-news-list").bxSlider({
        nextSelector: ".b-n-slider-control__next",
        prevSelector: ".b-n-slider-control__prev",
        pagerCustom: ".b-n-links",
        nextText: " ",
        prevText: " ",
        onSliderLoad: function() {
            $(".main-slider .bx-pager.bx-default-pager").remove()
        }
    });
    
    $(window).click(function() {
        if($('.scroll-menu-btn').hasClass("open")) {
            $(".scroll-menu-btn").removeClass("open");
            $(".scroll-menu").slideToggle();
        }
    });
    
    $(".scroll-menu-btn").on('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        if($(window).width() <= 1050) {
           if($('.languages-list').css('display') == 'block') {
                $('.languages-list').css("display", "none");
            }
        }
    });
    
    var e = !1;
    $(".main-video").on("click", function() {
        e || $(".main-video").append('<iframe src="'+$(".main-video").data('url')+'?autoplay=1" frameborder="0" allowfullscreen></iframe>')
    });
    $(".modal-video").on("click", function() {
        e || $(".modal-video").append('<iframe src="'+$(".modal-video").data('url')+'?autoplay=1" frameborder="0" allowfullscreen></iframe>')
    });

    $("#video-modal").on('hidden.bs.modal', function (e) {
        e.preventDefault();
        $("#video-modal iframe").attr("src", '');
        $("#video-modal iframe").attr("src", $(".modal-video").data('url'));
    });
    var n = !1;
    $(".menu-btn").on("click", function() {
        if($(this).hasClass("open")) {
            $(this).removeClass("open");
            $(".menu").animate({left: "-420px"}, 400);
            $('body').css({'overflow': 'auto', 'height': 'auto'});
            $('.full-page').css({'overflow': 'auto', 'height': 'auto'});
            $('.overlay-min').fadeOut(400);
            $('.page-wrap').animate({'right': '0'});
            $('.nav-wrap').animate({'left': '0'});
            //$('.nav-wrap').css({'position': 'fixed'});
            
        }
        else {
            
            if($(window).width() > 415) {
                //$('.nav-wrap').css({'position': 'absolute'});
                $('.menu').css({'top': '0'});
                $('.page-wrap').animate({'right': '-420px'});
                $('.nav-wrap').animate({'left': '400px'});
            }
            if($(window).height() <= 480) {
                $('.menu').css({'overflow-y': 'scroll'});
            }
            
            $('body').css({'overflow': 'hidden', 'height': '100%'});
            $('.full-page').css({'overflow': 'hidden', 'height': '100%'});
            $(".menu").animate({left: "0"}, 400);
            $(this).addClass("open");
            $('.overlay-min').fadeIn(400);
        }
    }), $.fn.touchHide = function () {   
        var e = 0, t = $(this);
        t.on("touchstart", function (t) {
            var s = t.originalEvent;
            e = s.touches[0].pageX
        }), t.on("touchmove", function (t) {
            var s = t.originalEvent;
            e > s.touches[0].pageX && $(".menu").css("left", -(e - s.touches[0].pageX))
        }), t.on("touchend", function (t) {
            var s = t.originalEvent;
            e - 50 > s.changedTouches[0].pageX ? ($(".full-page").css({
                overflow: "auto",
                height: "auto"
            }), $("body").css({
                overflow: "auto",
                height: "auto"
            }), $('.overlay-min').fadeOut(400), $(".page-wrap").animate({right: "0"}), $(window).width() <= 400 ? ($(".menu").animate({left: "-420px"})) : $(".menu").animate({left: "-420px"}), $('.nav-wrap').animate({'left': '0'}), $(".menu-btn").removeClass("open")) : $(".menu").css("left", "0")
        })
    }, $(".menu").touchHide(),
    $("body").on("click", function() {
        if($(window).width() <= 1050) {
           if($('.languages-list').css('display') == 'block') {
                $('.languages-list').css("display", "none");
            }
        }
    }),
    $(".overlay-min").on("click", function() {
        if($(".menu-btn").hasClass("open"))
            {
                $(".menu-btn").removeClass("open");
                $(".menu").animate({left: "-420px"}, 400);
                $('body').css({'overflow': 'auto', 'height': 'auto'});
                $('.full-page').css({'overflow': 'auto', 'height': 'auto'});
                $('.overlay-min').fadeOut(400);
                $('.page-wrap').animate({'right': '0'});
                $('.nav-wrap').animate({'left': '0'});
            }
        if($(window).width() <= 1050) {
           if($('.languages-list').css('display') == 'block') {
                $('.languages-list').css("display", "none");
            }
        }
    }), $(".menu").on("click", function(e) {
        e.stopPropagation();
    }), $(".m-nav-item_sec").on("click", function() {
        $(this).find(".m-sec").animate({
            left: "0"
        }, 400)
    }), $(".m-sec-nav-item_th").on("click", function() {
        $(this).find(".m-th").animate({
            left: "0"
        }, 400)
    }), $(".m-sec__return, .m-th__return").on("click", function(e) {
        e.stopPropagation(), $(this).parent().animate({
            left: "-420px"
        }, 400)
    });
    var t = $(".main-text-wr"),
        i = $(".main-text-wr-h");

        $(window).width() <= 750 && $(".industry-news-slides").bxSlider({
        pagerCustom: ".industry-news-control",
        nextText: " ",
        prevText: " ",
        onSliderLoad: function() {
            $(".industry-news .bx-pager.bx-default-pager").remove()
        }
    }), $(".footer-bottom__btn").on("click", function() {
        var e = $(".footer-bottom-right");
        $(this).hasClass("open") ? ($(this).removeClass("open"), e.slideUp()) : ($(this).addClass("open"), e.slideDown())
    }), $(".f-manager__title, .footer__title").on("click", function() {
        var e = $(this).parent();
        e.hasClass("open") ? (e.removeClass("open"), e.find(".footer-contacts-block, .f-manager-block").slideUp()) : (e.addClass("open"), e.find(".footer-contacts-block, .f-manager-block").slideDown())
    });
    
    (function($){
        $.fn.superToggle = function(slideToggleSelector, textOpen, textHide, clbOpen, clbHide){
            return $(this).each(function(){
                $(this).on('click', function(){
                    if($(this).hasClass('open')) {
                        $(this).removeClass('open');
                        $(this).parent().removeClass('open');
                        var elem = $(this).parent().find(slideToggleSelector);
                        $(elem).slideToggle();
                        $(elem).parent().find('[class$="-bg"]').fadeIn(); 
                        $(this).text(textHide);
                        clbHide && clbHide.call(this);
                    } else {
                        $(this).addClass('open');
                        $(this).parent().addClass('open');
                        var elem = $(this).parent().find(slideToggleSelector);
                        $(elem).slideToggle();
                        $(elem).parent().find('[class$="-bg"]').fadeOut();
                        $(this).text(textOpen);
                        clbOpen && clbOpen.call(this);
                    }
                });
            })
        }
    })(jQuery);
    
    $('[data-toggle-action]').each(function(){
        $(this).superToggle($(this).data('toggle-action'), $(this).data('close-text'), $(this).data('open-text'));
    });
    
    $('.btn-close').on('click', function(){
        $(this).parent().removeClass('map-open');
        $(this).parent().fadeOut();
    });

    $('.proton-map__mark').on('click', function(){
        if($(window).width() <= 450) {
            var about = $(this).find('.proton-map__mark-about');
            if($(about).css('display') != 'block') {
                $(about).addClass('map-open');
                $(about).fadeIn();
        }
      }
        
    });
    

    $(".news-item-slider").bxSlider({
        slideWidth: 300,
        autoControls: true,
        nextText: "",
        prevText: "",
        nextSelector: '.slider-next',
        prevSelector: '.slider-prev',
        minSlides: 1,
        maxSlides: 4,
        moveSlides: 1,
        slideMargin: 10,
        pager: false
    });

    var slider_array = new Array();
    
    $('.personal-slider').each(function(i){
        slider_array[i] = $(this).bxSlider({
            controls: false,
            slideWidth: 300,
            autoControls: true,
            nextText: "",
            prevText: "",
            minSlides: 1,
            maxSlides: 3,
            moveSlides: 1,
            slideMargin: 10
        });
    });
    
    $('.bxslider-controls span').bind('click', function(e) {
      e.preventDefault();
    
      if($(this).hasClass('slider-prev')) {
          var obj = $(this).parent().parent().find('.personal-slider');
          var index = $('.personal-slider').index(obj);
          slider_array[index].goToPrevSlide();  
          
    
      } else if($(this).hasClass('slider-next')) {
        var obj = $(this).parent().parent().find('.personal-slider');
          var index = $('.personal-slider').index(obj);
          slider_array[index].goToNextSlide();  
      }
    
    });
    
    $(".adv-slider").bxSlider({
        autoControls: false,
        nextText: "",
        prevText: "",
    });
    
    $(".bnews-slider").bxSlider({
        nextSelector: '.slider-next',
        prevSelector: '.slider-prev',
        nextText: "",
        prevText: "",
    });
    
    $(".building-slider").bxSlider({
        nextSelector: '.slider-next',
        prevSelector: '.slider-prev',
        nextText: "",
        prevText: "",
    });
    
    
//    $('.nav-wrap__phone, .phone-fixed').on('click', function(e){
//        e.preventDefault();
//        $('#callback').modal();
//    });
    
    //scrollPanel
    var top = $(this).scrollTop();
    var scrollBtn = $('.scroll-btn');
    var scroll = $('.scroll-nav-wrap');

    if (top < 51) {scroll.slideUp(200);} else {scroll.slideDown(200);}
    if (top < 70) {scrollBtn.fadeOut();} else {scrollBtn.fadeIn();}

    $(window).scroll(function(){
        top = $(this).scrollTop();
        if (top < 51) {scroll.slideUp(200);} else {scroll.slideDown(200);}
        if (top < 70) {scrollBtn.fadeOut();} else {scrollBtn.fadeIn();}
    });

    scrollBtn.on('click', function(){
        $('html,body').stop().animate({ scrollTop: $('.page-wrap').offset().top}, 600);
    });
    //end scrollPanel
    
    $('.languages-selected').click(function(event){
        event.stopPropagation();
        if($(window).width() <= 1050) {
           if($('.languages-list').css('display') == 'block') {
                $('.languages-list').slideUp();
            }
            else {
                $('.languages-list').slideDown();
            } 
        }
    });
    
    $('.nav-wrap').on('click', function(){
        if($(window).width() <= 1050) {
           if($('.languages-list').css('display') == 'block') {
                $('.languages-list').css("display", "none");
            }
        }
    });
    
    if (!getConfidentialCookie('confidential_confirm')) {
        $('.confidential').addClass('confidential_showed');
    }
    
    $(document).on('click', '.js_politics-accept',  function(e){
        e.preventDefault();
        if (!getConfidentialCookie('confidential_confirm')) {
            $('.confidential').removeClass('confidential_showed');
            setConfidentialCookie('confidential_confirm', true);
        }
    });

});
function setConfidentialCookie(name, value, options) {
    options = options || {};

    var expires = options.expires;

    if (typeof expires == "number" && expires) {
        var d = new Date();
        d.setTime(d.getTime() + expires * 1000);
        expires = options.expires = d;
    }
    if (expires && expires.toUTCString) {
        options.expires = expires.toUTCString();
    }

    value = encodeURIComponent(value);

    var updatedCookie = name + "=" + value;

    for (var propName in options) {
        updatedCookie += "; " + propName;
        var propValue = options[propName];
        if (propValue !== true) {
            updatedCookie += "=" + propValue;
        }
    }

    document.cookie = updatedCookie;
}

function getConfidentialCookie(name) {
    var matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}