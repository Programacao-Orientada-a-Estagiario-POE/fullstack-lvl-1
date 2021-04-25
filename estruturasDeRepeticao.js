// Estruturas de repetição ou Loop

// console.log(1)
// console.log(2)
// console.log(3)


// for (let index = 1; index <= 10; index++) {
//   console.log(index)
// }

// let index = 11

// while ( index <= 10 ) {
//   console.log(index)
//   index++
// }

// let index2 = 11

// do {
//   console.log(index2)
//   index2++
// } while ( index2 <= 10 );

const listaCompras = ['tomate', 'carro', 'pipoca']
console.log(listaCompras[0])
console.log(listaCompras[1])
console.log(listaCompras[2])

for (let index = 0; index < listaCompras.length; index++) {
  console.log(listaCompras[index])
}


listaCompras.forEach((item, index) => {
  console.log(item)
  console.log(index)
})

listaCompras.forEach(function (item, index, array) {
  console.log(item)
  console.log(index)
  console.log(array)
})