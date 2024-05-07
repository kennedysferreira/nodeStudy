/* para requerer um aquivo que esta fora da pasta a qual esta seu codigo ou dentro de outra pasta deve
usar os meios para sair da pasta ate a pasta que esta o arquivo usando o '../' e caso esteja dentro de
outra pasta saia ate que encontre a pasta e coloque o local o qual o arquivo se encontra, neste caso
saiu da pastaB - pastaA - A04sistemasDeModuloRequire, e entrou na pasta A02sistemaDemodulos buscando o 
arquivo moduloA.*/
const moduloA = require('../../../A02sistemasDeMolulos/moduloA')
console.log(moduloA.ola)

/*Pode ser importados com o padrao index.js, que retorna todos os aqruivo ja importados na pasta no qual
existe o arquivo index.js*/
const s = require('saudacao')
console.log(s.ola)
const c = require('./PastaC')
console.log(c.ola2)

/*Pode ser importados modulos que ja vem previamente instalados com o node.
const http = require('http')
http.createServer((req, res) => {
    res.write('bom dia!')
    res.end()
}).listen(8080)*/
