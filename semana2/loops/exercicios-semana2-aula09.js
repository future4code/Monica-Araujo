'EXERCICIOS DE INTERPRETAÇÃO'
'1'
/*
o programa vai contar de 0, de um em um, até um número
que seja menor que cinco, então, neste caso, vai contar até
o 4. O resultado impresso no console será a soma destes
valores, no caso, 10.
*/

'2'
'a-)'
/*
Vai ser impresso no console os números que são maiores que 18,
então será impresso 19, 21, 23, 25, 27 e 30
*/

'b-)'
/*

*/

'3'
/*
Vai imprimir no console 4 linhas com 0, de forma crescente.
Sendo assim, na primeira linha terá um 0 e na ultima linha
terá quatro 0
*/

'EXERCICIOS DE ESCRITA'

'1'
let array = []
const bichinhos = Number(prompt('Quantos bichinhos de estimação você tem? '))
if (bichinhos === 0) {
    console.log('Que pena! Você pode adotar um pet!')
} else if(bichinhos > 0){
    for (i=0; bichinhos > i; i++){
        let nomeBichinhos = prompt('Qual o nome do seu bichinho?')
        array.push(nomeBichinhos)
         
    }
}
console.log(array)

//
'2'
arrayOriginal = [10, 15, 20, 41, 30, 40, 51, 50, 60, 70]

'a'
for (let numero of arrayOriginal) {
    console.log(numero)
}


'b'
function imprimeDivisao () {
    for (let i = 0; i < arrayOriginal.length; i++){
        let divisao = (arrayOriginal[i]/10)
    console.log(divisao)
    }

}
imprimeDivisao(arrayOriginal)

'c'
arrayPar = []
let imprimeNumerosPares = () => {
    for(let arrayPar of arrayOriginal) {
        
        if (arrayPar % 2 === 0){
            console.log(arrayPar)
        }
    }
}
imprimeNumerosPares(arrayPar)
