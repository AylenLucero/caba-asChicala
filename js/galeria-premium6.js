let sectionGaleria = document.getElementById('premium6-galeria');

// Abrir img
// estandar
const fulImgBoxEstandar = document.getElementById("fulImgBoxPremium6");
const fulImgEstandar = document.getElementById("fulImgPremium6");


// Galeria estandar
let datosGaleria = [
    {img:"galerias/premium6/1.jpg",alt: "1", src: "fulImgBoxPremium6", Id:"fulImgPremium6"},
    {img:"galerias/premium6/7.jpg",alt: "7", src: "fulImgBoxPremium6", Id:"fulImgPremium6"},
    {img:"galerias/premium6/8.jpg",alt: "8", src: "fulImgBoxPremium6", Id:"fulImgPremium6"},
    {img:"galerias/premium6/9.jpg",alt: "9", src: "fulImgBoxPremium6", Id:"fulImgPremium6"},
    {img:"galerias/premium6/13.jpg",alt: "13", src: "fulImgBoxPremium6", Id:"fulImgPremium6"},
    {img:"galerias/premium6/18.jpg",alt: "18", src: "fulImgBoxPremium6", Id:"fulImgPremium6"},
    {img:"galerias/premium6/20.jpg",alt: "20", src: "fulImgBoxPremium6", Id:"fulImgPremium6"},
    {img:"galerias/premium6/21.jpg",alt: "21", src: "fulImgBoxPremium6", Id:"fulImgPremium6"},
    {img:"galerias/premium6/22.jpg",alt: "22", src: "fulImgBoxPremium6", Id:"fulImgPremium6"},
    {img:"galerias/premium6/32.jpg",alt: "32", src: "fulImgBoxPremium6", Id:"fulImgPremium6"},
    {img:"galerias/premium6/33.jpg",alt: "33", src: "fulImgBoxPremium6", Id:"fulImgPremium6"},
    {img:"galerias/premium6/34.jpg",alt: "34", src: "fulImgBoxPremium6", Id:"fulImgPremium6"},
    {img:"galerias/premium6/37.jpg",alt: "37", src: "fulImgBoxPremium6", Id:"fulImgPremium6"},
    {img:"galerias/premium6/38.jpg",alt: "38", src: "fulImgBoxPremium6", Id:"fulImgPremium6"},
    {img:"galerias/premium6/39.jpg",alt: "39", src: "fulImgBoxPremium6", Id:"fulImgPremium6"},
    {img:"galerias/premium6/41.jpg",alt: "41", src: "fulImgBoxPremium6", Id:"fulImgPremium6"},
    {img:"galerias/premium6/42.jpg",alt: "42", src: "fulImgBoxPremium6", Id:"fulImgPremium6"},
    {img:"galerias/premium6/43.jpg",alt: "43", src: "fulImgBoxPremium6", Id:"fulImgPremium6"},
    {img:"galerias/premium6/44.jpg",alt: "44", src: "fulImgBoxPremium6", Id:"fulImgPremium6"},
    {img:"galerias/premium6/45.jpg",alt: "45", src: "fulImgBoxPremium6", Id:"fulImgPremium6"}
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