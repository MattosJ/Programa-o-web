var pote = "Bombom";
alert(pote);
var a = 2;
var b = 3;
var c = a+b;
alert(c);
var a,b,c;
a = 2;
b = 3;
c = a + b;
var n4me , surname, nomeCompleto;
n4me= "James";
surname = "Pereira";
fullName = n4me + " " + surname;

document.getElementById("text").innerHTML = fullName;
var person;
var age = 30;
person = age + n4me;

document.getElementById("text").innerHTML = person;


person = n4me + age + 10; /// não usar esse tipo de coisas.
var sumAge = age + 10;
person = n4me + sumAge; /// fazer assim.

let person = "João"; // erro proposital;

var x = 10;

{
  var x = 2;
}

