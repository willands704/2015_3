$(function(){
	$('.probtn1').click(function(){
		$(".protext2").hide();
		$(".protext1").fadeIn("slow");
	});

	$('.probtn2').click(function(){
		$(".protext1").hide();
		$(".protext2").fadeIn("slow");
	});

	$('.probtn3').click(function(){
		$(".protext4").hide();
		$(".protext3").fadeIn("slow");
	});

	$('.probtn4').click(function(){
		$(".protext3").hide();
		$(".protext4").fadeIn("slow");
	});

});