

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
    return word.split(' ').map(function(element){
    var latterElement=element.split('');
    latterElement[0]=latterElement[0].toUpperCase();
    return latterElement.join("")
    }).join(" ");
}

console.log(firsLaterUpperCase("frase de prueba para first latter")); 




///////ejercicio 4//////
/////avanza 7 letras en el abecedario////

function encriptar(encriptWord){
    //var abc =[a,b,c,d,e,f,g,h,i,j,k,l,m,n,ñ,o,p,q,r,s,t,u,v,w,x,y,z];
    //var ABC =[A,B,C,D,E,F,G,H,I,J,K,L,M,N,Ñ,O,P,Q,R,S,T,U,V,W,X,Y,Z];
    return encriptWord.split(" ").map(function(element){
        return element;
    });
}




console.log(encriptar("hola adios"));



