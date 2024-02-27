//1 tipo entero y decimal
const entero = 77
const decimal = 32.4
console.log(typeof entero , typeof decimal)

//2 NOTACION CIENTIFICA

const cientifico = 5e3

//3 infinitos y NaN

const infinito = Infinity
const noEsUnNumero = NaN

// operaciones aritmeticas

//1. suma, resta, multiplicacion, division.

const suma = 3 + 4
const resta = 4 - 3
const multiplicacion = 3 * 7
const division = 9 / 3

//2. modulo y exponeciacion
const modulo = 15 % 8
const exponeciacion = 3 ** 3


// precision
const resultado = 0.1 + 0.2
console.log(resultado)
console.log(resultado.toFixed(1))
console.log(resultado === 0.3)

//operaciones avanzadas

const raizCuadradra = Math.sqrt(16)
const valorAbsoluto = Math.abs(-111)
const aleatorio = Math.random()
console.log(raizCuadradra)
console.log(valorAbsoluto)
console.log(aleatorio )