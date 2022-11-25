let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;

for (index = 0; index < numbers.length; index += 1) {
    soma = soma + numbers[index];
}
console.log(soma);

let media = soma / numbers.length;

console.log(media)

if (media >= 20){
    console.log('Valor maior que 20');
 } else {
        console.log('Valor menor que 20');
   } 

   
   let highterNumber = numbers[0];
   
   for (let maior = 1; maior < numbers.length; maior += 1) {
    if (numbers[maior] > highterNumber) {
        highterNumber = numbers[maior]
    }


   }
console.log(highterNumber);