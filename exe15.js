// 15. Escreva um programa que gera e imprime os primeiros 10 números da sequência de
// Fibonacci utilizando um loop for.

let penultimo = 0;
let ultimo = 1;
let atual = 0;

console.log(penultimo);
console.log(ultimo);

for (let i = 1; i <= 10 ; i++) {
    atual = penultimo + ultimo;
    penultimo = ultimo;
    ultimo = atual;

    console.log(atual);
}