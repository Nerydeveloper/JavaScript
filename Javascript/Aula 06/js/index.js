//DECLARANDO VARIAVEIS

var a,b,c;

//ATRIBUINDO VALORES AS VARIAVEIS
a =20;
b= 30;
c = a+b;


//USANDO O VAR
// A variavel pode ser redeclarada

var d = 2;
var d = 320;

document.getElementById("var").innerHTML = c; //Vai mostrar o valor do ultimo d

//USANDO O LET
//A variavel não pode ser redeclarada no mesmo bloco de codigo

//ex:
//let pessoa = "Adrian";
//let pessoa = "Lucas";


//ex:
let x=10;
{
    let x = 2;
    document.getElementById("dentro").innerHTML = "Estou dentro do bloco logo meu valor é " + x;
}

document.getElementById("texto").innerHTML = "Estou fora do bloco, logo meu valor é " + x;

//USANDO O CONST
//sempre será o primeiro valor atribuido a variavel

//ex:
const y = 10;
{
    const y = 1;
}
document.getElementById("const").innerHTML = "Meu valor do const é : " + y;
