$(function(){
	var navBtn = $('.nav ul li a');
	var propOn = {backgroundColor: "#ffffff", color:"#2d82cb"};
	var propOff = { backgroundColor: "#2d82cb", color:"#ffffff"};
	
	//エージェント
	if (navigator.userAgent.indexOf('iPhone') > 0 
		|| navigator.userAgent.indexOf('iPad') > 0
		|| navigator.userAgent.indexOf('iPod') > 0 
		|| navigator.userAgent.indexOf('Android') > 0) {
	//スマホ用
		navBtn.bind("touchstart", TouchStart);
		navBtn.bind("touchend" , TouchLeave);
	}else{
	//それ以外
		navBtn.hover(function() {
			$(this).stop().animate(propOn, 300); //マウスオーバー時
		},function() {
			$(this).stop().animate(propOff, 500); //マウスオーバー後
		});
	}

	function TouchStart( event ) {
	//タッチしたときの処理ここにかく
		console.log('TouchStart');
		//$(this).stop().animate(propOn, 300); //マウスオーバー時
		$(this).css(propOn); //マウスオーバー時
	}

	/*
	* 指を離す
	*/
	function TouchLeave( event ) {
	//指を離したときの処理をここにかく
		console.log('TouchLeave');
		$(this).stop().animate(propOff, 500); //マウスオーバー後		
	}
	
});
