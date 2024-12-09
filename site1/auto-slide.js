let count = 1; 
const totalSlides = 5; 
const intervalTime = 3000;

function autoSlide() {
  count = count < totalSlides ? count + 1 : 1;


  document.getElementById(`slide${count}`).checked = true;
}

setInterval(autoSlide, intervalTime);

