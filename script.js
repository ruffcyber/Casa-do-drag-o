document.addEventListener('DOMContentLoaded', () => {
document.getElementById('ano').textContent = new Date().getFullYear();
initLinkAtivo();
initFormularioReserva();
initRevelarAoRolar();
initModais();
initGaleria();
initLogin();
initCarrinho();
});

function initLinkAtivo() {
const secoes = document.querySelectorAll('main section[id]');
const links = document.querySelectorAll('header nav a[href^="#"]');
if (!secoes.length || !links.length) return;
const observer = new IntersectionObserver((entradas) => {
entradas.forEach(entrada => {
if (entrada.isIntersecting) {
const id = entrada.target.getAttribute('id');
links.forEach(link => {
link.classList.toggle('ativo', link.getAttribute('href') === `#${id}`);
});
}
});
}, { rootMargin: '-40% 0px -50% 0px' });
secoes.forEach(secao => observer.observe(secao));
}