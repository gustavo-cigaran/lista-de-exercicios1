// 5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
// determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
// utilizando if-else.

const prompt = require('prompt-sync')();

let weight = Number(prompt("Digite seu peso: "));
let height = Number(prompt("Digite sua altura (ex: 1.70): "));

let imc = weight / (height * height)

if (imc < 18.5) {
  console.log("Baixo peso.");
} else if (imc >= 18.5 && imc <= 24.9) {
  console.log("Peso normal.");
} else if (imc >= 25 && imc <= 29.9) {
  console.log("Sobrepeso.");
} else if (imc >= 30) {
  console.log("Obesidade.");
} else {
  console.log("Erro");
}