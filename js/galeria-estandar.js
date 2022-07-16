let sectionGaleria = document.getElementById('estandar-galeria');

// Abrir img
// estandar
const fulImgBoxEstandar = document.getElementById("fulImgBoxEstandar");
const fulImgEstandar = document.getElementById("fulImgEstandar");


// Galeria estandar
let datosGaleria = [
    {img:"galerias/estandar/1a.jpg",alt: "1a", src: "fulImgBoxEstandar", Id:"fulImgEstandar"},
    {img:"galerias/estandar/1b.jpg",alt: "1b", src: "fulImgBoxEstandar", Id:"fulImgEstandar"},
    {img:"galerias/estandar/1c.jpeg",alt: "1c", src: "fulImgBoxEstandar", Id:"fulImgEstandar"},
    {img:"galerias/estandar/1.jpg",alt: "1", src: "fulImgBoxEstandar", Id:"fulImgEstandar"},
    {img:"galerias/estandar/2.jpg",alt: "2", src: "fulImgBoxEstandar", Id:"fulImgEstandar"},
    {img:"galerias/estandar/3.jpg",alt: "3", src: "fulImgBoxEstandar", Id:"fulImgEstandar"},
    {img:"galerias/estandar/5.jpg",alt: "4", src: "fulImgBoxEstandar", Id:"fulImgEstandar"},
    {img:"galerias/estandar/5a.jpeg",alt: "4a", src: "fulImgBoxEstandar", Id:"fulImgEstandar"},
    {img:"galerias/estandar/6.jpg",alt: "5", src: "fulImgBoxEstandar", Id:"fulImgEstandar"},
    {img:"galerias/estandar/7.jpg",alt: "6", src: "fulImgBoxEstandar", Id:"fulImgEstandar"},
    {img:"galerias/estandar/8.jpg",alt: "7", src: "fulImgBoxEstandar", Id:"fulImgEstandar"},
    {img:"galerias/estandar/8a.jpeg",alt: "7a", src: "fulImgBoxEstandar", Id:"fulImgEstandar"},
    {img:"galerias/estandar/9.jpg",alt: "8", src: "fulImgBoxEstandar", Id:"fulImgEstandar"},
    {img:"galerias/estandar/11.jpg",alt: "9", src: "fulImgBoxEstandar", Id:"fulImgEstandar"},
    {img:"galerias/estandar/12.jpg",alt: "10", src: "fulImgBoxEstandar", Id:"fulImgEstandar"},
    {img:"galerias/estandar/13.jpg",alt: "11", src: "fulImgBoxEstandar", Id:"fulImgEstandar"},
    {img:"galerias/estandar/14.jpg",alt: "12", src: "fulImgBoxEstandar", Id:"fulImgEstandar"},
    {img:"galerias/estandar/15.jpg",alt: "13", src: "fulImgBoxEstandar", Id:"fulImgEstandar"},
    {img:"galerias/estandar/16.jpg",alt: "14", src: "fulImgBoxEstandar", Id:"fulImgEstandar"},
    {img:"galerias/estandar/16a.jpeg",alt: "14a", src: "fulImgBoxEstandar", Id:"fulImgEstandar"},
    {img:"galerias/estandar/17.jpg",alt: "15", src: "fulImgBoxEstandar", Id:"fulImgEstandar"},
    {img:"galerias/estandar/18.jpg",alt: "16", src: "fulImgBoxEstandar", Id:"fulImgEstandar"},
    {img:"galerias/estandar/19.jpg",alt: "17", src: "fulImgBoxEstandar", Id:"fulImgEstandar"},
    {img:"galerias/estandar/20.jpg",alt: "18", src: "fulImgBoxEstandar", Id:"fulImgEstandar"},
    {img:"galerias/estandar/21.jpg",alt: "19", src: "fulImgBoxEstandar", Id:"fulImgEstandar"},
    {img:"galerias/estandar/22.jpg",alt: "20", src: "fulImgBoxEstandar", Id:"fulImgEstandar"},
    {img:"galerias/estandar/23.jpg",alt: "21", src: "fulImgBoxEstandar", Id:"fulImgEstandar"},
    {img:"galerias/estandar/24.jpg",alt: "22", src: "fulImgBoxEstandar", Id:"fulImgEstandar"},
    {img:"galerias/estandar/25.jpeg",alt: "23", src: "fulImgBoxEstandar", Id:"fulImgEstandar"}
]


for(i=0; i<datosGaleria.length; i++) {
    let imgCard= document.createElement('img');
    imgCard.setAttribute('src', datosGaleria[i].img);
    imgCard.setAttribute('alt', datosGaleria[i].alt);
    imgCard.setAttribute('onclick', 'abrirImg(this.src,'+datosGaleria[i].src+','+datosGaleria[i].Id+')');
    sectionGaleria.appendChild(imgCard);
}


// Ampliacion de fotos
const abrirImg = (reference, byId, Id) => {
    byId.style.display= "flex";
    Id.src = reference;
}
const cerrarImg = (byId) => {
    byId.style.display= "none";
}