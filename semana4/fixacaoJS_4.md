~~~
function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
    let cont = 0;
  for (let i = 0; i < arrayDeNumeros.length; i++) {
    if(arrayDeNumeros [i] === numeroEscolhido)
      contador++
    }if (contador > 0) {
      return `O n�mero ${numeroEscolhido} aparece ${contador}x`
      }else {
        return "N�mero n�o encontrado"
      }
}
~~~