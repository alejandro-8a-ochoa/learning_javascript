/* var Carro = {
    'puertas' : 2,
    'color' : 'rojo' ,
    'marca' : 'Ford' ,
    'transmision' : 'estandar',
    'tipo' : 'sedan',
    'modelo' : 'ka',
    'potencia' : '500 hp',
    'precio' : "200000",
    'year' : '2001'
} */


/* function change(element){
    element.innerText='hola diana';
    element.style.backgroundColor='red';
    element.classList.toggle("mystyle");
}
 */

function cambioMX(element){ 
    document.getElementById('numberUS').value= element.value/19.03;

}

function cambioUS(element){ 
    document.getElementById('numberMX').value= element.value*19.03;

}
