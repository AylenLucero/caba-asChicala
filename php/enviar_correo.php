<?php 

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'Exception.php';
require 'PHPMailer.php';
require 'SMTP.php';



	if(isset($_POST["nombre"]) && !empty($_POST["nombre"]) &&
	   isset($_POST["apellido"]) && !empty($_POST["apellido"]) &&
	   isset($_POST["email"]) && !empty($_POST["email"]) &&
	   isset($_POST["mensaje"]) && !empty($_POST["mensaje"])){

		$destino = "luceroaylen97@gmail.com";
		$nombre = $_POST["nombre"] . " " . $_POST["apellido"];
		$mail = $_POST["email"];
		$mensaje = $_POST["mensaje"];


		$email_message = "Detalles del formulario de contacto:\n\n";
		$email_message .= "Nombre: " . $_POST['nombre'] . "\n";
		$email_message .= "Apellido: " . $_POST['apellido'] . "\n";
		$email_message .= "E-mail: " . $_POST['email'] . "\n";
		$email_message .= "Comentarios: " . $_POST['mensaje'] . "\n\n";


$mail = new PHPMailer(true);

try {
    //Server settings
    $mail->SMTPDebug = 0; //Enable verbose debug output
    $mail->isSMTP(); //Send using SMTP
    $mail->Host = 'smtp.office365.com'; //Set the SMTP server to send through
    $mail->SMTPAuth = true; //Enable SMTP authentication
    $mail->Username = 'lucero_aylen@hotmail.com.ar'; //SMTP username
    $mail->Password = 'Sanclemente1!'; //SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS; //Enable implicit TLS encryption
    $mail->Port = 587; //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`
	$mail->SMTPOptions = array(
    'ssl' => array(
        'verify_peer' => false,
        'verify_peer_name' => false,
        'allow_self_signed' => true
    )
	);
    //Recipients
    $mail->setFrom('lucero_aylen@hotmail.com.ar', 'Mailer');
    $mail->addAddress($destino, 'WEB A&K'); //Add a recipient

    //Content
    $mail->isHTML(true); //Set email format to HTML
    $mail->Subject = 'Contacto desde A&K.com.ar';
    $mail->Body = $email_message;
    $mail->AltBody = $email_message;

    $mail->send();
}
catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
}
?>
