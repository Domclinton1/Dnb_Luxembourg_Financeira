<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Pega os dados do formulário
    $nome = htmlspecialchars($_POST['nome']);
    $email = htmlspecialchars($_POST['email']);
    $celular = htmlspecialchars($_POST['celular']);
    $valor = htmlspecialchars($_POST['valor']);
    $mensagem = htmlspecialchars($_POST['mensagem']);
    
    // Configurações do e-mail
    $to = "domlinksolucoesdigitais@gmail.com";
    $subject = "Novo formulário de contato";
    $body = "Nome: $nome\n";
    $body .= "Email: $email\n";
    $body .= "Telemóvel: $celular\n";
    $body .= "Valor: $valor\n";
    $body .= "Mensagem: $mensagem\n";
    $headers = "From: $email" . "\r\n" .
               "Reply-To: $email" . "\r\n" .
               "X-Mailer: PHP/" . phpversion();
    
    // Envia o e-mail
    if (mail($to, $subject, $body, $headers)) {
        echo "Mensagem enviada com sucesso!";
    } else {
        echo "Falha ao enviar a mensagem.";
    }
} else {
    echo "Método de envio inválido.";
}
?>

