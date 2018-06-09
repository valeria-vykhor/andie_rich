//= ../../bower_components/jquery/dist/jquery.js
//= ../../bower_components/bootstrap/dist/js/bootstrap.js
//= ../../bower_components/owl.carousel/dist/owl.carousel.min.js

$(document).ready(function(){
    $(".open-carousel-btn").click(function() {
        $(".open__carousel-wrapp").css("visibility", "visible").css("pointer-events", "all");
    });

    $(".close-carousel-btn").click(function() {
        $(".open__carousel-wrapp").css("visibility", "hidden").css("pointer-events", "none");
    });

    $("a.menu-item").click(function() {
        $('.header-menu, .modal-backdrop').hide();
        $("html, body").removeClass('modal-open').animate({
            scrollTop: $($(this).attr("href")).offset().top + "px"
        }, 
        {  
            duration: 800,
            easing: "swing"
        });
        return false;
    });

    $(".header__carousel").owlCarousel({
        loop: true,
        dotsEach: true,
        //autoplay:true,
        autoplayTimeout: 3000,
        smartSpeed: 700,
        responsive:{
            0:{
                margin: 0,
                items:1
            },
            768:{
                margin: 0,
                items:1
            }
        }
    });

    $(".open__carousel").owlCarousel({
        loop: true,
        dots: false,
        responsive:{
            0:{
                margin: 0,
                items:1
            },
            576:{
                margin: 0,
                items:2
            },
            768:{
                margin: 0,
                items:3
            },
            1024:{
                margin: 0,
                items: 4
            },
            1200:{
                margin: 0,
                items: 5
            }
        }
    });

    var owl = $('.open__carousel');
    owl.on('mousewheel', '.owl-stage', function (e) {
        if (e.deltaY>0) {
            owl.trigger('next.owl');
        } else {
            owl.trigger('prev.owl');
        }
        e.preventDefault();
    });

    $(".reputation__carousel").owlCarousel({
        loop: true,
        dots: false,
        nav: true,
        autoplay:true,
        autoplayTimeout: 3000,
        smartSpeed: 700,
        responsive:{
            0:{
                items: 1,
                margin: 15
            },
            576:{
                margin: 15,
                items: 2
            },
            992:{
                margin: 27,
                items: 3
            }
        }
    });
});