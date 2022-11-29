// let fatorial = 10;

// let resultado = 0;

// for (let index = 1; index < fatorial; index += 1) {
//     resultado = index * fatorial;
// }
// console.log(resultado);

// // let soma = 10!;

// let fatorial = 1;

// for (let index = 10; index > 0; index -= 1) {
//   fatorial *= index;
// }

// console.log(fatorial);

let word = 'tryber';
let resultado = '';


for (let index = 0; index < word.length; index += 1) {
resultado += word[word.length - 1 - index];
}
console.log(resultado)
