 feather.replace();
 AOS.init();

 $(document).ready(function(){
    window.onload = () => {
        console.log(1, $('.loading-screen'));
        $('.loading-screen').remove();
    }
    $(".owl-carousel").owlCarousel({
        dots: false,
        margin: 10,
        nav: true,
        loop: true,
        responsiveClass:true,
        responsive: {
            0:{
                items:1,
            },
            330: {
                items:2,
            },
            700: {
                items:3,
            }
        }
    });
});