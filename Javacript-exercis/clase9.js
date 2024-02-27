//como crear stings

const firts_option = 'simple'
const second_option = "simple"
const third_option = `simple`

//concatenaciones 

//1 concatenacion: (+)
const address = "Av 15a #13-29"
const  city = "Cucuta"
const completeaddress = "My complete address is " + address + " " + city
console.log(completeaddress)

//2 concateacion: (Template litearls) hay que tener en cuenta el caracter especial (``)
const name = "Andres"
const country = "Colombia"
const presentation = `Hola, soy ${name} de ${country}`
console.log(presentation)

//3 concatenacion: (join)
const firts_part = 'Me encanta '
const second_part = 'la gente de '
const third_part = 'España'
const thought = [firts_part, second_part, third_part]
console.log(thought.join('✨'))

//4 concatenacion:  concat()
const hobbie1 = 'leer'
const hobbie2 = 'correr'
const hobbie3 = 'estudiar'
const hobbies = 'Mis hobbies son: '.concat(hobbie1, ', ' , hobbie2, ', ' , hobbie3, '.')
console.log(hobbies)

//caracter de escape

//1 escape alternativo (')

const escapeAlternativa = "I'm Sotfware Engineer"

//2 barra invertida (\)
const barraInvertida = "I\'m Sotfware Engineer"

//3 tempalte literals

const escapeComillaInvertida = `I'm Sotfware Engineer`

console.log(escapeAlternativa, barraInvertida, escapeAlternativa)

//Stings largos
/*
    las rosas son rojas,
    las violetas son azules,
    caracter inesperado,
    en la linea 86,
*/

const poema = "las rosas son rojas,\n" + "las violetas son azules,\n" + "caracter inesperado,\n" + "en la linea 86,\n"
console.log(poema)

const poema2 ="las rosas son rojas,\n\las violetas son azules,\n\caracter inesperado,\n\en la linea 86,\n"
console.log(poema2)

const poema3 = `las rosas son rojas,
las violetas son azules,
caracter inesperado,
en la linea 86,`
console.log(poema3)

