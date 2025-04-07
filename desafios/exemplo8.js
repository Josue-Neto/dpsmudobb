/*O método slice() é usado para retornar uma cópia superficial de uma parte de um array em um novo array. Ele não modifica o array ooriginal. O método slice() pode receber dois argumentos: o índice de início (inclusivo) e o índice de fim (exclusivo).
O índice de início é 1 (inclusivo), então começamos em "banana".
O índice de fim é 3 (exclusivo), então paramos antes de "uva".
*/

let frutas = ["maçã", "banana", "laranja", "uva", "manga"];//inicia a exclusão antes da posição 1 
let algumasFrutas = frutas.slice(1, 3); // e finaliza antes da 3 posição, ou seja, o fatiamento ficará entre a primeira e terceira posição 

console.log(frutas); // ["maçã", "banana", "laranja", "uva", "manga"] 
console.log(algumasFrutas); // ["banana", "laranja"] 

