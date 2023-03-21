
function calcular(){
  var  peso = parseFloat(document.getElementById("peso").value);
    var altura = parseFloat(document.getElementById("altura").value);
    var resultado = document.getElementById("resultado");

    calculo = peso/(altura*altura);

   
    if(calculo>=25){
        resultado.innerHTML = "normal";
    }

console.log(calculo);
}

function limpar(){
    peso = parseFloat(document.getElementById("peso").value);
    altura = parseFloat(document.getElementById("altura").value);
    resultado = parseFloat(document.getElementById("resultado").value);


    document.getElementById("peso").value = " ";
    document.getElementById("altura").value = " ";
    document.getElementById("resultado").value = " ";
}