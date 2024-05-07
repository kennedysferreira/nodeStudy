// E esta e uma forma de importar um modulo de node para ser usado no modulo que for necessario.

const moduloA = require('./moduloA')

console.log(moduloA.ola)
console.log(moduloA.bemVindo)
console.log(moduloA.ateLogo)
console.log(moduloA)

const moduloB = require('./moduloB')

console.log(moduloB.bomDia)
console.log(moduloB.boaNoite())
console.log(moduloB)



