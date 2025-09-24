// Rolagem suave para seções
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Menu responsivo (exemplo para um botão de menu)
const menuBtn = document.getElementById('menu-btn');
const nav = document.getElementById('nav');
if (menuBtn && nav) {
    menuBtn.addEventListener('click', () => {
        nav.classList.toggle('active');
    });
}

const botao = document.getElementById('botaoEnv');
const mensagemDiv = document.getElementById('mensagem');

botao.addEventListener('click', function() {
    const novoParagrafo = document.createElement('p');
    novoParagrafo.textContent = 'Mensagem enviada com sucesso!';
    mensagemDiv.appendChild(novoParagrafo);
    mensagemDiv.classList.replace('mensagem-escondida', 'mensagem');
});


