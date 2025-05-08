//DECLARANDO O ARRAY DE IMAGEM

let imagens =[
    'src/assets/imagem1.jpg',
    'src/assets/imagem2.jpg',
    'src/assets/imagem3.jpg',
];

//DECLARANDO AS VARIÁVEIS

let index=0;
let tempo=3000;

//CRIANDO A FUNÇÃO SLIDESHOW

function SLIDESHOW(){
    document.getElementById("image").src=imagens[index];
    index++;

    if(index == imagens.length){
        index=0;
    }
    setTimeout("SLIDESHOW()", tempo)
}
SLIDESHOW();