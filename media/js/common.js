$(document).ready(function () {
        
        $(window).on('scroll',function(){
            var scroll = $(window).scrollTop();
            //스크롤top의 좌표를 담는다
            console.log($(window).scrollTop())
            if(scroll>800){ 
                $('.videoBox video').css({filter: 'blur(20px)'});
            }else{
                $('.videoBox video').css({filter: 'none'});
            }
            
        });
    
        $(".menuBtn").toggle(function(){
            $("#gnb").slideDown('slow');
        }, function(){
            $("#gnb").slideUp('fast');
        });
        var current = 0;
        $(window).resize(function(){ 
            var screenSize = $(window).width(); 
            if(screenSize > 768){
                $("#gnb").show();
                 current = 1;
            }
            if(current == 1 && screenSize < 768){
                $("#gnb").hide();
                 current = 0;
            }
        }); 

            
    
        
    
    
});