const carousel = document.querySelector('.carousel');
const carouselItem = document.querySelector('.carousel-item');

const texts = ["Lorem ipsum dolor sit amet.", "Consectetur adipiscing elit.", "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."];
let currentIndex = 0;

function changeSlide() {
    currentIndex = (currentIndex + 1) % texts.length;
    carouselItem.textContent = texts[currentIndex];
}

setInterval(changeSlide, 2000);

// Función para mostrar u ocultar opciones y buscador al hacer clic en el botón
function toggleElements() {
    var elements = document.querySelectorAll('.hidden-md');
    for (var i = 0; i < elements.length; i++) {
        elements[i].classList.toggle('d-md-block');
    }
}

// Agregar un evento clic al botón de mostrar/ocultar
document.getElementById('toggleButton').addEventListener('click', toggleElements);

function toggleElements() {
    var elements = document.querySelectorAll('.hidden-md');
    for (var i = 0; i < elements.length; i++) {
        elements[i].classList.toggle('d-md-block');
    }
}

// Agregar un evento clic al botón de mostrar/ocultar
document.getElementById('toggleButton').addEventListener('click', toggleElements);