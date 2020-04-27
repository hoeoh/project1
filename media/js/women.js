$(document).ready(function () {
        var screenSize = $(window).width();
        var screenHeight = $(window).height();
        var current=false;
  	
		$("#content").css('margin-top',screenHeight);
		
  	if( screenSize > 768){
        $(".pcImg").show();
        $(".subImg").hide();
      }
    if(screenSize <= 768){
        $(".pcImg").hide();
        $(".pcImg").attr('src','images/tale/bg.jpg');
        $(".subImg").show();
      }
    
        $(window).on('scroll',function(){
            var boxHeight = $('#content').offset().top;
            var scroll = $(window).scrollTop();
            //스크롤top의 좌표를 담는다
//            console.log($(window).scrollTop())
            if(scroll>boxHeight){ 
                $('#wrap .bg').css({filter: 'blur(10px) brightness(.4)'});
            }else{
                $('#wrap .bg').css({filter: 'none'});
            }
            
            $('.imgPart img').hover(function(){
                $(this).css({filter: 'brightness(.4)'});
            },function(){
                $(this).css({filter: 'brightness(.8)'});
            })
            

            
        });
    
        $(window).resize(function(){    //웹브라우저 크기 조절시 반응하는 이벤트 메소드()
          screenSize = $(window).width(); 
          screenHeight = $(window).height();
            

              $("#content").css('margin-top',screenHeight);

          if( screenSize > 768 && current==false){

            $(".pcImg").show();
            $(".pcImg").attr('src','images/tale/bg.jpg');
            $(".subImg").hide();
            current=true;
          }
          if(screenSize <= 768){
            $(".pcImg").hide();
            $(".subImg").attr('src','images/tale/slate.jpg');
            $(".subImg").show();
            current=false;
          }
            
        }); 
    
 
    

    
        
    
    
});