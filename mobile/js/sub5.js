$(document).ready(function () {

    $('.year ul li').click(function(){
        $(this).addClass('on_year');
        $('.year ul li').not($(this)).removeClass("on_year");
    });
    
    $('.film li dl').click(function(){
        $('.movie').css({
            visibility: 'visible'
        });
        $('.content3 .film dl img').css({
            opacity: .2
        });
        
    });


});