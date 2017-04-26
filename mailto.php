<?php
if (isset($_POST["email"]) && !empty($_POST["email"]) && filter_var($_POST["email"], FILTER_VALIDATE_EMAIL)) {
    //echo "Esta dirección de correo ($email_a) es válida.";

	header('Content-Type: text/html; charset=utf-8');
	/*
	$_POST["nombre"];
	$_POST["email"];
	$_POST["estado"];
	$_POST["asunto"];
	$_POST["comentario"];
	*/
	// multiple recipients
	//$to = 'admin@tkterrazagrill.com' . ', ';
	//$to .= 'emilioo@designo.mx';
	$to = 'emilioo@designo.mx' . ', ';
	$to .= 'oemilio16@gmail.com';

	// subject
	$subject = 'Comentario de usuario en tkterrazagrill.com';

	// message
	$message = '
	<html>
		<head>
		  <title>Comentario Fisher\'s</title>
		</head>
		<body>
			<div data-empty="true">
				<br>
			</div><img class="fr-dib fr-draggable fr-fil" src="http://104.196.113.84/mautic/media/images/bd9a588eb578d8137520991a0a5e7411.png" style="width: 100%; height: auto;">

			<h2>
				<br>
				<span style="font-size: 18px;">
					<strong>
						Nombre:&nbsp;'.$_POST["nombre"].'
					</strong>
				</span>
			</h2>
			<span style="font-size: 18px;">
				<strong>
					<br>
					Correo:&nbsp;'.$_POST["email"].'
					<br><br>
					Comentario:<br>'.$_POST["comentario"].'
				</strong>
			</span>
			<div data-empty="true">
				<br>
			</div>
			<div data-empty="true">
				<br>
			</div>
			<hr>
			<div style="text-align: center;"><a href="http://tkterrazagrill.com/">tkterrazagrill.com</a></div>
		</body>
	</html>
	';
	/*
	switch ($_POST["tema"]) {
		case '1':
			# code...
			$message.='<h1>Mensaje sin tema:</h1>';
			break;
		case '2':
			$message.='<h1>Sugerencia</h1>';
			break;
		case '3':
			$message.='<h1>Queja</h1>';
			break;
		case '4':
			$message.='<h1>Comentario</h1>';
			break;
		case '5':
			$message.='<h1>Agregar Plan</h1>';
			break;
		case '6':
			$message.='<h1>Reportar Plan</h1>';
			break;	
		case '7':
			$message.='<h1>Otro</h1>';
			break;

		default:
			$message.='<h1>Mensaje sin tema</h1>';
			break;
	}
	*/

	// To send HTML mail, the Content-type header must be set
	$headers  = 'MIME-Version: 1.0' .PHP_EOL;
	$headers .= 'Content-type: text/html; charset=utf-8' .PHP_EOL;

	// Additional headers
	//$headers .= 'To: Designo <emilioo@designo.mx>, Gmail <oemilio16@gmail.com>' . "\r\n";
	$headers .= 'From: tkterrazagrill.com <admin@tkterrazagrill.com>' . "\r\n";
	//$headers .= 'Cc: birthdayarchive@example.com' . "\r\n";
	//$headers .= 'Bcc: birthdaycheck@example.com' . "\r\n";

	// Mail it
	//mail($to, $subject, $message, $headers);
	if (mail($to, $subject, $message, $headers)){
		echo true;
	}else{
		echo false;
	}
}else{
	throw new Exception("Error procesando el correo", 1);
	
}