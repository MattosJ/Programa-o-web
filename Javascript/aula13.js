function verificaCor(){
 let cor = document.getElementById("cor").value;
 cor = cor.toLowerCase();
  switch (cor){
    case "azul":
      document.body.style.background = "blue";
      break;

      case "vermelho":
        document.body.style.background = "red";
        break;
      case "amarelo":
        document.body.style.background = "yellow";
        break;
      default:
        document.getElementById("test").innerHTML ="Nenhum cor disponível para: "  +cor;
  }


}