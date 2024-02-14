const lista1 = ["Arroz","Feijão","Macarrão","Leite"];
const lista2 = ["Suco","Refrigerante","Carne"];
const jogadores = ["Biro-Biro","Ribamar","Pelé","Maradona"];
const superLista = lista1.concat(lista2);
const craques = jogadores.slice(2);
const ordemJogadores = jogadores.sort();
const numeros = [40,100,1,5,25,10];
function MaiorNumero(array){
  return Math.max.apply(null,array);
}
MaiorNumero(numeros);

const maior20 = numeros.filter(filtragem);

function filtragem(value,index,array){
  return value > 20;
}