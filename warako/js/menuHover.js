$(function(){
	$('.nav ul li a').hover(function() {
		$(this).stop().animate({backgroundColor: "#ffffff", color:"#2d82cb"}, 300); //マウスオーバー時
	},function() {
		$(this).stop().animate({ backgroundColor: "#2d82cb", color:"#ffffff"}, 500); //マウスオーバー後
	});
});
