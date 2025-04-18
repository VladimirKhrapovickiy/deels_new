
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        autoWidth: true,
        margin: 16,
        responsive : {
            0:{
                items: 1,
            },
            767:{
                items: 2,
            },
            1000:{
                items:3,
            },
            1200:{
                items: 4,
            },
        }
    });
    });
