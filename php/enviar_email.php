<?php
  // Sanitizar as entradas para evitar injeção de cabeçalho
  function sanitize_input($data) {
      return htmlspecialchars(stripslashes(trim($data)));
  }

  // Variáveis
  $nome = sanitize_input($_POST['nome']);
  $email = sanitize_input($_POST['email']);
  $celular = sanitize_input($_POST['celular']);
  $mensagem = sanitize_input($_POST['mensagem']);
  $valor = sanitize_input($_POST['valor']);
  $data_envio = date('d/m/Y');
  $hora_envio = date('H:i:s');

  // Composição do E-mail
  $arquivo = "
      <html>
      <body>
          <p><strong>Nome:</strong> $nome</p>
          <p><strong>E-mail:</strong> $email</p>
          <p><strong>Telemóvel:</strong> $celular</p>
          <p><strong>Valor desejado:</strong> $valor</p>
          <p><strong>Mensagem:</strong> $mensagem</p>

          <hr>
          <p>Este e-mail foi enviado em <strong>$data_envio</strong> às <strong>$hora_envio</strong></p>
      </body>
      </html>
  ";

  // E-mails para quem será enviado o formulário
  $destino = "info@dnbluxemburg.com";
  $assunto = "Contato pelo Site";

  // Cabeçalhos de e-mail
  $headers  = "MIME-Version: 1.0\r\n";
  $headers .= "Content-type: text/html; charset=utf-8\r\n";
  $headers .= "From: \"$nome\" <$email>\r\n";
  $headers .= "Reply-To: $email\r\n";

  // Enviar
  mail($destino, $assunto, $arquivo, $headers);

  // Redirecionar para a página de agradecimento
  echo "<meta http-equiv='refresh' content='10;URL=https://dnbluxemburg.com/thanks.html'>";
?>
