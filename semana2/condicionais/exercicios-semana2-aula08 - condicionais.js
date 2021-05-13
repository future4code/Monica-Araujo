'EXERCICIOS INTERPRETAÇÃO'
'1 a-)'
/*
O código vai testar se o número digitsdo pelo usuário é
divisível por 2.
*/

'b-)'
/*
Vai impimir no console "Passou no teste" se o número for 
divisível por 2, sendo assim, tendo resto da divisão igual a 0
*/

'c-)'
/*
A mensagem "Não passou no teste" será impressa se o número
digitado pelo usuário não for divisível por 2, no caso, não tendo
o resto da divisão igual a 0
*/

'2 a-)'
/*
O código serve para o usuário saber o valor das frutas que está comprando.
*/

'b-)'
/*
A mensagem impressa no console será: "O preço da fruta maçã é R$2.25"
*/

'c-)'
/*
Sem o break, o programa entenderá como sendo default e o preço
seria diferente, neste caso, 5 reais ao invés de 5.5
*/

'3 a-)'
/*
A primeira linha está édindo para o uruário insserir o primeiro
número e vai guarda-lo na variável numero
*/

'b-)'
/*
Se o usuário digitar o número 10, a mensagem será "Esse número
passou no teste". Se digitar o número -10 derá erro.
*/

'c-)'
/*
Haverá erro no console, isso ocorreu porque a variável 
mensagem está dentro de um bloco e fora deste bloco, o 
programa não consegue acessar essa variável.
*/

'EXERCICIOS DE ESCRITA'

'1'
const idade = Number(prompt('Qual é a sua idade?')) 

if (idade >= 18) {
    console.log('Você pode dirigir')
} else {
    console.log('Você não pode dirigir')
}

'2'
const turno = prompt('Digite aqui o turno do dia em que você está (M para matutino, V para vespertino e N para noturno) ')

if (turno === 'M') {
    console.log('Bom Dia!')
} else if (turno === 'V') {
    console.log('Boa Tarde!')
} else if (turno === 'N') {
    console.log('Boa Noite!')
} else {
    console.log('Digite apenas M, V ou N')
}

'3'
const turno = prompt('Digite aqui o turno do dia em que você está (M para matutino, V para vespertino e N para noturno) ')

switch(turno) {
    case "M":
        console.log('Bom Dia!')
        break
    case "V":
        console.log('Boa Tarde!')
        break
    case "N": 
        console.log('Boa Noite!')
        break
    default:
        console.log('Digite apenas M, V ou N')
}

'4'
const genero = prompt('Digite aqui o gênero do filme: ').toLowerCase()
const valorIngresso = Number(prompt('Digite aqui o valor máximo desejado do preço do ingresso: '))

if (genero === 'fantasia' && valorIngresso <= 15) {
    console.log('Bom filme!')
} else {
    console.log('Escolha outro filme :( ')
}
