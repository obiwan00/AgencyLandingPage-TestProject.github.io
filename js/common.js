"use strict";
///iframe////
// $(function() {
//     $("iframe[data-src]").Lazy();
// });
////menu///
$(".nav-bar-btn").on("click", function () {
    if(!$(".header-menu").hasClass("active")){
        $(".header-menu").addClass('active');
        $(".header-menu").slideDown();
    }else{
        $(".header-menu").slideUp();
        $(".header-menu").removeClass('active');
        
    }
}); 

$(window).resize(function() {
    if(screen.width > 992){
        $('.header-menu').css("display","flex");
        $(".header-menu").addClass('active');
    }else{
        $('.header-menu').css("display","none");
        $(".header-menu").removeClass('active');
    }
});
//tab////

if(screen.width >= 992){
	$('.tablinks').click(function(e){
        e.preventDefault();
		var tab_id = $(this).attr('href');

		$('.tablinks').removeClass('current');
		$('.tabs-flex').removeClass('current');

		$(this).addClass('current');
        $(tab_id).addClass('current');
        console.log(tab_id);
    })
}
    if(screen.width < 992){
        $('.tabs-flex').slick({
            slidesToShow: 4,
            slidesToScroll: 4,

            dots: true,
            arrows: false,

            infinite: true,
            autoplay: true,
            autoplaySpeed: 3000,
            speed: 1000,

            waitForAnimate: true,

            responsive: [{

                breakpoint: 769,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                }
          
              },{

                breakpoint: 576,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                }
          
              },{

                breakpoint: 451,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                }
          
              }
            ],
            
            // prevArrow: $('.slider-btn-back'),
            // nextArrow: $('.slider-btn-next'),
        });
        $('.slides').slick({
            slidesToShow: 1,
            swipe: false,
            arrows: false,
            dots: false,
            fade: true,
        });
        $('.tabs-names-flex').slick({
            centerMode: true,
            centerPadding: '0px',

            slidesToScroll: 1,
            slidesToShow: 3,
            swipeToSlide: true,

            arrows: false,
            dots: false,

            // autoplay: true,
            // autoplaySpeed: 5000,
            infinite: false,
            
            focusOnSelect: true,
            
            asNavFor: '.slides',
            responsive: [{
                breakpoint: 451,
                settings:{
                    
                    slidesToShow: 3,
                  slidesToScroll: 1,
                }
            }]
        });
        $('.tablinks').click(function(){
            $('.tablinks').removeClass('current');
            $(this).addClass('current');
            
        });
        $('.tabs-names-flex').on('swipe', function(){
            $(".tablinks").removeClass('current');
            $(".slick-current").addClass('current');
            
            console.log(1);
          });
        //   $('.tabs-names-flex').on('afterChange', function(){
        //     $(".slick-current").trigger('click');
        //     // left
        //     console.log(2);
        //   });
          
    }

////teammate-tab/////
    $('.team-others-img').click(function(e){
        e.preventDefault();

        var tab_id = $(this).attr('data-tab');// 
        var tab_id_img = $(this).children("img").attr('src');

        $(".teammate-description").removeClass('active');

        $(".team-others-img").removeClass('not-active');
        
        $(".section-team-left-img").removeClass('active');

        $(this).addClass('not-active');
        $("#"+tab_id).addClass('active');
        $(".section-team-left-img img").attr("src", tab_id_img)
        
        function section_team_left_img_active (){
            $(".section-team-left-img").addClass('active');
        };
        setTimeout(section_team_left_img_active , 10);
        
    })
    if(screen.width < 992){
        $('.section-team-responsive-all').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows: false,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 4000,
            // variableWidth: true,
        });
    }
    $('.team-others').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        infinite: false,
        swipeToSlide: true,
        centerMode: true,
        initialSlide: 2,
        centerPadding: '20px',
    });
    

