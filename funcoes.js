// FUNCÇÕES JAVASCRIPT

const nota1 = 7
const nota2 = 8

function soma ( nota1, nota2 ) {
  return nota1 + nota2
}

function media() {
  console.log('media')
}

function funcaoSemParametro () {
  console.log( 7 + 8 )
  console.log( 2 + 8 )
}

console.log( soma( nota1, nota2 ) )
console.log( soma( 10, 475 ) )

media()
funcaoSemParametro()