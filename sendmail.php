<?php
//Import PHPMailer classes into the global namespace
//These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

//Load Composer's autoloader
require 'vendor/autoload.php';

//Create an instance; passing `true` enables exceptions
$mail = new PHPMailer(true);

try {
    //Server settings
    //$mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
    $mail->isSMTP();                                            //Send using SMTP
    $mail->Host       = 'smtp.gmail.com';                     //Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
    $mail->Username   = 'brilliant.studio.kh@gmail.com';                     //SMTP username
    $mail->Password   = 'Dubai777';                               //SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
    $mail->Port       = 465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

    //Recipients
    $mail->setFrom('brilliant.studio.kh@gmail.com', 'Mailer');
    $mail->addAddress('brilliant.studio.kh@gmail.com', 'Joe User');     //Add a recipient
	
	$body = '<h1>Заявка в "Brilliant Design Studio"</h1>';
	$body .= '<p><strong>Имя:</strong> '.$_POST['name'].'</p>';
	$body .= '<p><strong>Возраст:</strong> '.$_POST['age'].'</p>';
	$body .= '<p><strong>Опыт работы в WebCam:</strong> '.$_POST['experience'].'</p>';
	$body .= '<p><strong>Телефон:</strong> '.$_POST['phone'].'</p>';
	$body .= '<p><strong>Сообщение:</strong> '.$_POST['message'].'</p>';

    //Content
	$mail->Charset = 'UTF-8';
	$mail->setLanguage('ru', 'phpmailer/language/');
    $mail->isHTML(true);                                  //Set email format to HTML
    $mail->Subject = 'New BMS contact';
    $mail->Body    = $body;

    $mail->send();
    //echo 'Message has been sent';
	header("Location: thankyou.html");
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}