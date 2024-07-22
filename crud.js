const prompt = require("prompt-sync")();
const modulo = require("./modulo.js");

let opcao;

while (opcao != 5) {
  modulo.menu();
  opcao = prompt("Digite o que deseja fazer:");
  if (!isNaN(opcao)) {
    opcao = Number(opcao);
    switch (opcao) {
      case 1:
        modulo.adicionar();
        break;
      case 2:
        modulo.listar();
        break;
      case 3:
        modulo.alterar();
        break;
      case 4:
        modulo.remover();
        break;
      case 5:
        console.log("Até mais!");
        break;
      default:
        console.log("Opção inválida. Digite um número de 1 a 5.");
    }
  } else {
    console.log("A opção digitada não é um número.");
  }
}
