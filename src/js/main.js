//= ../../bower_components/jquery/dist/jquery.js
//= ../../bower_components/bootstrap/dist/js/bootstrap.js
//= ../../bower_components/owl.carousel/dist/owl.carousel.min.js

$(document).ready(function(){
    $("a.dropdown-item").click(function() {
        $("html, body").animate({
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
        autoplay:true,
        autoplayTimeout: 3000,
        smartSpeed: 700,
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
            }
        }
    });

    $(".reputation__carousel").owlCarousel({
        loop: true,
        dots: false,
        nav: true,
        autoplay:true,
        navText: [$('.nav-next'),$('.nav-prev')],
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