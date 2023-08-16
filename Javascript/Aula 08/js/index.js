
/**
    Estrutura basica de uma função js
    Requer um nome 
    Pode ter parametros
    function nome(){
        funçao sem parametros

    }

    function sub(v1,v2){
        funçao com parametros

    }

    As funções podem ser invocadas
*/

function soma(valor1, valor2){
    return valor1 + valor2;
}

document.getElementById("texto").innerHTML = soma(10,10);


//Invocando funções


//Será invocada no html
function seuNome(){
    document.getElementById("nome").innerHTML = "Adrian Nery";
}


//Invocamento por js
soma(1,2);


//Invocamento por variaveis
function paraCelsius(valorFahrenheit){
    return (5/9) * (valorFahrenheit - 32);
}