//Seleciona os elementos

const imagem = document.getElementById("imagem");
const botao = document.getElementById("trocarImagem");

//estado atual da imagem

let imagematual = 1;

//Função que troca a imagem

function trocarImagem(){
    if (imagematual === 1 ){
        imagem.src = "img/taylor_speak.jpg";
        imagematual = 2;
    }else{
        imagem.src = "img/taylor1.jpg";
        imagematual = 1;
    }
}

//Associa o evento de clique
botao.addEventListener("click",trocarImagem);