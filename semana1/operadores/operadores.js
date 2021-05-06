/*
1.
false
false
false
string
*/

/*
2.
Os numeros estão em forma de string, quando for realziar a 
soma não dará certo por esse motivo.
*/

/*
3. 
Deverá fazer Number(pompt())) em let primeiroNumero
ou Number(primeiroNumero) em const soma
*/

'1'
const idade = Number(prompt('Insira aqui a sua idade: '))
const idadeAmigo = Number(prompt('Insira aqui a idade de seu amigo: '))

console.log('Sua idade é maior do que a do seu amigo?', idade > idadeAmigo)


'2'
const numPar = Number(prompt('Insira aqui um número par: '))

console.log('O resto da divisão é: ', numPar % 2 )

/*
Sim, há um padrão. Em todo e qualquer número par o resto da
divisão por 2 será sempre 0. 
*/

/*
Se o usuário inserir um número ímpar haverá resto da divisão,
o resto da divisão será diferente de 0
*/

'3'
const idade = Number(prompt('Insira aqui sua idade: '))

const idadeMeses = idade*12
console.log('A sua idade em meses é: ', idadeMeses)

const idadeDias = idade*365
console.log('A sua idade em dias é: ', idadeDias)

const idadeHoras = idade*24*365
console.log('A sua idade em hroas é: ', idadeHoras)

'4'
let primeiroNumero = Number(prompt('Insra aqui um numero: '))
let segundoNumero = Number(prompt('Insira aqui um segundo número: '))

console.log('O primeiro número é mior que o segundo? ', primeiroNumero > segundoNumero)

console.log('O primeiro número é igual ao segundo?', primeiroNumero === segundoNumero)

console.log('O primeiro número é divisível pelo segundo?', primeiroNumero%segundoNumero === 0)

console.log('O segundo número é divisível pelo primeiro?', segundoNumero%primeiroNumero === 0)