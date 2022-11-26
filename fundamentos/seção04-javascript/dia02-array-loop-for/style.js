// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let soma = 0;

// for (index = 0; index < numbers.length; index += 1) {
//     soma = soma + numbers[index];
// }
// console.log(soma);

// let media = soma / numbers.length;

// console.log(media)

// if (media >= 20){
//     console.log('Valor maior que 20');
//  } else {
//         console.log('Valor menor que 20');
//    } 

   
//    let highterNumber = numbers[0];
   
//    for (let maior = 1; maior < numbers.length; maior += 1) {
//     if (numbers[maior] > highterNumber) {
//         highterNumber = numbers[maior]
//     }


//    }
// console.log(highterNumber);

// let quantidadeImpar = 0;

// for (let index = 0; index < numbers.length; index += 1){
//     if (numbers[index] % 2 !== 0){
//         quantidadeImpar += 1;
//     }
// }
// if (quantidadeImpar === 0) {
//     console.log('nenhum valor impar encontrado') 
// }else {
//             console.log(quantidadeImpar);
//     }

// let smallerNumber = numbers[0];

// for (let index = 1; index < numbers.length; index += 1) {
//     if (numbers[index] < smallerNumber){
//         smallerNumber = numbers[index];
//     }
// }
// console.log(smallerNumber);

let numbers1A25 = [];

for (let index = 1; index <= 25; index += 1){
    numbers1A25.push(index);
}
console.log(numbers1A25);
