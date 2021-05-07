
/*
EXERCICIO 1
a) Vai ser impresso no console os números 10 e 50, pois o rpograma realizou o cálculo
da varíavel 2x5 e 10x5.

b) Sem os dois console.log, nada apareceria no console. 

EXERCICIO 2
a) O programa vai dizer se há uma palavra cenoura na frase, se sim, retornará true, se não, retornará
false e, ainda, retonará a frase em letra minúscula. 

b)
i - true
ii - true
iii - true

*/

'EXERCICIO 1'
function imprimeInformaçõesSobreMim() {
    console.log('Eu sou a Mônica, tenho 19 anos, moro em Santa Bárbara dOeste e sou estudante')
}

imprimeInformaçõesSobreMim()


'b- '
function imprimeInfromaçõesPessoaisUsuario(nome, idade, cidade, profissão) {
    console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissão}`)
}

const nome = prompt('Insira aqui o seu nome: ')
const idade = Number(prompt('Insira aqui sua idade: '))
const cidade = prompt('Agora, insira aqui a cidade em que você mora: ')
const profissão = prompt('Por ultimo, infrome aqui sua profissão: ')

imprimeInfromaçõesPessoaisUsuario(nome, idade, cidade, profissão)

'2'
'a-'
function somaDeDoisNumeros(num1, num2){
    const soma = num1 + num2 //number
    return soma
}

const somaDosNumeros = somaDeDoisNumeros(3, 9)
console.log(somaDosNumeros)

'b-'
function maiorOuIgual (num1, num2){
    const primeiroNumeroÉMaiorOuIgual = num1 >= num2
    return primeiroNumeroÉMaiorOuIgual
}

const primeiroESegundoNumero = maiorOuIgual(8, 4)
console.log(primeiroESegundoNumero)

'c-'
function numeroÉPar (num){
    const numeroPar = num%2==0
    return numeroPar
}

const numeroPar = numeroÉPar(140468)
console.log(numeroPar)

'd'
function imperimeOlaMundo(frase) {
    console.log(`${frase}`)
}

const frase = "Olá mundo"
const fraseMinuscula = frase.toUpperCase()
const fraseTamanho = frase.length

console.log(fraseMinuscula)
console.log(fraseTamanho)

'3'
///SOMA
function calculaSoma(num1, num2){
    const soma = num1 + num2
    console.log(soma)
    return soma
}

const NumeroUm = Number(prompt('Digite um numero: '))
const NumeroDois = Number(prompt('Digite um segundo numero: '))
calculaSoma = NumeroUm + NumeroDois
console.log(calculaSoma)

///SUBTRAÇÃO 
function calculaSubtração(num1, num2){
    const subtração = num1 - num2
    console.log(subtração)
    return subtração
}

const NumeroUm = Number(prompt('Digite um numero: '))
const NumeroDois = Number(prompt('Digite outr numero: '))
calculaSubtração = NumeroUm - NumeroDois
console.log(calculaSubtração)

///MULTIPLICAÇÃO
function calculaMultiplicação(num1, num2){
    const multiplicação = num1*num2
    console.log(multiplicação)
    return multiplicação
}

const NumeroUm = Number(prompt('Digite um numero: '))
const NumeroDois = Number(prompt('Digite um outro numero: '))
calculaMultiplicação = NumeroUm*NumeroDois
console.log(calculaMultiplicação) 


///DIVISÃO
function calculaDivisão(num1, num2){
    const divisão = num1/num2
    console.log(divisão)
    return divisão
}

const NumeroUm = Number(prompt('Digite um numero: '))
const NumeroDois = Number(prompt('Digite um outro numero: '))
calculaDivisão = NumeroUm/NumeroDois
console.log(calculaDivisão) 