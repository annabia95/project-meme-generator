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

// Requisito 6
const btnFire = document.querySelector('#fire');
const btnWater = document.querySelector('#water');
const btnEarth = document.querySelector('#earth');
const container = document.querySelector('#meme-image-container');

function changeBorder () {
 btnFire.addEventListener ('click', function () {
  container.style.border = '3px dashed red';
 })
 btnWater.addEventListener ('click', function () {
  container.style.border = '5px double blue';
 })
 btnEarth.addEventListener ('click', function () {
  container.style.border = '6px groove green';
 })
};
changeBorder ();

//Requisito 7
const divImage = document.getElementById('imagens').children;
function getMeme(event) {
  showImage.src = event.target.src;
}
for (let index = 0; index < divImage.length; index += 1) {
  divImage[index].addEventListener('click', getMeme);
};
