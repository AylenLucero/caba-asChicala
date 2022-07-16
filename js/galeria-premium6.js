let sectionGaleria = document.getElementById('premium6-galeria');

// Abrir img
// estandar
const fulImgBoxEstandar = document.getElementById("fulImgBoxPremium6");
const fulImgEstandar = document.getElementById("fulImgPremium6");


// Galeria estandar
let datosGaleria = [
    {img:"galerias/estandar/1a.jpg",alt: "1a", src: "fulImgBoxPremium6", Id:"fulImgEstandar"},
    {img:"galerias/estandar/1b.jpg",alt: "1b", src: "fulImgBoxPremium6", Id:"fulImgEstandar"},
    {img:"galerias/estandar/1c.jpeg",alt: "1c", src: "fulImgBoxPremium6", Id:"fulImgEstandar"}
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