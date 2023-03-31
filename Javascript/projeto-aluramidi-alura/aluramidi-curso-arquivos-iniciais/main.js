function tocaSomPom(idElementoAudio) {
  document.querySelector(idElementoAudio).play();
}

const ListaDeTeclas = document.querySelectorAll(".tecla");

let contador = 0;

for (let contador = 0; contador < ListaDeTeclas.length; contador++) {
  const tecla = ListaDeTeclas[contador];

  const instrumento = tecla.classList[1];

  const idAudio = `#som_${instrumento}`;

  tecla.onclick = function () {
    tocaSomPom(idAudio);
  };

  tecla.onkeydown = function () {
    ListaDeTeclas[contador].classList.add("ativa");
  };

  tecla.onkeyup = function () {
    ListaDeTeclas[contador].classList.remove("ativa");
  };
}
