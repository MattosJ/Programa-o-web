let data = new Date();

let ano = data.getFullYear();
let mes = data.getMonth();
let dia = data.getDate();
let hora = data.getHours();
let minutos = data.getMinutes();
let segundos = data.getSeconds();
let milisegundos = data.getMilliseconds();
let diaSemana = data.getDay();
const diasSemana = ["Domingo","Segunda","Terça", "Quarta", "Quinta", "Sexta","Sábado"];
const mesesDoAno = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];
let diaSemanaEscrito = diasSemana[diaSemana];
let mesEscrito = mesesDoAno[mes];
console.log(ano);
console.log(mesEscrito);
console.log(diaSemanaEscrito);
console.log(hora);
console.log(minutos);
console.log(segundos);
console.log(milisegundos)
let dataBR= data.toLocaleString('pt-BR',{dateStyle : 'short'})
console.log(dataBR) 

var hoje = new Date();
var vencimento = new Date(2024,0,15)
if(hoje > vencimento){
  console.log("Sua conta está vencida!")
}
else{
  console.log("Ainda não venceu!")
}

var dataInicial = new Date()
var dataFinal = new Date(2024,11,31)

var diferencaTempo = dataFinal.getTime() - dataInicial.getTime()

var diferencaDias = Math.ceil(diferencaTempo/(24*60*60*1000))

console.log(diferencaDias)