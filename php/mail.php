<?php

$name = $_POST['name'];
$phone = $_POST['phone'];

$subject = 'Поступила новая заявка!';

$message = '<b>Имя пользователя: ' . $name . ' </b> </br>
<b>Его номер: ' . $phone . ' </b> </br>';

$to = "dalaxi1052@chinamkm.com";

$headers = "Content-type: text/html; charset=UTF-8 \r\n";
$headers .= "From: Bebra\r\n";

echo mail($to, $subject, $message, $headers);