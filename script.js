// Seleciona o modal e o botão de fechar
var modal = document.getElementById("myModal");
var span = document.querySelector(".close");

// Seleciona todos os botões com a classe .modalSimulator
var buttons = document.querySelectorAll(".modalSimulator");

// Adiciona um evento de clique para cada botão com a classe .modalSimulator
buttons.forEach(function(button) {
    button.onclick = function() {
        modal.style.display = "block";
    };
});

// Quando o usuário clicar no "X" (span), o modal será fechado
span.onclick = function() {
    modal.style.display = "none";
}

// Quando o usuário clicar fora do modal, ele será fechado
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


// Seleciona todos os elementos com a classe .ler-mais
var lerMaisElements = document.querySelectorAll(".saibaMais");

// Define o número de telefone e a mensagem para o WhatsApp
var telefone = "5581999999999"; // Substitua pelo número desejado
var mensagem = "Olá, gostaria de saber mais informações."; // Mensagem padrão

// Adiciona um evento de clique para cada elemento com a classe .ler-mais
lerMaisElements.forEach(function(element) {
    element.onclick = function() {
        var url = "https://wa.me/" + telefone + "?text=" + encodeURIComponent(mensagem);
        window.open(url, '_blank'); // Abre em uma nova aba
    }
});


// Seleciona todos os itens da lista com a classe .nav-item
var navItems = document.querySelectorAll("ul li");

// Adiciona um evento de clique para cada item da lista
navItems.forEach(function(item) {
    item.addEventListener("click", function() {
        // Obtém o valor do atributo data-target
        var targetId = this.getAttribute("data-target");
        
        // Seleciona o elemento com o id correspondente
        var targetElement = document.getElementById(targetId);
        
        // Verifica se o elemento existe
        if (targetElement) {
            // Rola até o elemento alvo
            targetElement.scrollIntoView({ behavior: "smooth" });
        }
    });
});



window.addEventListener("scroll", function() {
    const heroSection = document.querySelector(".hero");
    const whatsappButton = document.querySelector(".btn-whatsapp");
    const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;

    if (window.scrollY > heroBottom) {
        whatsappButton.style.display = "block";
    } else {
        whatsappButton.style.display = "none";
    }
});


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
