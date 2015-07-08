$(function(){

	//ボタンの初期状態
	var bBtn1 = true; var bBtn2 = false;
	var bBtn3 = true; var bBtn4 = false;

	//CSSプロパティ
	var propOn = {backgroundColor: "#2d82cb", color:"#ffffff"};
	var propOff = {backgroundColor: "#ffffff", color:"#2d82cb"};
	var propHov = {backgroundColor: "#D1E4F4", color:"#2d82cb"};

	//切り替えスピード
	var speed = 300;

  //ボタン1クリック
	$('.probtn1').click(function(){
		bBtn1 = true; bBtn2 = false;
		$('.probtn1').stop().animate(propOn, speed);
		$('.probtn2').stop().animate(propOff, speed);
    $('.protext2').hide();
    $('.protext1').fadeIn(speed);
	});

  //ボタン2クリック
	$('.probtn2').click(function(){
		bBtn1 = false; bBtn2 = true;
		$('.probtn1').stop().animate(propOff, speed);
		$('.probtn2').stop().animate(propOn, speed);
    $('.protext1').hide();
    $('.protext2').fadeIn(speed);
	});

  //ボタン3クリック
	$('.probtn3').click(function(){
		bBtn3 = true; bBtn4 = false;
		$('.probtn3').stop().animate(propOn, speed);
		$('.probtn4').stop().animate(propOff, speed);
    $('.protext4').hide();
    $('.protext3').fadeIn(speed);
	});

  //ボタン4クリック
	$('.probtn4').click(function(){
		bBtn3 = false; bBtn4 = true;
		$('.probtn3').stop().animate(propOff, speed);
		$('.probtn4').stop().animate(propOn, speed);
    $('.protext3').hide();
    $('.protext4').fadeIn(speed);
	});

	//ホバー時の処理
	$('.probtn').hover(function() {
		//マウスオーバー時
		var btnName = $(this)[0].className.split(' ')[1];
		if(canHover(btnName)){
			$(this).stop().animate(propHov, speed);
		}
	},function() {
		//マウスオーバー後
		var btnName = $(this)[0].className.split(' ')[1];
		if(canHover(btnName)){
			$(this).stop().animate(propOff, speed);
		}
	});

	//ボタンがアクティブでない時のみホバー可能
	function canHover(btnName){
		if((btnName == 'probtn1' && bBtn1)
				|| (btnName == 'probtn2' && bBtn2)
				|| (btnName == 'probtn3' && bBtn3)
				|| (btnName == 'probtn4' && bBtn4)){
			return false;
		}
		return true;
	}
});
