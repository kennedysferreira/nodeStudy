require('./objetoGlobal')

console.log(minhaApp.saudacao())

minhaApp.nome = 'Eita'
console.log(minhaApp.nome)// quando o objeto criado no escopo global deve ser cuidado pois ele fica passivel de qualquer alteraçao
