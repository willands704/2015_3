$(function(){

	var winWidth = $('body').width();
	if(winWidth > 480){
		$('#menuBtn').hide();
	}else{
		$('#menuBtn').show();
		$('#globalnav').hide();		
	}
	
	$(window).resize(function(){
		var newWidth = $('body').width();
		if(newWidth <= 480){
			$('#menuBtn').show();
			$('#globalnav').hide();	
		}else{
			$('#menuBtn').hide();
			$('#globalnav').show();
		}
	});

	var navFlag = false;
	
	$('#menuBtn').click(function(){
		$('#globalnav').slideToggle();
		
		if(navFlag){
			$(this).removeClass('active');
			navFlag = false;		
		}else{
			$(this).addClass('active');	
			navFlag = true;	
		}		
	});
	
});