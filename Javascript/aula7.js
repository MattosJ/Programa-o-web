function soma(valor1,valor2){
  return valor1 + valor2;
}
  document.getElementById("texto").innerHTML = soma(10,10);
function realParaDOlar(real,cotacaoDolar){
  return real*cotacaoDolar;
}
var total =realParaDOlar(10,5.08) ;

alert(total)

function alertaHello(){
  alert("Olá pessoal");
}

function paraCelsius(ValorFahrenheit){
  return (5/9) * (ValorFahrenheit - 32);
}
var x = paraCelsius(77);
alert("A temperatura é de "+ x + " graus celsius")

function minhaFuncao(){
  var x = 2;
}