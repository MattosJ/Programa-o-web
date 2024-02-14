let input = document.getElementById('inputTarefa');
let btnAdd = document.getElementById('btn-add');
let main = document.getElementById('areaLista');
let contador = 0;
function addTarefa(){
  let valorInput = input.value;
  if((valorInput !== "") && (valorInput !== null) && (valorInput !== undefined) ){
    ++contador;

    let novoItem = `<div id=${contador} class="item">
    <div id ="icone_${contador}" onclick = "marcarTarefa(${contador})" class="item-icone">
      <span class="material-symbols-outlined">
        circle
        </span>
    </div>
    <div onclick = "marcarTarefa(${contador})" class="item-nome">
      ${valorInput}
    </div>
    <div class="item-botao">
      <button onclick ="deletar(${contador})" class="delete"><span class="material-symbols-outlined">
        delete
        </span>Deletar</button>
    </div>`
    main.innerHTML += novoItem;

    input.value = "";
    input.focus()
  }

}
function deletar(id){
  var tarefa = document.getElementById(id);
  tarefa.remove();
}
function marcarTarefa(id){
  var item = document.getElementById(id);
  var classe = item.getAttribute('class');

  if(classe == "item") {
    item.classList.add('clicado');

    var icone = document.getElementById('icone_' + id);
    icone.innerHTML = `<span class="material-symbols-outlined">
        task_alt
        </span>`;
  }
  else{
    item.classList.remove('clicado');
    var icone = document.getElementById('icone_' + id);
    icone.innerHTML = `<span class="material-symbols-outlined">
    circle
    </span>`;
  }
}


input.addEventListener("keyup",function(event){
  if(event.keyCode === 13){
    event.preventDefault();
    btnAdd.click();
  }
})