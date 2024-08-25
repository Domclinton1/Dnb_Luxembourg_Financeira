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
