$(function(){
	$("form").submit(function(){

		//errorクラス削除
		
		$("p.error").remove();
		$("dl dd").removeClass("error");

		//input type=textとtextareaのvalidateクラスがついてるものに適用
		
		$(":text,textarea").filter(".validate").each(function(){

			//必須項目（requiredクラス）が空文字なら
		
			$(this).filter(".required").each(function(){
				if($(this).val()==""){
					$(this).parent().prepend("<p class='error'>必須項目です</p>");
				}
			});

			//年齢（numberクラス）が数字じゃなかったら
		
			$(this).filter(".number").each(function(){
				if(isNaN($(this).val())){
					$(this).parent().prepend("<p class='error'>数値のみ入力可能です</p>");
				}
			});

			//メールアドレスのチェック
		
			$(this).filter(".mail").each(function(){
				if($(this).val() && !$(this).val().match(/.+@.+\..+/g)){
					$(this).parent().prepend("<p class='error'>メールアドレスの形式が異なります</p>");
				}
			});

			$(this).filter(".mail_check").each(function(){
				if($(this).val() && $(this).val()!=$("input[name="+$(this).attr("name").replace(/^(.+)_check$/, "$1")+"]").val()){
					$(this).parent().prepend("<p class='error'>メールアドレスと内容が異なります</p>");
				}
			});

		});
		
		//もしエラーが１つ以上あれば、ddにerrorクラスをつけて、エラー位置にスクロールする

		if($("p.error").size() > 0){
			$('html,body').animate({ scrollTop: $("p.error:first").offset().top-40 }, 'slow');
			$("p.error").parent().addClass("error");
			return false;
		}
	});
});