$(function(){
	var window_height = $(window).height();
	$('body').css('height', window_height).css('width', $(window).width());
	$(window).resize(function(){
		$('body').css('height', $(window).height()).css('width', $(window).width());
	})
    var up = 'animated infinite fadeInUp';
    var down = 'animated infinite fadeInDown';
	var index_s = 0;
	var dialog = false;
	var box_n = 0;
	var leng = 5;
	var index = 0;
	var status_stop = null;
	var web_status = false;
	var hover_status = false;
	var web_switch = function(index_for){
		if(dialog == false){
			$('#point-list>li').removeClass('hover');
			index_for > 0 ? index_for = 0 : '';
			Math.abs(index_for) === leng ? index_for = -leng + 1 : '' ;
			$('.main').css('transform', 'translate3d(0px,'+(index_for * 100)+'%,0px)');
			$('.main').css('-webkit-transform', 'translate3d(0px,'+(index_for * 100)+'%,0px)');
			if(index_for === 0){
				window.setTimeout(function(){
					$('#point-list>li').eq(0).addClass('hover');
					web_status = false;
				},50)
			}
			if(index_for === -1){
				$('#point-list>li').eq(1).addClass('hover');
                $('.header').css({'color':'#999'});
				window.setTimeout(function(){
                    $('.fdown').addClass(down);
                    $('.fup').addClass(up);
                    setTimeout(function(){
                        $('.fdown').removeClass(down);
                        $('.fup').removeClass(up);
                    },1000);
					web_status = false;
				},100);
			};
			if(index_for === -2){
				$('#point-list>li').eq(2).addClass('hover');
				window.setTimeout(function(){
                    $('.fdown').addClass(down);
                    $('.fup').addClass(up);
                    setTimeout(function(){
                        $('.fdown').removeClass(down);
                        $('.fup').removeClass(up);
                    },1000);
					web_status = false;
				},100);	
			};
			if(index_for === -3){
				$('#point-list>li').eq(3).addClass('hover');
				window.setTimeout(function(){
					web_status = false;
				},100)	
			};
			if(index_for === -4){
				$('#point-list>li').eq(4).addClass('hover');
				window.setTimeout(function(){
					web_status = false;
				},100)	
			};
			web_status = true;
			index = index_for;
		}
	}
	$('#point-list>li').click(function(){
		index = $(this).index();
		web_switch(-index);
	});
	
	$(window).mousewheel(function(event, delta, deltaX, deltaY){
		if (isNaN(deltaY)){
            return 
        }
		if(deltaY && deltaY != ''){
			index_n = index + deltaY
			if(index > 0 || index < -4){
				return
			}
			if(web_status == false){
				if( deltaY > 1){
					deltaY = 1;
				}
				if(deltaY < -1){
					deltaY = -1;
				}
				clearTimeout(status_stop);
				status_stop = window.setTimeout(function(){
					web_switch(index += deltaY);
				}, 80);
			}else{
				web_status = true;
			}
		}
	});
	document.onkeydown = function(event) {
		var c = window.event.keyCode;
		if (c==40||c==32||c==39) {
			clearTimeout(status_stop);
			status_stop = window.setTimeout(function(){
				web_switch(index += -1);
			}, 80);
		}else if (c==38||c==37) {
			clearTimeout(status_stop);
			status_stop = window.setTimeout(function(){
				web_switch(index += 1);
			}, 80);
		}
	}
})