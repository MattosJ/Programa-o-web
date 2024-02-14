const carro = {
  marca : "Fiat",
  modelo : "Uno",
  ano: 2001
}

let texto = JSON.stringify(carro)
let obj = JSON.parse(texto)
console.log(obj.modelo)

const ajax = new XMLHttpRequest();
ajax.open('GET','https://viacep.com.br/ws/01001000/json/');
ajax.send();

ajax.onload = function(){
  console.log(this.responseText)
}