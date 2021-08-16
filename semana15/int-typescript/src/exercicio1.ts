// a-) Não dá certo porque não podemos atribuir um valor a uma variável string, precisa,
//necessáriamente, ser uma string.

// b-) Para isso, podemos colocar uma | entre as tipagens, assim vai aceitar tanto string 
// como um número

// c-) e d-)
type pessoa = {nome: string, idade: number, corFavorita: string}

enum COR_ARCO_IRIS {
    AZUL = "azul",
    AMARELO = "amarelo",
    VERMELHO = "vermelho",
    LARANJA = "laranja",
    VERDE = "verde", 
    VIOLETA = "violeta",
    ANIL = "anil",
}

const felipe: pessoa = {
    nome: "Felipe",
    idade: 27,
    corFavorita: COR_ARCO_IRIS.AZUL
}

const bruno: pessoa = {
    nome: "Bruno", 
    idade: 25,
    corFavorita: COR_ARCO_IRIS.AZUL
}

const monica: pessoa = {
    nome: "Monica", 
    idade: 20,
    corFavorita: COR_ARCO_IRIS.VIOLETA
}
