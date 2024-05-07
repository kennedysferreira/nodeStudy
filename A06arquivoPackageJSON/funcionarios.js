const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios') //e um client http, ele faz requisiçoes de informacoes de algo que esta remoto


axios.get(url).then(response => {
    let funcionarios = response.data
    const generoF = elemento => elemento.genero == 'F'
    const pais = elemento => elemento.pais == 'China' 
    const menorSalario = function(elemento, elementoAtual){
        return elemento.salario < elementoAtual.salario ? elemento : elementoAtual
    }
    const resultado = funcionarios.filter(generoF).filter(pais).reduce(menorSalario)

    console.log(resultado)
})
//Desafio, obter a mulher chinesa com o menor salario
 