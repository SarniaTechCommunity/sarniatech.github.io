$(document).ready(function(){
   var tl = new TimelineMax({paused: true, reversed: true});

    var menu1 = $('.menu1');
    var menu2 = $('.menu2');
    var menu3 = $('.menu3');
    var menuFull = $('.mobile-full-menu');
    var hamburgerMenu = $('.hamburger-menu');

    tl.to(menu1, .3, {x:60, y: 20, rotationZ :45, transformOrigin:'0% 0%', ease: Power3.easeOut}, "end")
       .to(menu2, .2, {opacity: 0}, "end")
       .to(menu3, .3, {y: 0, rotationZ :-45 , transformOrigin:'0% 0%', ease: Power3.easeOut,}, "end")
    
    $('.hamburger-menu').click(function(){
        tl.reversed() ? tl.play() : tl.reverse();
        $('.mobile-full-menu').toggle('slide', {direction: 'right'}, 300);

        if(hamburgerMenu.hasClass('active')){
            hamburgerMenu.removeClass('active');
        }else{
            hamburgerMenu.addClass('active');
        }
    });

    $('.header-button1').mouseenter(function(){
        $('.header-button1 svg').css('fill', '#ffffff');
    }); 
    $('.header-button1').mouseleave(function(){
        $('.header-button1 svg').css('fill', '#8cfef4');
    }); 

    $('.header-button2').mouseenter(function(){
        $(this).find('svg').css('fill', '#ffffff');
    }); 
    $('.header-button2').mouseleave(function(){
        $('.header-button2 svg').css('fill', '#0047e4');
    }); 

});