 // Menu Toggle para dispositivos móveis
document.querySelector('.menu-toggle').  addEventListener('click', function() {
document.querySelector('nav ul').classList.toggle('active');
});

        // Filtro de portfólio
const filterBtns = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

        // Função para aplicar filtro
function aplicarFiltro(filtro) {
    portfolioItems.forEach(item => {
        if (filtro === 'todos') {
            item.style.display = 'block';
        } else if (item.getAttribute('data-category') === filtro) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// Definir filtro inicial ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    aplicarFiltro('comemorativos');
    filterBtns.forEach(btn => {
        if (btn.getAttribute('data-filter') === 'comemorativos') {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
});

// Botões de filtro
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(btn => btn.classList.remove('active'));
        btn.classList.add('active');
        const filtro = btn.getAttribute('data-filter');
        aplicarFiltro(filtro);
    });
});

        // Smooth scroll para links de navegação
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
            });
    });
});