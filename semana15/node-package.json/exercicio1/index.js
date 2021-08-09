/*A propriedade process.argv é nativa do Node, e consiste
em um array de strings que são os argumentos para que o
processo seja executado. Os dois primeiros argumentos são
fixos, A partir do process.argv[2], nós podemos atribuir valores*/

const nome = process.argv[2]
const idade = Number(process.argv[3])
const idadeSoma = idade + 7

console.log(`Olá, ${nome}! Você tem ${idade}. Em sete anos você terá ${idadeSoma}`)
