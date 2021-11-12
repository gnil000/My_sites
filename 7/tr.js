window.addEventListener('DOMContentLoaded', function(event){
$(document).ready(function(){
    $('.slider').slick({
        dots: true,
        arrows : false,
        slidesToShow: 2,
        slidesToScroll: 2,
        responsive: [{
            breakpoint: 500,
            settings:{
                arrows: true,
                slidesToShow: 4,
                slidesToScroll: 4,
            }
        }],
        mobileFirst: true,
    }); 
});
});


