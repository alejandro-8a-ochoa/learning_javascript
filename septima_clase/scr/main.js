

/*var datos={
    'nombre':'Alejandro',
    'aPaterno':'Hernandez',
    'aMaterno':'Ochoa',
    'fechaNacimiento':'1994-03-22',
    'genero':'Hombre',
    getCurp: function(){
        return `${this.aPaterno.slice(0,2)}${this.aMaterno.slice(0,1)}`;
    }
    }

var hola=datos.getCurp();
console.log(hola);


function Person (nombre,apellidoP,apellidoM,nacimiento,sexo){
    this.name=nombre,
    this.apellidoP=apellidoP,
    this.apellidoM=apellidoM,
    this.fechaNacimiento=nacimiento,
    this.genero=sexo,
    this.getShortName=function(){
        return this.name.slice(0,2);
    }
}




var ale= new ('alejandro','hernandez','ochoa','1994-03-22','hombre');
console.log(ale);*/


var divs=[{
    'height': '150px',
    'width': '30px',
    'backgroundColor':'peru'
},
{
    'height': '200px',
    'width': '70px',
    'backgroundColor':'red'
},
{
    'height': '180px',
    'width': '300px',
    'backgroundColor':'blue'
},
{
    'height': '10px',
    'width': '350px',
    'backgroundColor':'black'
},{
    'height': '250px',
    'width': '150px',
    'backgroundColor':'green'
}]

divs.forEach((element,index) => {
    document.getElementsByTagName('div')[index].style.height=element.height;
    document.getElementsByTagName('div')[index].style.width=element.width;
    document.getElementsByTagName('div')[index].style.backgroundColor=element.backgroundColor;
    
});

console.log(document.getElementsByTagName('div'));