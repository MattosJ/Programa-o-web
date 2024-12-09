const containerEl = document.querySelector(".container");

const occupations = ["Programmer","Student","Freelancer"]

let i = 0;
let characterIndex = 0;
updateText();
function updateText(){
  characterIndex++;
  containerEl.innerHTML = `
  <h1>I am a ${occupations[i].slice(0,characterIndex)}</h1>`;
  
  if(characterIndex === occupations[i].length){
    i++;
    characterIndex = 0;
  }
  if(i === occupations.length){
    i = 0;
  }
  setTimeout(updateText,400);
}

