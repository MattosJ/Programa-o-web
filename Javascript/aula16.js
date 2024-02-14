class Carro {
  constructor(valor1,valor2,valor3){
    this.marca = valor1;
    this.modelo = valor2;
    this.ano = valor3;
  }
  buzina(){
    return this.modelo +  " Buzinou: Biiiiiiiiiiiii";
  }
}



const Uno = new Carro("Fiat","Uno",2001)
console.log(Uno)

const Gol = new Carro("Volkswagen","Gol",2007)

console.log(Gol.buzina())

Gol.ano = 2014
console.log(Gol)