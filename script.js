document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    // Parâmetros do template de e-mail
    const templateParams = {
        nome: document.getElementById('nome').value,
        email: document.getElementById('email').value,
        celular: document.getElementById('celular').value,
        valor: document.getElementById('valor').value,
        mensagem: document.getElementById('mensagem').value
    };

    // Envia o e-mail usando EmailJS
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
    .then(function(response) {
        console.log('E-mail enviado com sucesso!', response.status, response.text);
        alert('Mensagem enviada com sucesso!');
    }, function(error) {
        console.log('Falha ao enviar o e-mail.', error);
        alert('Falha ao enviar a mensagem.');
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const toggleDetails = document.querySelectorAll(".toggle-details");

    toggleDetails.forEach(button => {
        button.addEventListener("click", function() {
            const bankFooter = this.closest('.bank-footer');
            const bankDetails = bankFooter.nextElementSibling;

            bankFooter.classList.toggle('expanded');
            
            if (bankFooter.classList.contains('expanded')) {
                button.textContent = "Menos Detalhes";
                bankDetails.style.display = "block";
            } else {
                button.textContent = "Mais Detalhes";
                bankDetails.style.display = "none";
            }
        });
    });
});
/* Fim do expansor de tela*/ 

document.querySelector('.ler-mais').addEventListener('click', function() {
    const hiddenItems = document.querySelectorAll('.emprestimos-3');
    
    if (this.textContent === 'Ler Mais') {
        hiddenItems.forEach(function(item, index) {
            if (index >= 4) { // Mostra apenas as divs que estavam escondidas
                item.classList.remove('hidden');
            }
        });
        this.textContent = 'Ler Menos';
    } else {
        hiddenItems.forEach(function(item, index) {
            if (index >= 4) { // Esconde novamente as divs que estavam escondidas
                item.classList.add('hidden');
            }
        });
        this.textContent = 'Ler Mais';
    }
});


document.querySelector('.ler-mais-2').addEventListener('click', function() {
    const conteudo = document.querySelector('.duvida-conteudo');
    conteudo.classList.toggle('hidden');
    
    if (conteudo.classList.contains('hidden')) {
        this.textContent = 'Ler Mais';
    } else {
        this.textContent = 'Ler Menos';
    }
});
