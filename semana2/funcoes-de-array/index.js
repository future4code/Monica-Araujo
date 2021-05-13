'EXERCICIOS DE INTERPRETAÇÃO'

'1'
'A-)'
/*
Vai ser impresso no console um array contendo as informações
dos três usuários
*/

'2'
'A-)'
/*
Vai ser impresso em um array apenas os nomes dos usuários, sem
o apelido.
*/

'3'
'A-)'
/*
Vai ser impresso um array com os nomes e os apelidos que sejam 
diferentes de "Chijo"
*/

'EXERCICIOS DE ESCRITA DE CÓDIGO'

'1'
const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
]

'A-)'
const arrayNomes = pets.map((item, index, array) => {
    return item.nome
})

console.log(arrayNomes)

'B-)'
const arraySalsicha = pets.filter((item, index, array) => {
    return item.raca === "Salsicha"
})

console.log(arraySalsicha)

'C-)'
const descontoPoodle = pets.filter((item, index, array) => {
    return item.raca === "Poodle"
}).map((pets, index, array) => {
    return console.log (`Você ganhou um cupom de desconto para tosar
o/a ${pets.nome}`)
})


'2'
const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]

'A-)'
const arrayNomes = produtos.map((item, index, array) => {
    return item.nome
})
console.log(arrayNomes)

'B-)'
const arrayNomePrecoDesconto = produtos.map((produto, index, array) => {
    let desconto = produto.preco * 0.05
    produto.preco = produto.preco - desconto

    return {
        nome: produto.nome,
        preco: produto.preco.toFixed(2)
    };
})
console.log(arrayNomePrecoDesconto)


'C-)'
const arrayBebidas = produtos.filter((item, index, array) => {
    return item.categoria === "Bebidas"
})
console.log(arrayBebidas)

'D-)'
const arrayYpe = produtos.filter((item, index, array) => {
    return item.nome.includes('Ypê') 
    })
console.log(arrayYpe)

'E-)'
const arrayFraseYpe = produtos.filter ((item, index, array) => {
    return item.nome.includes('Ypê')
}).map((item) => {
    return `Compre ${item.nome} por ${item.preco}`
})
console.log(arrayFraseYpe)