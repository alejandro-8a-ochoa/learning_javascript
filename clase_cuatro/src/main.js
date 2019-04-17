

//////////// ejercicio 1 //////////////////////

/*necesito dos funciones que reciben un
 parametro, primera funcion
  de dolares a pesos, y la segunda 
  de pesos de gasolina*/

function convercion(dollars){
    return dollars*18.87;
}

function gasolina(pesos){
    console.log(`Puedes comprar ${pesos/19.37} de gasolina`);
}


var dollars;

dollars=20;//opcional

gasolina(convercion(dollars))




// pesos= convercion(dollars);//a lugar de dollars poner cualquier valor numerico
// litros=gasolina(pesos);

// console.log(`${dollars} dolares son ${pesos} MXN`);
//console.log(`con ${pesos} puedes comprar ${litros} de gasolina`);


//////////// ejercicio 2 //////////////////////


function reversa(palabraACambiar){
  return palabraACambiar.split('').reverse().join("");
}

console.log(reversa("pedo"));


////ejercicio 3//


var palabra= 'cosa'

function firsLaterUpperCase (word){
    var latter=word.split(' ').map(function(element){
    var latterElement=element.split('');
    var FirslatterElement=latterElement[0].toUpperCase();
    
        console.log(FirslatterElement , element);
    });
    
    console.log(latter);
}


firsLaterUpperCase("hola que haces")




///////ejercicio 4//////
/////avanza 7 letras en el abecedario////

