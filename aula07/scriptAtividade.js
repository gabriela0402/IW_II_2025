// Seleciona os elementos 
const lampada = document.getElementById("lampada"); 
const btnLigar = document.getElementById("ligar"); 
const btnDesligar = document.getElementById("desligar"); 
// Funções para ligar e desligar a lâmpada 
function ligarLampada() { 
    lampada.src = "img/ligada.png"; 
    lampada.alt = "Lâmpada Ligada"; 
} 
function desligarLampada() { 
    lampada.src = "img/apagada.png"; 
    lampada.alt = "Lâmpada Desligada"; 
} 
// Adiciona os eventos aos botões 
btnLigar.addEventListener("mouseover", ligarLampada); 
btnDesligar.addEventListener("mouseout", desligarLampada);