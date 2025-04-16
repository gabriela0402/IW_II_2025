const botao1 = document.getElementById("botao01");
const botao2 = document.getElementById("botao02");
const botao3 = document.getElementById("botao03");
const imagem = document.getElementById("imagem");

botao1.addEventListener("click", function() {
    imagem.src = "img/taylor1.jpg";
});

botao2.addEventListener("click", function() {
    imagem.src = "img/taylor2.jpg";
});

botao3.addEventListener("click", function() {
    imagem.src = "img/taylor3.jpg";
});
