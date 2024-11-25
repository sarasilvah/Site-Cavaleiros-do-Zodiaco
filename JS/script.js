// Alterna o tema (claro/escuro)
document.getElementById("theme-toggle").addEventListener("click", function() {
    document.body.classList.toggle("light-theme");
    // Altera o ícone de tema (🌙 para ☀️ e vice-versa)
    const icon = document.getElementById("theme-toggle");
    icon.textContent = document.body.classList.contains("light-theme") ? "☀️" : "🌙";
});

// Modal de personagem
function showModal(character) {
    const modal = document.getElementById("characterModal");
    const modalTitle = document.getElementById("modalTitle");
    const modalDescription = document.getElementById("modalDescription");

    if (character === 'seiya') {
        modalTitle.textContent = "Seiya de Pégaso";
        modalDescription.textContent = "O cavaleiro de Pégaso, corajoso e leal, sempre em busca de proteger Atena.";
    } else if (character === 'hyoga') {
        modalTitle.textContent = "Hyoga de Cisne";
        modalDescription.textContent = "Com poderes de gelo, ele enfrenta desafios com determinação e força interior.";
    } else if (character === 'shiryu') {
        modalTitle.textContent = "Shiryu de Dragão";
        modalDescription.textContent = "Com um coração puro e a força do dragão, Shiryu é um dos cavaleiros mais poderosos.";
    }

    modal.classList.add("show");
}

// Fecha o modal de personagem
function closeModal() {
    const modal = document.getElementById("characterModal");
    modal.classList.remove("show");
}

// Modal de trailer
const trailerButtons = document.querySelectorAll(".trailer-btn");
const trailerModal = document.getElementById("trailer-modal");
const trailerVideo = document.getElementById("trailer-video");

// Abre o modal do trailer
trailerButtons.forEach(button => {
    button.addEventListener("click", function() {
        const trailerUrl = this.getAttribute("data-trailer");
        trailerVideo.src = trailerUrl;
        trailerModal.classList.add("show");
    });
});

// Fecha o modal do trailer ao clicar no "X"
document.querySelector("#trailer-modal .close-btn").addEventListener("click", function() {
    trailerModal.classList.remove("show");
    trailerVideo.src = ""; // Remove o vídeo para parar a reprodução
});

// Fecha qualquer modal ao clicar fora do conteúdo
window.addEventListener("click", function(event) {
    if (event.target === trailerModal) {
        trailerModal.classList.remove("show");
        trailerVideo.src = ""; // Remove o vídeo para parar a reprodução
    }
});
