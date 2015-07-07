$(function(){
	var winWidth = $('body').width();
	if(winWidth > 480){
		$('.menuBtn').hide();
	}else{
		$('.menuBtn').show();
		$('#globalnav').hide();		
	}
	$(window).resize(function(){
		console.log('resized');

		var newWidth = $('body').width();
		console.log(newWidth);
		if(newWidth <= 480){
			$('.menuBtn').show();
			$('#globalnav').hide();	
		}else{
			$('.menuBtn').hide();
			$('#globalnav').show();
		}
	});
	
	$('.menuBtn').click(function(){
		$(this).toggleClass('active');
		$(this).next('#globalnav').slideToggle();
	});
	
});