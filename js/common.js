$(function(){
	var window_height = $(window).height();
	$('body').css('height', window_height).css('width', $(window).width());
	$(window).resize(function(){
		$('body').css('height', $(window).height()).css('width', $(window).width());
	})

	var index_s = 0;
	var dialog = false;
	var box_n = 0;
	var leng = 5;
	var index = 0;
	var status_stop = null;
	var web_status = false;
	var hover_status = false;
	var cashier_height = window_height ;
	var web_switch = function(index_for){
		if(dialog == false){
			$('#point-list>li').removeClass('hover');
			index_for > 0 ? index_for = 0 : '';
			Math.abs(index_for) === leng ? index_for = -leng + 1 : '' ;
			$('.main').css('transform', 'translate3d(0px,'+(index_for * 100)+'%,0px)');
			$('.main').css('-webkit-transform', 'translate3d(0px,'+(index_for * 100)+'%,0px)');
			if(index_for === 0){
				window.setTimeout(function(){
					$('#header').css({'top':'-60px','transition':'2s','opacity':'0.0'});
					$('#point-list>li').eq(0).addClass('hover');
					web_status = false;
				},50)
			}
			if(index_for === -1){
				$('#point-list>li').eq(1).addClass('hover');
				window.setTimeout(function(){
					setTimeout(function(){
						//code screen3 
							$(".grana_extra").css({'margin-top':'-1500px','transition':'3s','display':'block'});
							$(".safira_cos").css({'margin-top':'-1500px','transition':'3s','display':'none'});
							$(".catalogo_safira_cos").css({'margin-top':'-1500px','transition':'3s','display':'none'});
							$(".dama_re").css({'margin-top':'-1500px','transition':'3s','display':'none'});
						//fim do code screen3 
						$('#header').css({'top':'0px','transition':'2s','opacity':'1.0'});
						$('.opening_caf_2, .opening_caf_3, .opening_caf_4').hide();
						$('.cashier_screen2').css({'height':cashier_height+'px'});
						$(".opening").show();
						$(".text_php").hide();
						$(".text_axure").hide();
						$(".text_ajax").hide();
						$(".text_jquery").hide();
						$(".text_javascript").hide();
						$(".text_sql").hide();
						$(".text_sess").hide();
						setTimeout(function(){
							$('.cashier_screen2').css({'margin-right':'0px','transition':'2s','opacity':'1.0'});
							setTimeout(function(){
								$(".php").css({'left':'320px','top':'170px','transition':'2s','opacity':'1.0'});
								$(".axure").css({'right':'100px','top':'80px','transition':'2s','opacity':'1.0'});
								$(".ajax").css({'right':'0px','top':'300px','transition':'2s','opacity':'1.0'});
								$(".jquery").css({'left':'100px','top':'80px','transition':'2s','opacity':'1.0'});
								$(".javascript").css({'left':'320px','bottom':'100px','transition':'2s','opacity':'1.0'});
								$(".sql").css({'left':'320px','transition':'2s','opacity':'1.0'});
								$(".sess").css({'left':'0px','top':'300px','transition':'2s','opacity':'1.0'});
								//curso screen2 
								setTimeout(function(){
									$('.black_screen2').animate({right:'0px',width:'10px'});
									setTimeout(function(){
										$('.black_screen2').css({'margin-right':'30px','margin-top':'22px','width':'400px'});
										$('.opening_caf_2').show();
										setTimeout(function(){
											$('.black_screen2').animate({right:'0px',width:'10px'});
											$('.black_screen2').css({'margin-right':'30px','margin-top':'42px','width':'400px'});
											$('.opening_caf_3').show();
											setTimeout(function(){
												$('.black_screen2').css({'float':'right','width':'10px'});
												$('.black_screen2').css({'margin-right':'30px','margin-top':'62px','width':'400px'});
												$('.opening_caf_4').show();
												setTimeout(function(){
													$('.black_screen2').css({'float':'right','width':'40px'});
												},300);		
											},300);	
										},300);
									},1500);
								},1500);
							},100);
						},300);
					},300);
					web_status = false;
				},100);
			};
			if(index_for === -2){
				$('#point-list>li').eq(2).addClass('hover');
				window.setTimeout(function(){
					$('#header').css({'top':'0px','transition':'2s','opacity':'1.0'});
					$('.cashier_screen3').css({'height':cashier_height+'px'});
					$('.opening_sn_1').hide();
					$('.opening_sn_2').hide();
					$('.opening_sn_3').hide();
						setTimeout(function(){
							$('.cashier_screen3').css({'margin-right':'0px','transition':'2s','opacity':'1.0'});
							setTimeout(function(){
								$('.black_screen3').animate({right:'20px',width:'10px'});
								$('.opening_sn_1').show();
								setTimeout(function(){
									$('.black_screen3').css({'margin-right':'10px','margin-top':'22px','width':'400px'});
									$('.opening_sn_2').show();
									setTimeout(function(){
										$('.black_screen3').animate({right:'10px',width:'10px'});
										setTimeout(function(){
											$('.black_screen3').css({'margin-right':'19px','margin-top':'43px','width':'400px'});
											$('.opening_sn_3').show();
											setTimeout(function(){
												$('.black_screen3').animate({right:'200px',width:'10px'});
											},500);
										},1500);
									},500);
								},1500);
							},1300);
							setTimeout(function(){
								$('.grana_extra').css({'position':'relative','margin-left':'auto','margin-right':'auto','margin-top':'50px','transition':'3s'});
								$(".safira_cos").css({'margin-top':'-1500px','transition':'3s','display':'block'});
								$(".catalogo_safira_cos").css({'margin-top':'-1500px','transition':'3s','display':'block'});
								$(".dama_re").css({'margin-top':'-1500px','transition':'3s','display':'block'});
							},1800);
						},300);
					web_status = false;
				},100);	
			};
			if(index_for === -3){
				$('#point-list>li').eq(3).addClass('hover');
				window.setTimeout(function(){
					//code screen3 
						$(".grana_extra").css({'margin-top':'-1500px','transition':'3s','display':'block'});
						$(".safira_cos").css({'margin-top':'-1500px','transition':'3s','display':'none'});
						$(".catalogo_safira_cos").css({'margin-top':'-1500px','transition':'3s','display':'none'});
						$(".dama_re").css({'margin-top':'-1500px','transition':'3s','display':'none'});
					//fim do code screen3 
					$('#header').css({'top':'0px','transition':'2s','opacity':'1.0'});
					setTimeout(function(){
						$('.photo').css({'margin-left':'auto','margin-right':'auto','margin-top':'100px','margin-bottom':'50px','transition':'2s','opacity':'1.0'});
						setTimeout(function(){
							$('.text_about').css({'transition':'2s','opacity':'1.0'});
						},50);
					},300);
					web_status = false;
				},100)	
			};
			if(index_for === -4){
				$('#point-list>li').eq(4).addClass('hover');
				window.setTimeout(function(){
					//code screen3 
						$(".grana_extra").css({'margin-top':'-1500px','transition':'3s','display':'block'});
						$(".safira_cos").css({'margin-top':'-1500px','transition':'3s','display':'none'});
						$(".catalogo_safira_cos").css({'margin-top':'-1500px','transition':'3s','display':'none'});
						$(".dama_re").css({'margin-top':'-1500px','transition':'3s','display':'none'});
					//fim do code screen3 
					$('#header').css({'top':'0px','transition':'2s','opacity':'1.0'});
					setTimeout(function(){
						
					},300);
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