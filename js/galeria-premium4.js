let sectionGaleria = document.getElementById('premium4-galeria');

// Abrir img
// estandar
const fulImgBoxEstandar = document.getElementById("fulImgBoxPremium4");
const fulImgEstandar = document.getElementById("fulImgPremium4");


// Galeria estandar
let datosGaleria = [
    {img:"galerias/premium4/1.jpg",alt: "1", src: "fulImgBoxPremium4", Id:"fulImgPremium4"},
    {img:"galerias/premium4/2.jpg",alt: "2", src: "fulImgBoxPremium4", Id:"fulImgPremium4"},
    {img:"galerias/premium4/3.jpg",alt: "3", src: "fulImgBoxPremium4", Id:"fulImgPremium4"},
    {img:"galerias/premium4/4.jpg",alt: "4", src: "fulImgBoPremium4", Id:"fulImgPremium4"},
    {img:"galerias/premium4/5.jpg",alt: "5", src: "fulImgBoxPremium4", Id:"fulImgPremium4"},
    {img:"galerias/premium4/6.jpg",alt: "6", src: "fulImgBoxPremium4", Id:"fulImgPremium4"},
    {img:"galerias/premium4/7.jpg",alt: "7", src: "fulImgBoxPremium4", Id:"fulImgPremium4"},
    {img:"galerias/premium4/8.jpg",alt: "8", src: "fulImgBoxPremium4", Id:"fulImgPremium4"},
    {img:"galerias/premium4/9.jpg",alt: "9", src: "fulImgBoxPremium4", Id:"fulImgPremium4"}

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