/* 
OBJETIVO 1 - quando o usuario cliacar no botao de ver trailer, devemos
abrir a modal com o video do trailer.

OBJETIVO 2 - quando clicar no X devemos fechar a modal.

OBJETIVO 1 - quando o usuario cliacar no botao de ver trailer, devemos
abrir a modal com o video do trailer.
    -passo 1 - dar um jeito de pegar o elemento que representa o botao na tela usando o js.
    -passo 2 - dar um jeito de indentificar quamdo o usuario clicar no botao.
    -passo 3 - dar um jeito de pegar o elemento da modal no js.
    -passo 4 - abrir a modal na tela.
    
    OBJETIVO 2 - quando clicar no X devemos fechar a modal.
    -passo 1 - dar um jeito de pegar o elemento de fechar a modal usando js.
    -passo 2 - dar um jeito de indentificar quandoo usuario clica no X.
    -passo 3 - fechar a modal. 

*/

// OBJETIVO 1 - quando o usuario cliacar no botao de ver trailer devemos abrir a modal com o video do trailer.


// passo 1 - dar um jeito de pegar o elemento que representa o botao na tela usando o js.

const botaoTrailer = document.querySelector(".botao-trailer");
const botaoFecharModal = document.querySelector(".fechar-modal");
const modal = document.querySelector(".modal");
const video = document.getElementById("video");
const linkDoVideo = video.src;

function alternarModal(){
    modal.classList.toggle("aberto");
}
// passo 2 - dar um jeito de indentificar quamdo o usuario clicar no botao.

botaoTrailer.addEventListener("click", ()=>{
    // passo 4 - abrir a modal na tela.
    alternarModal();
    video.setAttribute("src", linkDoVideo);
});

// passo 2 - dar um jeito de indentificar quandoo usuario clica no X.

botaoFecharModal.addEventListener("click", () => {
    // passo 3 - fechar a modal. 
    alternarModal();
    video.setAttribute("src", "");
});
