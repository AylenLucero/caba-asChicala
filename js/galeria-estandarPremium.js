let sectionGaleria = document.getElementById('estandarPremium-galeria');

// Abrir img
// estandar
const fulImgBoxEstandar = document.getElementById("fulImgBoxEstandarPremium");
const fulImgEstandar = document.getElementById("fulImgEstandarPremium");


// Galeria estandar
let datosGaleria = [
    {img:"galerias/estandar-premium/1.jpg",alt: "1", src: "fulImgBoxEstandarPremium", Id:"fulImgEstandarPremium"},
    {img:"galerias/estandar-premium/2.jpg",alt: "2", src: "fulImgBoxEstandarPremium", Id:"fulImgEstandarPremium"},
    {img:"galerias/estandar-premium/3.jpg",alt: "3", src: "fulImgBoxEstandarPremium", Id:"fulImgEstandarPremium"},
    {img:"galerias/estandar-premium/4.jpg",alt: "4", src: "fulImgBoxEstandarPremium", Id:"fulImgEstandarPremium"},
    {img:"galerias/estandar-premium/5.jpg",alt: "5", src: "fulImgBoxEstandarPremium", Id:"fulImgEstandarPremium"},
    {img:"galerias/estandar-premium/6.jpg",alt: "6", src: "fulImgBoxEstandarPremium", Id:"fulImgEstandarPremium"},
    {img:"galerias/estandar-premium/7.jpg",alt: "7", src: "fulImgBoxEstandarPremium", Id:"fulImgEstandarPremium"},
    {img:"galerias/estandar-premium/8.jpg",alt: "8", src: "fulImgBoxEstandarPremium", Id:"fulImgEstandarPremium"},
    {img:"galerias/estandar-premium/9.jpg",alt: "9", src: "fulImgBoxEstandarPremium", Id:"fulImgEstandarPremium"},
    {img:"galerias/estandar-premium/10.jpg",alt: "10", src: "fulImgBoxEstandarPremium", Id:"fulImgEstandarPremium"},
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