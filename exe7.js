// 7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
// forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
// compradas, calcule e escreva o valor total da compra.

const prompt = require('prompt-sync')();

let amountOfApples = parseInt(prompt("Digite a quantidade de maçãs compradas: "));

if (amountOfApples >= 1 && amountOfApples < 12) {
    console.log(`Valor total: R$${(amountOfApples * 0.30).toFixed(2)}`);
} else if (amountOfApples >= 12) {
    console.log(`Valor total: R$${(amountOfApples * 0.25).toFixed(2)}`);
} else {
    console.error("Quantidade inválida!");
}