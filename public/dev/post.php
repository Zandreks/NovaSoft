<?php
require "class.phpmailer.php";
$data = json_decode(file_get_contents("php://input"), true);
$name = htmlspecialchars($data["name"]);
$email = htmlspecialchars($data["email"]);
$text = htmlspecialchars($data["text"]);

// настройки для отправки письма
$HTTP_HOST = parse_url('http://'.$_SERVER["HTTP_HOST"]); // не трогать!!!
$HTTP_HOST = str_replace(array("http://","www."),"",$HTTP_HOST['host']); // не трогать!!! вырезает с адреса: "www" для формирования e-mail от которого придёт уведомление

$to = "Nscorp.kz@gmail.com"; // кому отсылать: адрес e-mail
$from = "Nscorp.kz@gmail.com"; // адрес, от которого придёт уведомление, желательно указать существующий ящик на хостинге!
$signature = 'Обратная связь'; // подпись в письме
$title = "Обратная связь https://".$_SERVER["HTTP_HOST"]." ".$sel; // тема в письме

/*------------------------ start --------------------------*/
$mail = new PHPMailer();
$mail->From = $from; // адрес, от которого придёт уведомление
$mail->FromName = $signature; // подпись в письме от кого
$mail->AddAddress($to); // кому: адрес e-mail
$mail->IsHTML(true); // выставляем формат письма HTML
$mail->CharSet = 'utf-8'; //кодировка письма
$mail->Subject = $title; // тема письма



$body="<h1>Обратная связь  </h1> <p> Имя: $name <br>Email: $email <br>Сообщение:$text </p>";
    $mail->Body = $body;

    if(!$mail->Send()) {
       echo 'Письмо не отправлено!<br>Ошибка: ';
    } else {
        echo "ok";
    }
?>
