let count = 1; // Inicia no primeiro slide
const totalSlides = 5; // Número total de slides
const intervalTime = 3000; // Tempo entre os slides (em milissegundos)

function autoSlide() {
  count = count < totalSlides ? count + 1 : 1;


  document.getElementById(`slide${count}`).checked = true;
}

setInterval(autoSlide, intervalTime);
