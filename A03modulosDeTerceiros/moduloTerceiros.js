/*O npm(node pacage maneger), ele e responsavel por baixar bibliotecas de terceiros, para isso basta ir em termina
e colocar o codigo 'npm i 'biblioteca''*/
//Apasta lodash foi instalada a partir do 'npm'

const _ = require('lodash')// buscando um arquivo a partir de uma biblioteca de terceiro
setInterval(() => console.log(_.random(1, 1000)), 2000)