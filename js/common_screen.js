$(function(){
    $('.btn_begins').css({border:'solid 4px #212735'}); 
    var coding = setInterval(function(){
        $('.cursor').toggle();
    },600);
});

/*

setTimeout(function(){
        $('span:nth-child(2)').show();
        $('.black').css({'right':'88%'});
        setTimeout(function(){
            
            $('span:nth-child(3)').show();
        $('.black').css({'right':'698px', width:'10px'});
        },750);        
    },1500);
    
*/
/*$(function(){	
	//tela de programação screen1 
	$('.caf').hide();
	$('.btn_begins').hide();
	setTimeout(function(){
		$('h1').css({'text-align':'center','transition':'2s','opacity':'1.0'});
		$('h3').css({'text-align':'center','transition':'2s','opacity':'1.0'});
		setTimeout(function(){
			$('.cashier').show();
			var black = setInterval(function(){
					$('.cursor').toggle();
					setTimeout(function(){
						$('.black').animate({right:'350px',width:'300px'});
						$('.black_mob_320').animate({right:'310px',width:'10px'});
						//$('.black_mob_414').animate({right:'350px',width:'400px'});
					},800);
						setTimeout(function(){
				clearInterval(black);
							$('.black').css({'width':'600px','left':'15px','margin-top':'21px'});
							$('.black_mob_320').css({'width':'300px','left':'9px','margin-top':'13px'});
							//$('.black_mob_414').css({'width':'300px','left':'9px','margin-top':'13px'});
							var decblack = setInterval(function(){
								$('.cursor').toggle();
									setTimeout(function(){
										$('.black').animate({left:'260px',width:'300px'});
										$('.black_mob_320').animate({left:'170px',width:'100px'});
										//$('.black_mob_414').animate({left:'170px',width:'100px'});
											$('.caf').show();
											$('.bar').css({'color':'#555555'});
								clearInterval(decblack);
											setInterval(function(){
												$('.cursor').toggle();
											},1500);
										setTimeout(function(){
											$('.btn_begins').show();
											$('.btn_begins').css({'border-left':'solid 4px #212735','transition':'2s'});
											setTimeout(function(){
												$('.btn_begins').css({'border-bottom':'solid 4px #212735','transition':'2s'});
												setTimeout(function(){
													$('.btn_begins').css({'border-right':'solid 4px #212735','transition':'2s'});
													setTimeout(function(){
														$('.btn_begins').css({'border-top':'solid 4px #212735','transition':'2s'});
													},400);
												},300);
											},200);
										},100);		
									},800);
							},600);
						},1000);
				},600);
		},800);
	},1000);
	
	//menu 
	$('.home').hover(function(){
		$('.hr_home').css({'width':'52px','transition':'2s'});
	},function(){
		$('.hr_home').css({'width':'20px','transition':'2s'});
	});
	
	$('.ability').hover(function(){
		$('.hr_ability').css({'width':'120px','transition':'2s'});
	},function(){
		$('.hr_ability').css({'width':'20px','transition':'2s'});
	});
	
	$('.job').hover(function(){
		$('.hr_job').css({'width':'92px','transition':'2s'});
	},function(){
		$('.hr_job').css({'width':'20px','transition':'2s'});
	});
	
	$('.about').hover(function(){
		$('.hr_about').css({'width':'58px','transition':'2s'});
	},function(){
		$('.hr_about').css({'width':'20px','transition':'2s'});
	});
	
	$('.contact').hover(function(){
		$('.hr_contact').css({'width':'83px','transition':'2s'});
	},function(){
		$('.hr_contact').css({'width':'20px','transition':'2s'});
	});
});

*/