$(function(){
	//初期位置値
	var start_top = '-550px';
	
	$('.box').css({top: start_top});
	
	var speed = 1500;
	var easing ='easeOutBounce';
	var delaytime=400;
		
	$('#box1').animate({top:0},speed,easing);
	setTimeout(function(){
		$('#box2').animate({top:'-20px'},speed,easing);
	},delaytime);
	setTimeout(function(){
		$('#box3').animate({top:'0px'},speed,easing);
	},delaytime*1.8);
	setTimeout(function(){
		$('#box4').animate({top:'-20px'},speed,easing);
	},delaytime*2);
	setTimeout(function(){
		$('#box5').animate({top:'-20px'},speed,easing);
	},delaytime*2.2);
	setTimeout(function(){
		$('#box6').animate({top:'0px'},speed,easing);
	},delaytime*2.4);
	setTimeout(function(){
		$('#box7').animate({top:'-20px'},speed,easing);
	},delaytime*2.6);
	setTimeout(function(){
		$('#box8').animate({top:'0px'},speed,easing);
	},delaytime*2.8);
	setTimeout(function(){
		$('#box9').animate({top:'0px'},speed,easing);
	},delaytime*3);
	setTimeout(function(){
		$('#box10').animate({top:'0px'},speed,easing);
	},delaytime*3.2);
	setTimeout(function(){
		$('#box11').animate({top:'0px'},speed,easing);
	},delaytime*3.4);
	setTimeout(function(){
		$('#box12').animate({top:'0px'},speed,easing);
	},delaytime*3.6);
	setTimeout(function(){
		$('#box13').animate({top:'0px'},speed,easing);
	},delaytime*3.8);
	setTimeout(function(){
		$('#box14').animate({top:'-20px'},speed,easing);
	},delaytime*4.0);
	setTimeout(function(){
		$('#box15').animate({top:'0px'},speed,easing);
	},delaytime*4.2);
	setTimeout(function(){
		$('#box16').animate({top:'0px'},speed,easing);
	},delaytime*4.4);
	setTimeout(function(){
		$('#box17').animate({top:'0px'},speed,easing);
	},delaytime*4.6);

		
	//#box14の文字を回転
	var spin;
	function spinstart(){
		var degree = 0;
		var spin = setInterval(function(){
			$('#spin').css({'-moz-transform': 'rotate('+degree+'deg)'});
			$('#spin').css({'-webkit-transform': 'rotate('+degree+'deg)'});
			$('#spin').css({'-o-transform': 'rotate('+degree+'deg)'});
			$('#spin').css({'-ms-transform': 'rotate('+degree+'deg)'});
			$('#spin').css({'transform': 'rotate('+degree+'deg)'});
				
			if(degree > 40){
				clearInterval(spin);
			}
				
			degree++;
		},5);
	}
		
	setTimeout(function(){
		spinstart();
	},delaytime*9)
	
});
