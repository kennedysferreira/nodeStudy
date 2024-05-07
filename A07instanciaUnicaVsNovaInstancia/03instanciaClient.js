const contadorA = require('./01instanciaUnica')
const contadorB = require('./01instanciaUnica')

const contadorC = require('./02instanciaNova')()// neste caso retorna uma funçao, os () servem para chamar o objeto que esta nesta funcao
const contadorD = require('./02instanciaNova')()

contadorA.inc()
contadorA.inc()
console.log(contadorB.valor)/*como o node faz cache quando os valores foram incrementados a patir do contadorA e contadorB, quando foi chamado
o console.log(contadorB.valor) o valor ja tinha recebido o incremento das duas funçoes acima*/
contadorC.inc()
contadorC.inc()
console.log(contadorD.valor)/*neste caso como a funçao factory retorna um novo objeto, nao tem o problema com o node fazer cache pois serao 
idependentes na sua chamada*/
