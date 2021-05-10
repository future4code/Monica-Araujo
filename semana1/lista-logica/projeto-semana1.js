// Exemplos

// Exercício 0A

function soma(num1, num2) {
   // implemente sua lógica aqui
   return num1 + num2
}

// Exercício 0B

function imprimeMensagem() {
   // implemente sua lógica aqui
   const mensagem = prompt('Digite uma mensagem!')

   console.log(mensagem)
}

// Exercícios

//Exercício 1

function calculaAreaRetangulo() {
   // implemente sua lógica aqui
   const altura = Number(prompt('Digite aqui o valor da altura'))
   const largura = Number(prompt('Digite aqui o valor da largura: '))
 
   console.log(altura*largura)
}

//Exercício 2

function imprimeIdade() {
   // implemente sua lógica aqui
   const anoAtual = Number(prompt('Digite o ano em que estamos: '))
   const anoDeNascimento = Number(prompt('Digite o ano em que você nasceu: '))
 
   console.log(anoAtual - anoDeNascimento)

}

//Exercício 3

function calculaIMC(peso, altura) {
   // implemente sua lógica aqui
   return peso/(altura*altura)
}

//Exercício 4

function imprimeInformacoesUsuario() {
   // implemente sua lógica aqui
   const nome = prompt('Digite o seu nome: ')
   const idade = Number(prompt('Digite aqui sua idade: '))
   const email = prompt('Digite seu email: ')
 
   console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)

}

//Exercício 5

function imprimeTresCoresFavoritas() {
   // implemente sua lógica aqui
   const arrayDeCores=[];
   const cor1= prompt('Insira aqui uma cor que você goste: ');
   const cor2= prompt('Agoras insira uma segunda cor: ');
   const cor3= prompt('Por ultimo, insira uma terceira cor que vocêd também goste: ');
   arrayDeCores.push(cor1);
   arrayDeCores.push(cor2);
   arrayDeCores.push(cor3);

   console.log(arrayDeCores)
}


//Exercício 6

function retornaStringEmMaiuscula(string) {
   // implemente sua lógica aqui
   
   return string.toUpperCase()
}

//Exercício 7

function calculaIngressosEspetaculo(custo, valorIngresso) {
   // implemente sua lógica aqui
   return custo/valorIngresso
}

// Exercício 8

function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  const mesmoTamanho = string1.length === string2.length
  return mesmoTamanho

}

// Exercício 9

function retornaPrimeiroElemento(array) {
   // implemente sua lógica aqui
   let primeiro = array[0]
   return primeiro
}

// Exercício 10

function retornaUltimoElemento(array) {
   // implemente sua lógica aqui
   let ultimo = array[array.length - 1]
   return ultimo
}

//Exercício 11

function trocaPrimeiroEUltimo(array) {
   // implemente sua lógica aqui
   const primeiro = retornaPrimeiroElemento(array)
   const ultimo = retornaUltimoElemento(array)

   array[0]= ultimo
   array[array.length - 1]=primeiro

   return array

}

// Exercício 12

function checaIgualdadeDesconsiderandoCase(string1, string2) {
   // implemente sua lógica aqui
   const igualdade = string1.toUpperCase() === string2.toUpperCase()
   return igualdade
}

// Exercício 13

function checaRenovacaoRG() {
   // implemente sua lógica aqu
   const anoAtual = Number(prompt('Digite o ano atual: '))
   const anoNascimento = Number(prompt('Digite o ano de seu nascimento: '))
   const anoDeEmissao = Number(prompt('Digite o ano de emissão do seu documento: '))

   const idade = anoAtual - anoNascimento
   const tempoCarteira = anoAtual - anoDeEmissao

   const cond1 = idade <=20 && tempoCarteira >=5
   const cond2 = idade >20 && idade <= 50 && tempoCarteira >=10
   const cond3 = idade > 50 && tempoCarteira >=15

   console.log(cond1 || cond2 || cond3)

}

// Exercício 14

function checaAnoBissexto(ano) {
   // implemente sua lógica aqui
   const cond1 = ano % 400 === 0
   const cond2 = (ano % 4 === 0) && (ano % 100 !== 0)
   return cond1 || cond2 
}

// Exercício 15

function checaValidadeInscricaoLabenu() {
   // implemente sua lógica aqui
   const maiorDeIdade = prompt('Você tem mais de 18 anos? ')
   const ensinoMedio = prompt('Você possui ensino médio completo? ')
   const disponibilidade = prompt('Você possui disponibilidade nos horários do curso? ')

   console.log(maiorDeIdade === "sim" && ensinoMedio === "sim" && disponibilidade === "sim")

}
