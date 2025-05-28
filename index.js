// Menu Toggle para dispositivos móveis e ícone X
const menuToggle = document.querySelector('.menu-toggle');
const navUl = document.querySelector('nav ul');
const menuIcon = menuToggle.querySelector('i');

menuToggle.addEventListener('click', function() {
    navUl.classList.toggle('active');
    // Troca icon de hamburguer para X e vice-versa
    if(navUl.classList.contains('active')) {
        menuIcon.classList.remove('fa-bars');
        menuIcon.classList.add('fa-xmark');
        menuToggle.setAttribute('aria-expanded', 'true');
    } else {
        menuIcon.classList.remove('fa-xmark');
        menuIcon.classList.add('fa-bars');
        menuToggle.setAttribute('aria-expanded', 'false');
    }
});

// Fecha menu ao clicar em um item no mobile
navUl.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function() {
        if(window.innerWidth <= 768 && navUl.classList.contains('active')) {
            navUl.classList.remove('active');
            menuIcon.classList.remove('fa-xmark');
            menuIcon.classList.add('fa-bars');
            menuToggle.setAttribute('aria-expanded', 'false');
        }
    });
});

// Filtro de portfólio
const filterBtns = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

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
        // Só previne se for âncora interna
        if(document.querySelector(this.getAttribute('href'))) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});