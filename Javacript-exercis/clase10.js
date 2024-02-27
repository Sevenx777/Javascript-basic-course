//Strings primitivos
const stringPrimitive = "soy un string primitivo"
console.log(typeof stringPrimitive)

const stringPrimitiveToo = String("soy un string primitivo tambien")
console.log(typeof stringPrimitiveToo)

//Strings objeto
const stringObject = new String ("soy un string objeto")
console.log(typeof stringObject)

//acceder a caracteres

const salute = "Hola. ¿como estas?"

console.log(salute[0])//posicion de el contenido de salute
console.log(salute.charAt(1))//posicon de el contenido salute
console.log(salute.indexOf("o"))//describe la posicion de la letra
console.log(salute.indexOf("como"))//busca la posicion de donde comienza "como" en este caso la ("c")
console.log(salute.indexOf("Como"))//como no hay ninguna coincidencia da -1 dando entendetr queno esta almacenado este valor se presecisa exactitud
console.log(salute.lastIndexOf("o"))//busca la posicion final de la letra en estes caso la ("o")
console.log(salute.slice(3, 5))//muestra de la posicion 3 a la 5 en este caso (a.)
console.log(salute.length)//muestra el numero de caracteres total
console.log(salute.toLocaleUpperCase())//muestra el contenido de salute en mayusculas
console.log(salute.toLocaleLowerCase())//muestra el contenido de salute en minusculas

const saluteSplit = salute.split(" ")
console.log(saluteSplit)//mestra la posicion unida y la divide en el numero en el que lo partio es este caso (3)
console.log(saluteSplit[2])// muestra la posicion dividida en este caso ("estas?")

const saluteWhitSpaces = " Hola Mundo "
const saluteWhitoutSpaces = saluteWhitSpaces.trim()
console.log(saluteWhitoutSpaces)//remuve los espacios del contenido 

const saluteOriginal =  "Hola Diego"
const newSalute = saluteOriginal.replace("Diego", "Andres")
console.log(newSalute)