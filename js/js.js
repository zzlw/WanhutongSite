$(function(){

/*轮播图开始*/

var a = 0;
var Time;

function imgCha(){
	$("#core .content .big .con .pic .sj").eq(a).stop(true).fadeIn(200).siblings().hide();
	$("#core .content .big .con .con_list .list li").eq(a).addClass("hov").siblings().removeClass("hov");
};

$("#core .content .big .con .con_list .list li").hover(function(){a = $(this).index();imgCha();});
$("#core .content .big .con .but .right").click(function(){(a<3)?(a++):(a=0);imgCha();});
$("#core .content .big .con .but .left").click(function(){(a>0)?(a--):(a=3);imgCha();});

function auto(){
	Time = setInterval(function(){
		(a<3)?(a++):(a=0);imgCha();
	},4000);
};
auto();
$("#core .content .big .con").hover(function(){clearInterval(Time)},function(){auto()});



var b = 0;
var hour;

function imgChaOne(){
	$("#big .con .pic a").eq(b).stop(true).fadeIn(200).siblings().hide();
	$("#big .con .list li").eq(b).addClass("hov").siblings().removeClass("hov");
};

$("#big .con .list li").hover(function(){b = $(this).index();imgChaOne();});
$("#big .con .but .right").click(function(){(b<2)?(b++):(b=0);imgChaOne();});
$("#big .con .but .left").click(function(){(b>0)?(b--):(b=2);imgChaOne();});

function autoOne(){
	hour = setInterval(function(){
		(b<2)?(b++):(b=0);imgChaOne();
	},3000);
};
autoOne();
$("#big .con").hover(function(){clearInterval(hour)},function(){autoOne()});

/*轮播图结束*/

/*平滑锚链接开始*/
$(function(){   
		$('a[href*=#],area[href*=#]').click(function() {
			if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
				var $target = $(this.hash);
				$target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
				if ($target.length) {
					var targetOffset = $target.offset().top;
					$('html,body').animate({
						scrollTop: targetOffset
					},
					1000);
					return false;
				}
			}
		});
	})
/*平滑锚链接结束*/

/*万呼通手机端展示开始*/
	$("#core .content .big .con .pic .sj .txt .one a").hover(function(){
		$("#core .content .big .con .pic .sj .txt .p1 a").css({"color":"#929292"})
		$("#core .content .big .con .pic .sj .txt .p1 i").css({"color":"#929292"})
		
		$("#core .content .big .con .pic .sj .txt .one a").mouseleave(function(){
			$("#core .content .big .con .pic .sj .txt .p1 a").css({"color":"#00b4ff"})
			$("#core .content .big .con .pic .sj .txt .p1 i").css({"color":"#00b4ff"})
		})

	})

/*万呼通手机端展示结束*/



});