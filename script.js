document.getElementById('contact-form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
        const response = await fetch('/api/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        const result = await response.json();
        alert(result.message);
    } catch (error) {
        console.error('Erro:', error);
        alert('Falha ao enviar a mensagem.');
    }
});
/*
var data = {
    service_id: 'service_t23mm03',
    template_id: 'template_a9xxzyi',
    user_id: 'mJ6RZhZbDRbLMsnSj',
    template_params: {
        'username': 'James',
        'g-recaptcha-response': '03AHJ_ASjnLA214KSNKFJAK12sfKASfehbmfd...'
    }
};
 
$.ajax('https://api.emailjs.com/api/v1.0/email/send', {
    type: 'POST',
    data: JSON.stringify(data),
    contentType: 'application/json'
}).done(function() {
    alert('Email Enviado com Sucesso!');
}).fail(function(error) {
    alert('Oops... ' + JSON.stringify(error));
});

*/ 

document.getElementById("faleConosco").addEventListener("click", function() {
    var contatoOpcoes = document.getElementById("contatoOpcoes");
    if (contatoOpcoes.style.display === "none" || contatoOpcoes.style.display === "") {
      contatoOpcoes.style.display = "block";
    } else {
      contatoOpcoes.style.display = "none";
    }
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
