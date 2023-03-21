
function calcular(){
    var  peso = parseFloat(document.getElementById("peso").value);
    var altura = parseFloat(document.getElementById("altura").value);
    var resultado = document.getElementById("resultado");

    calculo = peso/(altura*altura);

   
    if(calculo<18.5){
        resultado.innerHTML = "Magreza!!";
    }
    if(calculo<=24.9){
        resultado.innerHTML = "Normal!!";
    }
    if(calculo<=29.9){
        resultado.innerHTML = "sobrepeso!!";
    }
    if(calculo<=39.9){
        resultado.innerHTML = "Obesidade II!!";
    }
    if(calculo>40){
        resultado.innerHTML = "Obesidade III!!";
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