let sectionGaleria = document.getElementById('estandar-galeria');

// Abrir img
// estandar
const fulImgBoxEstandar = document.getElementById("fulImgBoxEstandar");
const fulImgEstandar = document.getElementById("fulImgEstandar");


// Galeria estandar
let datosGaleria = [
    {img:"galerias/estandar/1.jpeg",alt: "1", src: "fulImgBoxEstandar", Id:"fulImgEstandar"},
    {img:"galerias/estandar/2.jpeg",alt: "2", src: "fulImgBoxEstandar", Id:"fulImgEstandar"},
    {img:"galerias/estandar/3.jpg",alt: "3", src: "fulImgBoxEstandar", Id:"fulImgEstandar"},
    {img:"galerias/estandar/4.jpeg",alt: "4", src: "fulImgBoxEstandar", Id:"fulImgEstandar"},
    {img:"galerias/estandar/5.jpeg",alt: "5", src: "fulImgBoxEstandar", Id:"fulImgEstandar"},
    {img:"galerias/estandar/6.jpg",alt: "6", src: "fulImgBoxEstandar", Id:"fulImgEstandar"},
    {img:"galerias/estandar/7.jpg",alt: "7", src: "fulImgBoxEstandar", Id:"fulImgEstandar"},
    {img:"galerias/estandar/8.jpeg",alt: "8", src: "fulImgBoxEstandar", Id:"fulImgEstandar"}
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