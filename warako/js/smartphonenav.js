$(function(){

	var winWidth = $('body').width();
	var navFlag = false;
	
	if(winWidth > 480){
		$('#menuBtn').hide();
	}else{
		$('#menuBtn').show();
		$('#globalnav').hide().addClass('small');		
	}
	
	$(window).resize(function(){
		var newWidth = $('body').width();
		$('#menuBtn').removeClass('active');
		navFlag = false;
		
		if(newWidth <= 480){
			$('#menuBtn').show();
			$('#globalnav').hide().addClass('small');	
		}else{
			$('#menuBtn').hide();
			$('#globalnav').show().removeClass('small');
		}

	});

	
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