/**
 * 04-02　ウィンドウ上端でグローバルナビゲーションを固定する
 */
$(function(){
	$(window).on('scroll', function(){
		var scrollValue = $(this).scrollTop();
		//console.log(scrollValue);
		$('.nav')
		.trigger('customScroll', {posY: scrollValue});
	});

	$('.nav')
	.each(function(){
		var $this = $(this);
		$this.data('initial', $this.offset().top);
	})
	.on('customScroll', function(event, object){
		//console.log('customScroll %s', object.posY);

		var $this = $(this);
		
		if($this.data('initial') <= object.posY) {
			//要素を固定
			if(!$this.hasClass('navfixed')) {
				var $substitute = $('<div></div>');
				$substitute
				.css({
					'margin':'0',
					'padding':'0',
					'font-size':'0',
					'height':'0'
				})
				.addClass('substitute')
				.height($this.outerHeight(true))
				.width($this.outerWidth(true));

				$this
				.after($substitute)
				.addClass('navfixed')
				.css({top: 0});
			}
		} else {
			//要素の固定を解除
			$this.next('.substitute').remove();
			$this.removeClass('navfixed');
		}
	});
});