const braco = document.querySelector("#braco");
const subtrair = document.querySelector("#subtrair");
const somar = document.querySelector("#somar");

const controle = document.querySelectorAll(".controle-ajuste");

controle.forEach((elemento) => {
  elemento.addEventListener("click", (evento) => {
    ManipulaDados(evento.target.textContent);
  });
});

function ManipulaDados(operacao) {
  if (operacao == "+") {
    braco.value = parseInt(braco.value) + 1;
  } else {
    braco.value = parseInt(braco.value) - 1;
  }
}
