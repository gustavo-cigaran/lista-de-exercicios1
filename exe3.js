// 3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como
// "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.

const prompt = require('prompt-sync')();

let grade = Number(prompt("Digite uma nota de 0 a 10: "));

if (grade >= 0 && grade <= 3) {
    console.log("Reprovado");
} else if (grade >= 4 && grade <= 6) {
    console.log("Recuperação");
} else if (grade >= 7 && grade <= 10) {
    console.log("Aprovado");
} else {
    console.log("Nota Inválida!");
}