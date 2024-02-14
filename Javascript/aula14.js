for(i = 0; i <= 10000; i++){
  document.getElementById("").innerHTML += i + ", ";
}
var anoAtual = new Date().getFullYear
for(i = anoAtual ; i <=1900; i--){
  document.getElementById("ano").innerHTML += "<option value='"+i+"'>"+i+"</option>";
}