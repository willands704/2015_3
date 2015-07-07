<?php
	foreach( $_POST as $key => $val){
		$_POST[$key] = htmlspecialchars( $val );
	}

	$name=$_POST["name"];
	$furi=$_POST["furi"];
	$mail=$_POST["mail"];
	$goiken=$_GET["goiken"];
	$age=$_POST["age"];
	$inquiry=$_POST["inquiry"];
	
?>



<!DOCTYPE html>
<html lang="ja">
	<head>
		<meta charset="utf-8">
		<title>サンクスページ</title>
	</head>
	
	<body>
		<h3>メッセージを送信しました</h3>
		
		<p><?php echo $name; ?>様</p>
		<p>お問い合わせありがとうございます</p><br>
		<p style="width:400px">お問い合わせ内容【<?php echo $inquiry; ?>】</p>
		<p>数日内にメールにて回答又は連絡させて頂きます。<br>
		混み合う場合は回答が遅れる事があります。あらかじめご了承ください。</p>
		
		

<?php
	$to = "willands.manabu704@gmail.com";
	$mail_sub="お問い合わせを受付ました";
	$mail_body="お名前:".$name."\n フリガナ:".$furi
	."\n アドレス:".$mail."\n 性別:".$gender
	."\n 年齢:".$age."\n お問い合わせ内容:".$inquiry;
	
	$mail_body=html_entity_decode($mail_body,ENT_QUOTES,"UTF-8");
	$mail_head="From:".$mail;
	mb_language("japanese");
	mb_internal_encoding("UTF-8");
	mb_send_mail($to,$mail_sub,$mail_body,$mail_head);
		



?>
		


	</body>
</html>