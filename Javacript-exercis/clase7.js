let cajaDeDiego = "Woody"


//Tipo de dato primitivo-inmutable
let numero = 23
numero = numero + 10
console.log(numero)

let v = true
v = false
console.log(v)

//Tipo de dato complejo-mutable
let user = {name:"Diego", age: 17}
user.age = 18
console.log(user)

let favorite = ["7", "black"]
favorite[1] = "morado" 
console.log(favorite)

function change_name (objecto){
    objecto.name = "new name"
}

let person = {name: "Andres"}
change_name(person)
console.log(person)