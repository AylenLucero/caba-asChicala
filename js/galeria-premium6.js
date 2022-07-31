let sectionGaleria = document.getElementById('premium6-galeria');

// Abrir img
// estandar
const fulImgBoxEstandar = document.getElementById("fulImgBoxPremium6");
const fulImgEstandar = document.getElementById("fulImgPremium6");


// Galeria estandar
let datosGaleria = [
    {img:"galerias/premium6/1.jpg",alt: "1", src: "fulImgBoxPremium6", Id:"fulImgPremium6"},
    {img:"galerias/premium6/2.jpg",alt: "2", src: "fulImgBoxPremium6", Id:"fulImgPremium6"},
    {img:"galerias/premium6/3.jpg",alt: "3", src: "fulImgBoxPremium6", Id:"fulImgPremium6"},
    {img:"galerias/premium6/4.jpg",alt: "4", src: "fulImgBoxPremium6", Id:"fulImgPremium6"},
    {img:"galerias/premium6/5.jpg",alt: "5", src: "fulImgBoxPremium6", Id:"fulImgPremium6"},
    {img:"galerias/premium6/6.jpg",alt: "6", src: "fulImgBoxPremium6", Id:"fulImgPremium6"},
    {img:"galerias/premium6/7.jpg",alt: "7", src: "fulImgBoxPremium6", Id:"fulImgPremium6"},
    {img:"galerias/premium6/8.jpg",alt: "8", src: "fulImgBoxPremium6", Id:"fulImgPremium6"},
    {img:"galerias/premium6/9.jpg",alt: "9", src: "fulImgBoxPremium6", Id:"fulImgPremium6"},
    {img:"galerias/premium6/10.jpg",alt: "10", src: "fulImgBoxPremium6", Id:"fulImgPremium6"},
    {img:"galerias/premium6/11.jpg",alt: "11", src: "fulImgBoxPremium6", Id:"fulImgPremium6"},
    {img:"galerias/premium6/12.jpg",alt: "12", src: "fulImgBoxPremium6", Id:"fulImgPremium6"},
    {img:"galerias/premium6/13.jpg",alt: "13", src: "fulImgBoxPremium6", Id:"fulImgPremium6"},
    {img:"galerias/premium6/14.jpg",alt: "14", src: "fulImgBoxPremium6", Id:"fulImgPremium6"},
    {img:"galerias/premium6/15.jpg",alt: "15", src: "fulImgBoxPremium6", Id:"fulImgPremium6"},
    {img:"galerias/premium6/16.jpg",alt: "16", src: "fulImgBoxPremium6", Id:"fulImgPremium6"},
    {img:"galerias/premium6/17.jpg",alt: "17", src: "fulImgBoxPremium6", Id:"fulImgPremium6"},
    {img:"galerias/premium6/18.jpg",alt: "18", src: "fulImgBoxPremium6", Id:"fulImgPremium6"},
    {img:"galerias/premium6/19.jpg",alt: "19", src: "fulImgBoxPremium6", Id:"fulImgPremium6"},
    {img:"galerias/premium6/20.jpg",alt: "20", src: "fulImgBoxPremium6", Id:"fulImgPremium6"},
    {img:"galerias/premium6/21.jpg",alt: "21", src: "fulImgBoxPremium6", Id:"fulImgPremium6"},
    {img:"galerias/premium6/22.jpg",alt: "22", src: "fulImgBoxPremium6", Id:"fulImgPremium6"},
    {img:"galerias/premium6/23.jpg",alt: "23", src: "fulImgBoxPremium6", Id:"fulImgPremium6"},
    {img:"galerias/premium6/24.jpg",alt: "24", src: "fulImgBoxPremium6", Id:"fulImgPremium6"},
    {img:"galerias/premium6/25.jpg",alt: "25", src: "fulImgBoxPremium6", Id:"fulImgPremium6"},
    {img:"galerias/premium6/26.jpg",alt: "26", src: "fulImgBoxPremium6", Id:"fulImgPremium6"},
    {img:"galerias/premium6/27.jpg",alt: "27", src: "fulImgBoxPremium6", Id:"fulImgPremium6"},
    {img:"galerias/premium6/28.jpg",alt: "28", src: "fulImgBoxPremium6", Id:"fulImgPremium6"},
    {img:"galerias/premium6/29.jpg",alt: "29", src: "fulImgBoxPremium6", Id:"fulImgPremium6"},
    {img:"galerias/premium6/30.jpg",alt: "30", src: "fulImgBoxPremium6", Id:"fulImgPremium6"},
    {img:"galerias/premium6/31.jpg",alt: "31", src: "fulImgBoxPremium6", Id:"fulImgPremium6"},
    {img:"galerias/premium6/32.jpg",alt: "32", src: "fulImgBoxPremium6", Id:"fulImgPremium6"},
    {img:"galerias/premium6/33.jpg",alt: "33", src: "fulImgBoxPremium6", Id:"fulImgPremium6"},
    {img:"galerias/premium6/34.jpg",alt: "34", src: "fulImgBoxPremium6", Id:"fulImgPremium6"},
    {img:"galerias/premium6/35.jpg",alt: "35", src: "fulImgBoxPremium6", Id:"fulImgPremium6"},
    {img:"galerias/premium6/36.jpg",alt: "36", src: "fulImgBoxPremium6", Id:"fulImgPremium6"},
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