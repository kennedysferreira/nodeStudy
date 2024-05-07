console.log(this === global)
console.log(this === module)

console.log(this === module.exports)// o this fora de um funçao aponta para o module.exports
console.log(this === exports)

function logThis(){
    console.log(this === exports)
    console.log(this === module.exports)
    console.log(this === global) //uma anuancia importante e que dentro de uma funçao o this nao aponta para module.exports e sim para global
}
logThis()