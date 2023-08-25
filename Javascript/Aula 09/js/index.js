//É convencionado usar o const para criar objetos em javascript

//Podemos criar metodos dentro do Objeto

const carro ={
     marca: "bugatti",
     modelo: "Divo",
     ano: 2020,
     placa: "ADR-2106",
     buzina: function(){alert('biiiiiiii')},
     completo: function(){
        return "A marca é  "+this.marca+" e o modelo é "+this.modelo;
     }
}

//Apresentando caracteristicas do objeto

console.log(carro)
console.log(carro.ano)
//ou
console.log(carro["ano"])

//Invocando os metodos do Objeto
carro.buzina();

console.log(carro.completo());
