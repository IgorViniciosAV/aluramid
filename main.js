let estaTocando = false;
function tocaSom (seletorAudio) {
   const elemento = document.querySelector(seletorAudio);

   if (elemento && elemento.localName === 'audio') {
    if (estaTocando) {
      elemento.currentTime = 0; // Reinicia o áudio para o início
    }
    elemento.play();
    estaTocando = true;
  } else {
    console.log('Elemento não encontrado ou seletor não é um audio');
  }

}

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

//while=enquanto | for=para
for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (evento) {

        // console.log(evento.code == 'Space' || evento.code == 'Enter')
        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }

}