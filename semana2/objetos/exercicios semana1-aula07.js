'EXERCÍCIOS DE INTERPRETAÇÃO'
'1 A-)'
/*
Matheus Nachtergaele
Virginia Cavendish
canal: Globo horario: 14h
*/

'2 A-)'
/*
nome: "Juca", idade: 3, raca: "SRD"

nome: "Juba"", idade: 3, raca: "SRD"

nome: "Jubo", idade: 3, raca: "SRD"
*/
'2 B-)'
/*
Esse três pontos é o spread, ele realiza uma cópia inteira
de um objeto para outro e muda ou adiciona, se quisermos, apenas
uma ou outra propriedade
*/
 
'3 A-)'
/*
false
undefined
*/
'3  B-)'
/*
false apareceu no console porque a opção "backender" está como
false no programa. Já o undefined apareceu proque a altura não
está definida no programa.
*/
/*
'EXERCICIOS DE ESCRITA'
'1 A-)'
const pessoa = {
    nome: "Mônica",
    apelidos: ["Mô", "Moni", "Nick"]
}
function funcao(pessoa){
    console.log('Eu sou', pessoa.nome, 'mas pode me chamar de:', pessoa.apelidos[0],',', pessoa.apelidos[1], 'ou', pessoa.apelidos[2])
}
funcao(pessoa)

'1 B-)'
const novaPessoa ={
    ...pessoa,
    apelidos: ['Moniquinha', 'Mona', 'Momo']
}
console.log(novaPessoa)
*/
    
/*
'2'
const pessoa = {
    nome: 'Mônica',
    idade: 20,
    profissao: 'Engenheira'
}

function minhaFuncao(pessoa){
    const array = []
    array.push(pessoa.nome, pessoa.nome.length, pessoa.idade, pessoa.profissao, pessoa.profissao.length)
    return array
}

console.log(minhaFuncao(pessoa))
*/

'3'
const carrinho = []
    const fruta = {
    nome: "Uva",
    disponibilidade: true,
    }
    const fruta2 ={
    nome: "Melancia",
    disponibilidade: true,
    }
    const fruta3 ={
    nome: "Melão",
    disponibilidade: true
    }

function colocarNoCarrinho(fruta){
    colocarNoCarrinho(fruta2)
    colocarNoCarrinho(fruta3)
    console.log(carrinho)
}

