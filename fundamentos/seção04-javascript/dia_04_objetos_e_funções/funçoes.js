// function verificacao(word){
//     for (index in word){
//         if (word[index] != word[(word.lenght - 1) - index]){
//             return false;
//         } else {
//             return true;
//         }
//     }
// }
// console.log(verificacao('arara'));

// function verificaPalindrome(string) {
//     let reverse = string.split('').reverse().join('');
//     if (reverse === string){
//         return true;
//     } else {
//         return false;
//     }
//     }

// console.log(verificaPalindrome('arara'));

function indiceMaior(numeros){
    let numeroMaior1 = 0;
    for (index in numeros) {
        if (numeros[numeroMaior1] < numeros[index])
        numeroMaior1 = index;
    }
    return numeroMaior1;
}
console.log(indiceMaior([2, 3, 6, 7, 10, 1]));
