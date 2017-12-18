$(document).ready(function() {
    
    $('.nav-burger').click(function(e){
        var menu = $(this).data("menu");
        if (menu) {
            $('#'+menu).toggleClass("nav-list--active");
        }
    });

    $('.select').not('.select__item').click(function(){
        $(this).toggleClass('select--opened');
    });

    $('.select__item').click(function(){
        var val = $(this).html();
        var select = $(this).closest('.select');
        select.find('.select__input').val(val);
        select.find('.select__placeholder').html(val);
        select.removeClass('select--opened');
        return false;
    });

    $(".icon-search").on("click", function (e) {
        e.stopPropagation();
        $(".search-input").css({width: "200px", opacity: "1", "z-index": "1"});
    });
    
    $(".search-close").on("click", function (e) {
        e.stopPropagation();
        $(".search-input").css({width: "0", opacity: "0",  "z-index": "-1"});
    });
        
    if ($('.im--phone').length) {
        console.log('im--phone');
        $('.im--phone').mask('+7 (000) 000-00-00', {placeholder: "+7 (___) ___-__-__"});
    } else {
            console.log('no im--phone');
    }

    if ($('.tea-container').length) {
        var swiper = new Swiper('.tea-container', {
            pagination: '.swiper-pagination',
            paginationClickable: true,
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            spaceBetween: 30
        });    
    }

    
    if ($('.feedbacks-container').length) {
        var swiper2 = new Swiper('.feedbacks-container', {
            slidesPerView: 4,
            pagination: '.swiper-pagination',
            spaceBetween: 25,
            breakpoints: {
             
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 30
                },
                640: {
                    slidesPerView: 2,
                    spaceBetween: 20
                },
                450: {
                    slidesPerView: 1,
                    spaceBetween: 10
                }
            }
        });
    }
    
    if ($('.partners-container').length) {
        var swiper3 = new Swiper('.partners-container', {
            pagination: '.swiper-pagination',
            slidesPerView: 4,
            paginationClickable: true,
            spaceBetween: 30,
            breakpoints: {
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 30
                },
                
                640: {
                    slidesPerView: 2,
                    spaceBetween: 20
                },
                450: {
                    slidesPerView: 1,
                    spaceBetween: 10
                }
            }
        });
    }

    $('.btn-morning').click(swiper,function(e){
        e.preventDefault();
        swiper.slideTo(0);
    });
    $('.btn-day').click(swiper,function(e){
        e.preventDefault();
        swiper.slideTo(1);
    });
    $('.btn-evening').click(swiper,function(e){
        e.preventDefault();
        swiper.slideTo(2);
    });
    $('.btn-night').click(swiper,function(e){
        e.preventDefault();
        swiper.slideTo(3);
    });
    
    (function($){
        $.fn.superToggle = function(slideToggleSelector, clbOpen, clbHide){
            return $(this).each(function(){
                $(this).on('click', function(){
                    if($(this).hasClass('open')) {
                        $(this).removeClass('open');
                        $(this).parent().removeClass('open');
                        var elem = $(this).find(slideToggleSelector);
                        $(elem).slideToggle();
                        clbHide && clbHide.call(this);
                    } else {
                        $(this).addClass('open');
                        $(this).parent().addClass('open');
                        var elem = $(this).find(slideToggleSelector);
                        $(elem).slideToggle();
                        clbOpen && clbOpen.call(this);
                    }
                });
            })
        }
    })(jQuery);
    
    $('[data-toggle-action]').each(function(){
        $(this).superToggle($(this).data('toggle-action'));
    });


    
});
