
var number_Array = [1,2,3,4,5];

var new_number_Array = number_Array.map(function(element,index,array){
    return element * 3;
});

 console.log(new_number_Array);


var array_module_two = new_number_Array.filter(function(element,index,array){
    return element % 2 === 0;
    //return index % 2 === 0;
});

 console.log(array_module_two);




 var koders_array = [
    {
      'nombre': 'David',
      'edad': 22,
      'genero': 'M',
      'hobbies': [
        'Fotografia',
        'Viajar'
      ]
    },
    {
      'nombre': 'Jorge',
      'edad': 23,
      'genero': 'M',
      'hobbies': [
        'Videojuegos',
        'Lectura',
        'Dibujar'
      ]
    },
    {
      'nombre': 'Erick',
      'edad': 25,
      'genero': 'M',
      'hobbies': [
        'Caligrafia',
        'Videojuegos'
      ]
    },
    {
      'nombre': 'Diana',
      'edad': 27,
      'genero': 'F',
      'hobbies': [
        'Hardware',
        'Videojuegos'
      ]
    },
    {
      'nombre': 'Rodo',
      'edad': 32,
      'genero': 'M',
      'hobbies': [
        'Musica',
        'Programacion'
      ]
    }
  ]





// var koders = koders_array.map(element=> {
//     var hobbie=(element.hobbies).join(", ");
//     console.log(`Hola  soy ${element.nombre} y mis hobbies son ${hobbie}`);
//     return [element.nombre,hobbie]
// });


var video_koder=koders_array.filter(function(element){
    var filtrer_element = element.hobbies.map(function(element,index){
      console.log(element[index].hobbies);
      return element[index].hobbies === "Videojuegos";
    })
    console.log(filtrer_element); 
});

console.log(koders_array);