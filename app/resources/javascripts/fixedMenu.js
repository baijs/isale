/***********************************content-tab***********************************************************/	
				$(function(){
								$('.content-tab>li').click(function(){
						$(this).addClass('selected').siblings().removeClass();
							$('.content-list>div').hide().eq($('.content-tab>li').index(this)).show();
									
		var theHeight = window.pageYOffset //滚动条顶部到网页顶部的距离
				|| document.documentElement.scrollTop
				|| document.body.scrollTop
				|| 1; 
		var kj_top=$('.contentRoll').offset().top;
		if(theHeight>kj_top){$('html,body').animate({scrollTop:$('.content-list').offset().top - 0.1},100)
		};
		});	
		});





// fixedMenu
		$(function(){
				
				var fixedMenuH = $('.fixedMenu').offset().top;
				//获取定位元素距离浏览器顶部的距离
				$(window).scroll(function(){
				//滚动事件
				var scroH = $(this).scrollTop();
				//获取滚动条的滑动距离
				if(scroH>fixedMenuH){
					$('.fixedMenu').css({'position':'fixed','top':0,'margin-top':'20px'/*,'filter':(opacity=95),'opacity':0.95*/});
				}else if(scroH<fixedMenuH){
					$('.fixedMenu').css({'position':'static','margin-top':'0px'/*,'filter':(opacity=10),'opacity':10*/});
		};
		});
		});
		
		
