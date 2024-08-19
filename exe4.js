// 4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
// Utilize switch-case para implementar a lógica de cada opção selecionada.

const prompt = require('prompt-sync')();

let option = parseInt(prompt("\n1 - Fruki \n2 - Charrua \n3 - Guaraná Antarctica \nEscolha uma opção: "));

switch (option) {
    case 1:
        console.log("Seu guaraná preferido é Fruki.");
        break;
    case 2:
        console.log("Seu guaraná preferido é Charrua.");
        break;
    case 3:
        console.log("Seu guaraná preferido é Guaraná Antarctica.");
        break;
    default:
        console.log("Opção Inexistente!");
        break;
}