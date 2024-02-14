function eventoClick(){
  document.body.style.backgroundColor  = "yellow"
}
function dblClick(){
  alert('Evento de clique duplo')
}
function viraVermelho(){
  let div = document.getElementById("teste");
  div.style.backgroundColor = "red";
}
function viraAzul(){
  let div = document.getElementById("teste");
  div.style.backgroundColor = "blue";
}
//function adicionaTexto(){
  //let p = document.getElementById("texto")
  //p.append('O mouse moveu');
//}
function limpaTexto(){
  document.getElementById("campoTexto").value = "";

}
function mudou(){
  console.log("mudou")
}