$(document).ready(function () {
    
    
        $(window).on('scroll',function(){
            var boxHeight = $('.collection').offset().top;
            var scroll = $(window).scrollTop();
            //스크롤top의 좌표를 담는다
//            console.log($(window).scrollTop())
            if(scroll>boxHeight){ 
                $('.videoBox video').css({filter: 'blur(20px)'});
                $('.videoBox img').css({filter: 'blur(10px)'});
            }else{
                $('.videoBox video').css({filter: 'none'});
                $('.videoBox img').css({filter: 'none'});
            }
            
            
            var boxHeight2 = $('.campaign').offset().top;
            
            
            if(scroll>boxHeight2-300){
                $('.campaign ul li dl:nth-of-type(1)').css({opacity: 1, transitionDuration: '2s'});
            }else{
                $('.campaign ul li dl:nth-of-type(1)').css({opacity: 0});
            }
            if(scroll>boxHeight2-200){
                $('.campaign ul li dl:nth-of-type(2)').css({opacity: 1, transitionDuration: '2s'});
            }else{
                $('.campaign ul li dl:nth-of-type(2)').css({opacity: 0});
            }
            if(scroll>boxHeight2-100){
                $('.campaign ul li dl:nth-of-type(3)').css({opacity: 1, transitionDuration: '2s'});
            }else{
                $('.campaign ul li dl:nth-of-type(3)').css({opacity: 0});
            }
            
        });
    
        $('.runwayImg >li >img').hover(function(){
            $(this).css({filter: 'none', transitionDuration: '1s'});
            
        },
        function(){
            $(this).css({filter: 'grayscale(.8)'});
        });
    
        $('.runwayP >li:nth-of-type(1)').hover(function(){
            $(this).css({background: "url(images/runway/01.JPG)", color: 'transparent'});
            
        },
        function(){
            $(this).css({background: 'none', color: '#fff'});
        });
        $('.runwayP >li:nth-of-type(2)').hover(function(){
                $(this).css({background: "url(images/runway/02.JPG)", color: 'transparent'});

            },
            function(){
                $(this).css({background: 'none', color: '#fff'});
            });
        $('.runwayP >li:nth-of-type(3)').hover(function(){
                $(this).css({background: "url(images/runway/03.JPG)", color: 'transparent'});

            },
            function(){
                $(this).css({background: 'none', color: '#fff'});
            });
    
        $('.lookbook .lookWrap ul li:nth-of-type(1)').hover(function(){
                 $(this).css({background: 'url(images/lookbook/1-1.jpg)'});
        },
            function(){
                $(this).css({background: 'url(images/lookbook/1.jpg)'});
        });
        $('.lookbook .lookWrap ul li:nth-of-type(2)').hover(function(){
                     $(this).css({background: 'url(images/lookbook/2-1.jpg)'});
            },
                function(){
                    $(this).css({background: 'url(images/lookbook/2.jpg)'});
            });
        $('.lookbook .lookWrap ul li:nth-of-type(3)').hover(function(){
                     $(this).css({background: 'url(images/lookbook/3-1.jpg)'});
            },
                function(){
                    $(this).css({background: 'url(images/lookbook/3.jpg)'});
            });
        $('.lookbook .lookWrap ul li:nth-of-type(4)').hover(function(){
                     $(this).css({background: 'url(images/lookbook/4-1.jpg)'});
            },
                function(){
                    $(this).css({background: 'url(images/lookbook/4.jpg)'});
            });
        $('.lookbook .lookWrap ul li:nth-of-type(5)').hover(function(){
                     $(this).css({background: 'url(images/lookbook/5-1.jpg)'});
            },
                function(){
                    $(this).css({background: 'url(images/lookbook/5.jpg)'});
            });
    

    
        
    
    
});