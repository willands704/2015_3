$(function(){
	$('.probtn1').click(function(){
//		$(this).animate({backgroundColor: "#2d82cb", color:"#ffffff"},1000);
//		$('.probtn2').animate({backgroundColor: "#2d82cb", color:"#ffffff"},1000);

		$('.probtn1').css({backgroundColor: "#2d82cb", color:"#ffffff"});
		$('.probtn2').css({backgroundColor: "#ffffff", color:"#2d82cb"});
	});

	$('.probtn2').click(function(){
		$('.probtn1').css({backgroundColor: "#ffffff", color:"#2d82cb"});
		$('.probtn2').css({backgroundColor: "#2d82cb", color:"#ffffff"});
	});

	$('.probtn3').click(function(){
		$('.probtn3').css({backgroundColor: "#2d82cb", color:"#ffffff"});
		$('.probtn4').css({backgroundColor: "#ffffff", color:"#2d82cb"});
	});

	$('.probtn4').click(function(){
		$('.probtn3').css({backgroundColor: "#ffffff", color:"#2d82cb"});
		$('.probtn4').css({backgroundColor: "#2d82cb", color:"#ffffff"});
	});

});
