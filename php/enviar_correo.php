<?php 

	if(isset($_POST["nombre"]) && !empty($_POST["nombre"]) &&
	   isset($_POST["apellidos"]) && !empty($_POST["apellidos"]) &&
	   isset($_POST["mail"]) && !empty($_POST["mail"]) &&
	   isset($_POST["mensaje"]) && !empty($_POST["mensaje"])){

		$nombre = $_POST["nombre"] . " " . $_POST["apellidos"];
		$mail = $_POST["mail"];
		$mensaje = $_POST["mensaje"];

		echo $nombre;
		echo $mail;
		echo $mensaje;

$email_message = "Detalles del formulario de contacto:\n\n";
$email_message .= "Nombre: " . $_POST['nombre'] . "\n";
$email_message .= "Apellido: " . $_POST['apellidos'] . "\n";
$email_message .= "E-mail: " . $_POST['mail'] . "\n";
$email_message .= "Comentarios: " . $_POST['mensaje'] . "\n\n";


// Ahora se envía el e-mail usando la función mail() de PHP

$headers = 'From: '.$_POST["nombre"]. " " . $_POST["apellidos"]."\r\n". 
  'Reply-To: '.$_POST["mail"]."\r\n" .
  'X-Mailer: PHP/' . phpversion();

		mail("veromilovich1972@gmail.com", $mail, $nombre, $mensaje);

		echo "correo enviado satisfactoriamente";


	}

 ?>
