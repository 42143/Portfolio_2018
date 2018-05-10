$(function(){
    var num;
    var eq = 12;
    for (num = 0; num < eq; num ++){
        alert('aslan'+num+'kelvin');
        $('.col-4:eq(+num+)').hover(function(){
            $('.animated:eq(+num+)').addClass('infinite bounce');
        },function(){
            $('.animated:eq(+num+)').removeClass('infinite bounce');
        });
    }
    /*
    $('.col-4:eq(0)').hover(function(){
        $('.animated:eq(0)').addClass('infinite bounce');
    },function(){
        $('.animated:eq(0)').removeClass('infinite bounce');
    });
    //
    $('.col-4:eq(1)').hover(function(){
        $('.animated:eq(1)').addClass('infinite bounce');
    },function(){
        $('.animated:eq(1)').removeClass('infinite bounce');
    });
    //
    $('.col-4:eq(2)').hover(function(){
        $('.animated:eq(2)').addClass('infinite bounce');
    },function(){
        $('.animated:eq(2)').removeClass('infinite bounce');
    });
    //
    $('.col-4:eq(3)').hover(function(){
        $('.animated:eq(3)').addClass('infinite bounce');
    },function(){
        $('.animated:eq(3)').removeClass('infinite bounce');
    });
    //
    $('.col-4:eq(4)').hover(function(){
        $('.animated:eq(4)').addClass('infinite bounce');
    },function(){
        $('.animated:eq(4)').removeClass('infinite bounce');
    });
    //
    $('.col-4:eq(5)').hover(function(){
        $('.animated:eq(5)').addClass('infinite bounce');
    },function(){
        $('.animated:eq(5)').removeClass('infinite bounce');
    });
    //
    $('.col-4:eq(6)').hover(function(){
        $('.animated:eq(6)').addClass('infinite bounce');
    },function(){
        $('.animated:eq(6)').removeClass('infinite bounce');
    });
    //
    $('.col-4:eq(7)').hover(function(){
        $('.animated:eq(7)').addClass('infinite bounce');
    },function(){
        $('.animated:eq(7)').removeClass('infinite bounce');
    });
    
    */
});