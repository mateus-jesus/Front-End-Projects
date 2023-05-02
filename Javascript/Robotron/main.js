const subtrair = document.querySelector("#subtrair");
const somar = document.querySelector("#somar");

const controle = document.querySelectorAll("[data-controle]");

controle.forEach((elemento) => {
  elemento.addEventListener("click", (evento) => {
    ManipulaDados(evento.target.dataset.controle, evento.target.parentNode);
  });
});

function ManipulaDados(operacao, controle) {
  const peca = controle.querySelector("[data-contador]");

  if (operacao == "+") {
    peca.value = parseInt(peca.value) + 1;
  } else {
    peca.value = parseInt(peca.value) - 1;
  }
}
