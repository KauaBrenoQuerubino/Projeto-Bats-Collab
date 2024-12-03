const swiper = new Swiper('.swiper-container', {
    loop: true, // Para loop infinito
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    autoplay: {
        delay: 3000, // Intervalo de troca entre as imagens (em milissegundos)
    },
    spaceBetween: 30, // Distância entre os slides
});