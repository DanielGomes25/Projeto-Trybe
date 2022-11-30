// // let fatorial = 10;

// // let resultado = 0;

// // for (let index = 1; index < fatorial; index += 1) {
// //     resultado = index * fatorial;
// // }
// // console.log(resultado);

// // // let soma = 10!;

// // let fatorial = 1;

// // for (let index = 10; index > 0; index -= 1) {
// //   fatorial *= index;
// // }

// // console.log(fatorial);

// let word = 'tryber';
// let resultado = '';


// for (let index = 0; index < word.length; index += 1) {
// resultado += word[word.length - 1 - index];
// }
// console.log(resultado)

let array = ['java', 'javascript', 'python', 'html', 'css'];

// let biggestWord = array[0];
// let smallestWord = array[0];

// for (let index = 0; index < array.length; index += 1){
//     if (array[index].length > biggestWord.length) {
//         biggestWord = array[index];
//     }
// }
// for (let index = 0; index < array.length; index += 1){
//     if (array[index].length < smallestWord.length){
//         smallestWord = array[index];
//     }
// }
// console.log(biggestWord);
// console.log(smallestWord);

// let biggestPrimeNumber = 0;

// for (let index = 2; index <= 50; index += 1){
//     if (index / 1 && index){
//         biggestPrimeNumber = index;
//     }
// }
// console.log(biggestPrimeNumber);

let biggestPrimeNumber = 0;

for (let currentNumber = 2; currentNumber <= 50; currentNumber += 1) {
  let isPrime = true;
  for (let currentDivisor = 2; currentDivisor < currentNumber; currentDivisor += 1) {
    if (currentNumber % currentDivisor === 0) {
      isPrime = false;
    }
  }
  if (isPrime) {
    biggestPrimeNumber = currentNumber;
  }
}

console.log(biggestPrimeNumber);