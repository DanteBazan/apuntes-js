// ==> Ejemplo setTimeOut

// function saludar() {
//   console.log("Hola");
// }

// setTimeout(saludar, 2000);

// ==> Ejemplo SetInteval

// function contar() {
//   console.log("contando");
// }

// let intervalId = setInterval(contar, 1000);
// clearInterval(intervalId);

// llamaremos clearinterval en alguna parte del codigo cuando queramos que se deje de ejecutar el intervalo.

// setInterval lo que hace es ejecutar la funcion que pasamos como parametro ya se una funcion previamente creada o una funcion anonima dentro del setInterval, lo que pasa es que tenemos que asignar el setInterval a una variable porque en algun momento vamos a necesitar frenar el intervalo y para eso necesitamos utilizar el clearInterval(y aca dentro el nombre de la variable a la que le asignamos el intervalo{en este caso seria intervalId}). Sino siempre tendriamos un bucle infinito.

// EJERCICIO PRACTICO DE LA CLASE.

// setTimeout

const saludar = () => {
  console.log("Feliz Cumple Yuki!");
};

setTimeout(saludar, 2000);
