// a-) Não dá certo porque não podemos atribuir um valor a uma variável string, precisa,
//necessáriamente, ser uma string.
var COR_ARCO_IRIS;
(function (COR_ARCO_IRIS) {
    COR_ARCO_IRIS["AZUL"] = "azul";
    COR_ARCO_IRIS["AMARELO"] = "amarelo";
    COR_ARCO_IRIS["VERMELHO"] = "vermelho";
    COR_ARCO_IRIS["LARANJA"] = "laranja";
    COR_ARCO_IRIS["VERDE"] = "verde";
    COR_ARCO_IRIS["VIOLETA"] = "violeta";
    COR_ARCO_IRIS["ANIL"] = "anil";
})(COR_ARCO_IRIS || (COR_ARCO_IRIS = {}));
var felipe = {
    nome: "Felipe",
    idade: 27,
    corFavorita: COR_ARCO_IRIS.AZUL
};
var bruno = {
    nome: "Bruno",
    idade: 25,
    corFavorita: COR_ARCO_IRIS.AZUL
};
var monica = {
    nome: "Monica",
    idade: 20,
    corFavorita: COR_ARCO_IRIS.VIOLETA
};

console.log('okokok')