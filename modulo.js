const prompt = require("prompt-sync")();
const dias = [];

function menu() {
  console.log(
    "[1] Adicionar dia em que foram feitas atividades\n[2] Listar dias e atividades"
  );
  console.log("[3] Alterar dia\n[4] Excluir dia\n[5] Sair");
}

const adicionarAtividades = () => {
  let resp = "s";
  const atividades = [];
  while (true) {
    if (
      resp != "nao" &&
      resp != "não" &&
      resp != "n" &&
      resp != "sim" &&
      resp != "s"
    ) {
      console.log("ERRO. Digite uma resposta válida. [s/n]");
    } else if (resp == "sim" || resp == "s") {
      atividades.push(prompt("Digite a atividade que deseja adicionar: "));
      resp = prompt("Deseja adicionar mais atividades?[s/n] ")
        .trim()
        .toLowerCase();
    } else {
      return atividades;
    }
  }
};

const adicionar = function () {
  const dia = {};
  dia.indice = dias.length;
  dia.data = prompt("Digite a data em que deseja adicionar atividade(s): ");
  dia.atividades = adicionarAtividades();
  dias.push(dia);
};

const procurarIndice = () => {
  const indice = prompt("Digite o índice do dia:");
  if (indice >= dias.length || isNaN(indice)) {
    console.log("Índice não encontrado.");
    return;
  }
  return Number(indice);
};

const alterar = () => {
  listar();
  const indice = procurarIndice();
  if (!isNaN(indice)) {
    console.log("Digite o que deseja alterar:\n[1] Data\n[2] Atividades");
    let alt = prompt().trim();
    if (!isNaN(alt)) {
      alt = Number(alt);
      switch (alt) {
        case 1:
          dias[indice].data = prompt("Digite a nova data: ").trim();
          break;
        case 2:
          dias[indice].atividades = adicionarAtividades();
          break;
        default:
          console.log("Opção inválida. Digite 1 ou 2.");
      }
    }
  }
};

const remover = () => {
  listar();
  let indice = procurarIndice();
  if (!isNaN(indice)) {
    indice = Number(indice);
    dias.splice(indice, 1);
    console.log("Elemento removido com sucesso");
  }
  for (let c = indice; c < dias.length; c++) {
    dias[c].indice -= 1;
  }
};

const listar = () => {
  dias.forEach((dia) => {
    console.log("=============================");
    console.log(`Índice: ${dia.indice}`);
    console.log(`Data: ${dia.data}`);
    console.log(`Atividades: ${dia.atividades}`);
    console.log("=============================");
  });
};

module.exports = {
  menu,
  adicionar,
  alterar,
  listar,
  remover,
};
