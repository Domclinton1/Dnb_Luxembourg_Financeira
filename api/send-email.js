import sgMail from '@sendgrid/mail';

// Configuração da API Key do SendGrid
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { nome, email, celular, valor, mensagem } = req.body;

        const msg = {
            to: 'domlinksolucoesdigitais@gmail.com',
            from: email,
            subject: 'Novo formulário de contato',
            text: `Nome: ${nome}\nEmail: ${email}\nTelemóvel: ${celular}\nValor: ${valor}\nMensagem: ${mensagem}`,
        };

        try {
            await sgMail.send(msg);
            res.status(200).json({ message: 'Mensagem enviada com sucesso!' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Falha ao enviar a mensagem.' });
        }
    } else {
        res.status(405).json({ message: 'Método de envio inválido.' });
    }
}
