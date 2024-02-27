//null es un dato primitivo
const snoppy = null
console.log(snoppy)
console.log(typeof snoppy)

//undefined
let name 
console.log(name)

//symbol

const unico = Symbol("id")
const symbol1 = Symbol(1)
const symbol2 = Symbol(1)
console.log(symbol1 === symbol2)

const ID = Symbol("id")
let user = {}
user[ID] = "1234"   
console.log(user)

//BigInt
const bigNumber = 132213131n
console.log(bigNumber)

const nuemroParticulas = 1000000000000000000000000000n
console.log(nuemroParticulas)

