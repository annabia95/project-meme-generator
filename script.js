const getInput = document.querySelector('#text-input');
const texto = document.querySelector('#meme-text');
const getInputImage = document.querySelector ('#meme-insert');
const showImage = document.querySelector ('#meme-image');


// Requisito 1 -  Usei como referência a documentação do evento 'keyup'. Link:https://developer.mozilla.org/pt-BR/docs/Web/API/Document/keyup_event
function mostrarTexto() {
  texto.innerText = getInput.value;
}

getInput.addEventListener('keyup', mostrarTexto);

// Requisito 2 - Usei como referência o seguinte vídeo: https://www.youtube.com/watch?v=io5FcMAdLyQ
function insertMeme() {
  const img = getInputImage.files;
  showImage.src = URL.createObjectURL(img[0]);
}
getInputImage.addEventListener('change', insertMeme);

// Requisito 5 -  Usei como recurso o 'maxlength'. Link: https://pt.stackoverflow.com/questions/284860/max-length-em-input-type-number-html