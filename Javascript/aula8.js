const carro = {
  marca: "ford", 
  modelo: "Ka",
  ano: 2015,
  placa : "ABC-1234",
  buzina: function (){
    alert('biiiiiiii')
  },
  completo: function(){
    return "A marca é "+this.marca+" e o modelo é: "+this.modelo;
  }
};

console.log(carro);
carro.buzina();
console.log(carro.completo())