// funciones puras e impuras

// side effects
// 1. modificar variables globales
// 2. modificar parametros
// 3. Solicitudes HTTP.
// 4. Impresiones de mensajes en pantalla o consola.
// 5. Manipulación del DOM (Document Obect Model).
// 6. Obtener la hora actual.

// Función pura
function sumar(a, b) {
    return a + b;
}

function square(x){
    return x * x
}

function addTen(y){
    return y + 10
}

const number = 5

const finalResult = addTen(square(number))
console.log(finalResult)


// Función impura
let resultado = 0;
function sumarConEfectoSecundario(a, b) {
    resultado = a + b;
}
  
console.log(sumar(2, 3)); // Resultado: 5
  
sumarConEfectoSecundario(2, 3);
console.log(resultado); // Resultado: 5



