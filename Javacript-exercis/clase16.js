//explicit type casting
const string = "42"
const interger = parseInt(string)
console.log(interger)
console.log(typeof interger)

const stringDecimal = "3x14"
const float = parseFloat(stringDecimal)
console.log(float)
console.log(typeof float)

const binary = "1010"
const decimal = parseInt(binary, 2)
console.log(decimal)
console.log(typeof decimal)

//implicit type casting

const sum = "5" + 3
console.log(sum, typeof sum)

const sumWithBoolean = "3" + true
console.log(sumWithBoolean, typeof sumWithBoolean)

const sumWithNumber = 2 + true
console.log(sumWithNumber, typeof sumWithNumber)

const stringValue = "10"
const numberValue = 10
const booleanValue = true
console.log("---------------------------")
console.log(stringValue + stringValue) // CONCATENAR
console.log(stringValue + numberValue) // CONCATENAR
console.log(stringValue + booleanValue) // CONCATENAR
console.log(numberValue + stringValue) // CONCATENAR
console.log(numberValue + numberValue)// SUMA
console.log(numberValue + booleanValue)// SUMA
console.log(booleanValue + stringValue) // CONCATENAR
console.log(booleanValue + numberValue)// SUMA
console.log(booleanValue + booleanValue)// SUMA