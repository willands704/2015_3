$(function(){
	$('.main > .container li:gt(0)').hide();
	setInterval(function(){
		$('.main > .container li:first-child').fadeOut(1500).next('li').fadeIn(1500).end().appendTo('.container')
	},5000);
});
