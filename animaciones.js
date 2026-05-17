
// animaciones.js

const fecha = new Date();
const mes = fecha.getMonth()+1;
const dia = fecha.getDate();


let simbolos = [];
let colores = [];

switch(mes){

case 1:
simbolos = ["✦","❄","★"];
colores = ["#ffd700","#ffffff","#87cefa"];
break;

case 2:
simbolos = ["❤","❀","💕"];
colores = ["#ff1493","#ff69b4","#ff3366"];
break;

case 3:
if(dia===19){
simbolos = ["✿","❋","✦"];
colores = ["#d2691e","#8b4513","#cd853f"];
}else{
simbolos = ["🎉","✨","❀"];
colores = ["#ff9900","#ffcc00","#ff6600"];
}
break;

case 4:
simbolos = ["✝","✨","❀"];
colores = ["#ffffff","#ffd700","#d2b48c"];
break;

case 5:
simbolos = ["❀","✿","🌸"];
colores = ["#ff69b4","#ff1493","#ffb6c1"];
break;

case 7:
simbolos = ["🎓","✨","🎉"];
colores = ["#000000","#ffd700","#ff6600"];
break;

case 8:
simbolos = ["❋","✦","✨"];
colores = ["#ff9933","#ff6600","#ffd700"];
break;

case 9:
simbolos = ["✦","★","✧"];
colores = ["green","white","red"];
break;

case 10:
simbolos = ["🦇","🎃","✦"];
colores = ["orange","black","purple"];
break;

case 11:
simbolos = ["🌼","🕯","✿"];
colores = ["orange","#ffd700","#ffffff"];
break;

case 12:
simbolos = ["❄","✦","★"];
colores = ["white","#87cefa","#c0c0ff"];
break;

default:
simbolos = ["✦"];
colores = ["#8b4513"];

}

const estilos = document.createElement("style");

estilos.innerHTML = `

.animacion{
position:fixed;
top:-50px;
font-weight:bold;
pointer-events:none;
z-index:9999;
animation:caer linear forwards;
user-select:none;
}

@keyframes caer{

0%{
transform:translateY(0px) rotate(0deg);
opacity:1;
}

100%{
transform:translateY(110vh) rotate(360deg);
opacity:0;
}

}

`;

document.head.appendChild(estilos);

function crearElemento(){

const elemento = document.createElement("div");

elemento.classList.add("animacion");

elemento.innerHTML =
simbolos[Math.floor(Math.random()*simbolos.length)];

elemento.style.left =
Math.random()*window.innerWidth + "px";

elemento.style.color =
colores[Math.floor(Math.random()*colores.length)];

elemento.style.fontSize =
(Math.random()*25 + 15) + "px";

const duracion =
(Math.random()*5 + 5);

elemento.style.animationDuration =
duracion + "s";

document.body.appendChild(elemento);

setTimeout(()=>{
elemento.remove();
}, duracion*1000);

}

setInterval(crearElemento,700);