$(function(){
	$('.nav ul li a').hover(function() {
		$(this).stop(false, true).animate({backgroundColor: "#ffffff", color:"#4682b4"}, 500);
	},function() {
		$(this).stop(false, true).animate({ backgroundColor: "#4682b4", color:"#ffffff"}, 500);
	});
});
