// let player = {
//     name: 'Marta',
//     lastName: 'Silva',
//     age: 34,
//     medals: { golden: 2, silver: 3 }
//     best: [2006, 2007, 2008, 2009, 2010, 2018];
// };
// console.log('A jogadora '  + player.name + ' ' + player.lastName + ' tem ' + player.age + ' anos de idade');
// console.log('A jogadora ' + player['namer'] + ' ' + player['lastName'] + ' foi eleita a melhor do mundo por ' + player['best'.length]);

// let cars = ['saab', 'volvo', 'bmw'];

// for (let index in cars) {
//     console.log(index, cars[index]);
// // }
// let names = {
//     person1: 'João',
//     person2: 'Maria',
//     person3: 'Jorge',
//   };

//   for (let key in names){
//     console.log('Olá ' + names[key]);
//   };

// let car = {
//     model: 'A3 Sedan',
//     manufacturer: 'Audi',
//     year: 2020
//   };

//   for (let key in car){
//     console.log(key, car[key]);
//   }

// function sum(a, b, c){
//     if (a > b && c){
//         return a + ' é maior que ' + b + ' e ' + c;
//     } else if (b > a && c){
//         return b + ' é maior que ' + a + ' e ' + c;
//     } else {
//         return c + ' é maior que todos';
//     }
// }
// function subtraction(a, b){
//     return a - b;
// }
// function multiplication(a, b){
//     return a * b;
// }
// function division(a, b){
//     return a / b;
// }
// function module(a, b){
//     return a % b;
// }

// console.log(sum(70, 51, 50));
// console.log(subtraction(10, 5));
// console.log(multiplication(5, 10));
// console.log(division(10, 10));
// console.log(module(20, 1));

function trueOrFalse (a, b){
    if (a == 2){
        return true;
    } else {
        return false;
    }
}
console.log(trueOrFalse(1, 2));