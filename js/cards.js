//media
function media(event){
let num1 = parseInt(document.getElementById("nota1").value)
let num2 = parseInt(document.getElementById("nota2").value)
let num3 = parseInt(document.getElementById("nota3").value)
let num4 = parseInt(document.getElementById("nota4").value)
let resultado = (num1+num2+num3+num4)/4;

document.getElementById("resultado").textContent = resultado
}

function fator(event){
let num = parseInt(document.getElementById("numeral").value)
let fat = document.getElementById("fat");
let contador = 1
 
 for(let count=1 ; count<=num ; count++){
 contador *= count;
 fat.innerHTML = contador;
}


}
function converter(event) {
    let temp = parseFloat(document.getElementById("temp").value)
    let operacao = event.target.textContent;
    let resultado
 
    switch (operacao) {
       case "Celsius para Fahrenheit":
            console.log("C");
            resultado = 1.8* temp + 32
          break;
       case "Fahrenheit para Celsius":
             console.log("F");
             resultado = (temp - 32)/ 1.8
    
       default:
          console.log("Não é poss-ivel reslizar a conversão");
    }
 document.getElementById("Temperatura").textContent = resultado
 }
 var valor;
 var resultado;
 function botao(num) {
    valor = document.calc.visor.value += num;
 }
 
 function reseta() {
    document.calc.visor.value = "";
 }
 
 function calcula() {
    resultado = eval(valor);
    document.calc.visor.value = resultado;
    
 }







