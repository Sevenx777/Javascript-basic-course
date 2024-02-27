//tipo de dato primitvo inmutable
let numero = 18
numero = numero + 10
console.log(numero)

let isTrue = true
isTrue = false
console.log(isTrue)

// Tipo de dato primitivo - Mutable

let usuario = { nombre: "Pepito", edad: 15 }
usuario.edad = 20
console.log(usuario)

let frutas = ["manzana", "pera"]
frutas[0] = "sandia"
console.log(frutas)

function cambiarNombre (objeto) {
    objeto.nombre = "Nuevo nombre"
}

let persona = { nombre: "Antonio" }
cambiarNombre(persona)
console.log(persona)