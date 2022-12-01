// let player = {
//     name: 'Marta',
//     lastName: 'Silva',
//     age: 34,
//     medals: { golden: 2, silver: 3 }
//     best: [2006, 2007, 2008, 2009, 2010, 2018];
// };
// console.log('A jogadora '  +let info = {
//   personagem: 'Margarida',
//   origem: 'Pato Donald',
//   nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
// }; player.name + ' ' + player.lastName + ' tem ' + player.age + ' anos de idade');
// // console.log('A jogadora ' + player['namer'] + ' ' + player['lastName'] + ' foi eleita a melhor do mundo por ' + player['best'.length]);

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
// // console.log(subtraction(10, 5));
// // console.log(multiplication(5, 10));
// // console.log(division(10, 10));
// // console.log(module(20, 1));

// function trueOrFalse (a, b){
//     if (a == 2){
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(trueOrFalse(1, 2));

// let info = {
//     personagem: 'Margarida',
//     origem: 'Pato Donald',
//     nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//   };
// //   console.log('Bem vinda, ' + info.personagem);
//   info.recorrente = 'sim';
// //   console.log(info);
// //   console.log(info['recorrente']);
// // for (let key in info){
// //     console.log(info[key]);
// // }
// // Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: ‘Tio Patinhas’, ‘Christmas on Bear Mountain, Dell’s Four Color Comics #178’, ‘O último MacPatinhas’, ‘Sim’. Então, imprima os valores de cada objeto juntos, de acordo com cada uma das chaves. Valor esperado no console:

// let info1 = {
//     personagem: 'Tio Patinhas',
//     origem: 'Christmas on Bear Mountain, Dells Four Color Comics',
//     nota: 'O último MacPatinhas',
// }
// console.log(info.personagem + ' e ' + info1.personagem);
// console.log(info.origem + ' e ' + info1.origem);
// console.log(info.nota + ' e ' + info1.nota);

let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };
  console.log('O livro favorito da ' + leitor.nome + ' ' + leitor.sobrenome +  ' se chama ' + leitor.livrosFavoritos[0].titulo + '"');

leitor.livrosFavoritos.push(
    {
              titulo: 'Harry Potter e o Prisioneiro de Azkaban',
              autor: 'JK Rowling',
              editor: 'Rocco',
    },
);

console.log('" ' + leitor.nome + ' tem ' + leitor.livrosFavoritos.length + ' livros favoritos "');