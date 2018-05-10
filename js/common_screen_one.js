$(function(){
    $('.btn_begins').css({border:'solid 4px #212735'});
    setTimeout(function(){
        $('.cursor').animate({left : '551px'});
        $('span:nth-child(2),span:nth-child(3)').show();
        setTimeout(function(){
            $('.cursor').css({'margin-top' : '23px' , left : '7%'});
            setTimeout(function(){
                $('.cursor').animate({left : '323px'});
                $('span:nth-child(6)').show();  
            },900);
        },1500);
    },1500);    
    //clearInterval(coding);
});
