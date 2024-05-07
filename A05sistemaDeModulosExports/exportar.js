console.log(module.exports === this)
console.log(module.exports === exports)

this.a = 1
exports.b = 2
module.exports.c = 3

exports = null
console.log(module.exports)/*msm atribuindo null na linha aciam ele apontou para os objetos que foram 
definidos anteriormente, isso acontece pq o exports e uma outra variavel que aponta para o msm objeto,
o que e rotornado é o module.exports.*/
// Se for tentar atribuir um valor ao exports nada sera retornado
// para atribuir um novo objeto para ser exportado tem que ser atribuido a module.exports
module.exports = { publico: true}