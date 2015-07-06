$(function(){
	$('.nav ul li a').hover(function() {
		$(this).stop(false, false).animate({backgroundColor: "#ffd200", color:"#000000"}, 500);
	},function() {
		$(this).stop(false, false).animate({ backgroundColor: "#000000", color:"#cccccc"}, 500);
	});
});
