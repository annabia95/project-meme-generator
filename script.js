const getInput = document.querySelector('#text-input');
const texto = document.querySelector('#meme-text');

// Requisito 1 -  Usei como referência a documentação do evento 'keyup'. Link:https://developer.mozilla.org/pt-BR/docs/Web/API/Document/keyup_event
function mostrarTexto() {
  texto.innerText = getInput.value;
}

getInput.addEventListener('keyup', mostrarTexto);