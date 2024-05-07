const anonimo = process.argv.indexOf('-a') !== -1

const os = require('os');

if(anonimo) {
  process.stdout.write('fala anonimo!\n')
  process.exit()
} else {
  process.stdout.write('Informe seu nome: ')
  process.stdin.on('data', data => {
    const nome = data.toString().replace(`${os.EOL}`, '')

    process.stdout.write(`Fala ${nome}!!${os.EOL}`)
    process.exit()
  })
}