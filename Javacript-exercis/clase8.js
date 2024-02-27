//paso por valor
let x = 1
let y = "hello"
let z = null

let a = x
let b = y
let c = z
 console.log(x, y, z, a, b, c)

a = 2
b = "bye"
c = undefined
d = "diego"
e = "andres"
//paso por referencia

let fruit = ["apple"]
fruit.push("pear")
console.log(fruit)

let breads = ["🥐"]
let copy_breads = breads
breads.push("🥖")
console.log(breads, copy_breads)