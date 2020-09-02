$(document).ready(function (){
    $('.toggle-btn').click(function (){
        $('#bar1').toggleClass('bar1');
        $('#bar2').toggleClass('bar2');
        $('#bar3').toggleClass('bar3');
        $('.menu').slideToggle();
    })
})
// owl carousel first
$('#first-owl-carousel').owlCarousel({
    loop:true,
    margin:25,
    nav:true,
    dots:false,
    smartSpeed: 1500,
    autoplay: true,
    autoplayTime: 1000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        800:{
            items:2
        },  
        1000:{
            items:3
        }
    }
})
// owl carousel second
$('#second-owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    dots:false,
    smartSpeed: 1500,
    autoplay: true,
    autoplayTime: 1000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        800:{
            items:2
        },  
        1000:{
            items:3
        }
    }
})
// owl carousel third
$('#third-owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    smartSpeed: 1500,
    autoplay: true,
    autoplayTime: 1000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        800:{
            items:1
        },  
        1000:{
            items:1
        }
    }
})