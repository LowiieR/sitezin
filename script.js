// Animação de aparecimento ao rolar a página

const elementos = document.querySelectorAll('.revelar');

const observador = new IntersectionObserver((entradas) => {

    entradas.forEach((entrada) => {

        if (entrada.isIntersecting) {

            entrada.target.classList.add('visivel');

            observador.unobserve(entrada.target);

        }

    });

}, {
    threshold: 0.15
});

elementos.forEach((elemento) => {
    observador.observe(elemento);
});