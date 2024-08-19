// 1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar
// utilizando uma estrutura de controle if.

const prompt = require('prompt-sync')();

let number = parseInt(prompt('Digite um número inteiro: '));

number % 2 === 0 ? console.log("Par") : console.log("Ímpar");