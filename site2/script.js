
// hamburge menu
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");

hamburger.addEventListener("click", () => nav.classList.toggle("active"));


// slide auto//

let count = 1;
document.getElementById("radio1").checked = true;

setInterval(function(){
  nextImage();
},3500)

function nextImage(){
  count++;
  if(count > 4){
    count = 1;
  }
  document.getElementById("radio" + count).checked = true;
}
