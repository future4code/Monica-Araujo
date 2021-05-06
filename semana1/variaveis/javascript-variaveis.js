/*
10
10,5
*/

/*
20,10,10
*/

/*
Esse programa calcula quanto um usuário recebe por hora. Ao inves das varíaveis
p e t, poderia colocar como horasTrabalhadasDia e recebePorDia, respectivamente.
Dessa forma ficaria mais facil de entender o que significa cada variável. 
*/



const nome = prompt ("Digite aqui o seu nome: ")
const idade = prompt ("Digite sua idade: ")

console.log (typeof nome)
console.log (typeof idade)


/*
O tipo de varíavel que foi mostrado é string, isso aconteceu porque 
sempre que usarmos o prompt ele entenderá que essa variável é string.
*/

const nome = prompt("Qual o seu nome? ")
const idade = Number(prompt("Qual a sua idade? "))


console.log (typeof nome)
console.log(typeof idade)

console.log ("Olá", nome, "você tem", idade, "anos")

/*
Dessa forma, a variável nome ficou em forma de string e a variável idade
ficou em forma de number.
*/

const primeira = "Você tem gatos?"
const segunda = "Você já tomou banho hoje? "
let terceira = "Voce gosta de comer chocolate?"

const gato = prompt(primeira)
const banho = prompt(segunda)
const chocolate = prompt(segunda)

console.log (primeira, gato)
console.log (segunda, banho)
console.log (terceira, chocolate)



let a = 10
let b = 25
let c = 10

a = b
b = c
console.log(a,b)