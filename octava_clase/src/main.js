var carro=[
    ['Ford','ka','2010','automatico','12,000'],
    ['Nissan','Tsuru','1994','estandar','8,000'],
    ['Chevrolet','Camaro','2019','estandar','500,000']
];

function Auto ( marca, modelo, year, transmision, precio){
    this.marca = marca;
    this.modelo = modelo;
    this.year = year;
    this.transmision = transmision;
    this.precio = precio;

    this.getModelo=function(){
        return `el modelo del carro es: ${this.marca} ${this.modelo} ${this.year}`
    };


    this.getPrecio = function(){
        return `el precio del ${this.modelo} es de ${this.precio}`
    };

    this.getTransmision=function(){
        return `la transmision del ${this.modelo} es  ${this.transmision}`
    };
}

for(var x=0;x<carro.length;x++){
    var auto = new Auto (carro[x][0],carro[x][1],carro[x][2],carro[x][3],carro[x][4]);

   console.log( auto.getPrecio() ); 
   console.log( auto.getTransmision() ); 
   console.log( auto.getModelo() ); 
}

/* var auto = new Auto(carro[0][0],carro[0][1],carro[0][2],carro[0][3],carro[0][4]);
 */
/* 
auto.getPrecio();
auto.getTransmision();
auto.getModelo(); */