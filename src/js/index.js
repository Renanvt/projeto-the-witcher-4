const botaoTrailer = document.querySelector(".botao-trailer")
const modal = document.querySelector(".modal")
const fecharModal = document.querySelector(".fechar-modal")
const video = document.getElementById("video");
const linkDoVideo = video.src

function alternarModal(){
   modal.classList.toggle("aberto");
}

/*addEventListener - Adicionar um evento que estará escutando para posteriormente ser executado */

// Dar um jeito de identificar quando o usuário clicar no botao
botaoTrailer.addEventListener("click", () =>{
    // Abrir o modal na tela
    alternarModal()
    // Colocar a reprodução do video
    video.setAttribute("src", linkDoVideo)
});

fecharModal.addEventListener("click",() =>{
    // Fechar a modal
    alternarModal()
     // tirar a reprodução do vídeo
    video.setAttribute("src", "")
})

