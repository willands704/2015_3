$(function(){
	$('#ue').hide();
	$(window).scroll(function(){
	var scrollVal = $(this).scrollTop();
	if(scrollVal < 500){
		$('#ue').fadeOut();
	}else{
		$('#ue').fadeIn();
	}
	});
	
	$('.ue').click(function(){
		$('html, body').animate({scrollTop: 0}, 800);
	});
});