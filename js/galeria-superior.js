
let sectionGaleriaSuperior=document.getElementById('superior-galeria');
// Ampliacion img
const fulImgBoxSuperior = document.getElementById("fulImgBoxSuperior");
const fulImgSuperior = document.getElementById("fulImgSuperior");

// Galeria superior
let datosGSuperior =[
    {img:"galerias/superior/1.jpg",alt: "1a", src: "fulImgBoxSuperior", Id:"fulImgSuperior"},
    {img:"galerias/superior/2.jpg",alt: "1b", src: "fulImgBoxSuperior", Id:"fulImgSuperior"},
    {img:"galerias/superior/3.jpg",alt: "1", src: "fulImgBoxSuperior", Id:"fulImgSuperior"},
    {img:"galerias/superior/4.jpg",alt: "2", src: "fulImgBoxSuperior", Id:"fulImgSuperior"},
    {img:"galerias/superior/5.jpg",alt: "3", src: "fulImgBoxSuperior", Id:"fulImgSuperior"},
    {img:"galerias/superior/6.jpg",alt: "4", src: "fulImgBoxSuperior", Id:"fulImgSuperior"},
    {img:"galerias/superior/7.jpg",alt: "5", src: "fulImgBoxSuperior", Id:"fulImgSuperior"},
    {img:"galerias/superior/13.jpg",alt: "8", src: "fulImgBoxSuperior", Id:"fulImgSuperior"},
    {img:"galerias/superior/14.jpg",alt: "9", src: "fulImgBoxSuperior", Id:"fulImgSuperior"},
    {img:"galerias/superior/15.jpg",alt: "10", src: "fulImgBoxSuperior", Id:"fulImgSuperior"},
    {img:"galerias/superior/18.jpg",alt: "13", src: "fulImgBoxSuperior", Id:"fulImgSuperior"},
    {img:"galerias/superior/22.jpg",alt: "17", src: "fulImgBoxSuperior", Id:"fulImgSuperior"},
    {img:"galerias/superior/23.jpg",alt: "18", src: "fulImgBoxSuperior", Id:"fulImgSuperior"},
    {img:"galerias/superior/24.jpg",alt: "19", src: "fulImgBoxSuperior", Id:"fulImgSuperior"},
    {img:"galerias/superior/25.jpg",alt: "20", src: "fulImgBoxSuperior", Id:"fulImgSuperior"},
    {img:"galerias/superior/26.jpg",alt: "21", src: "fulImgBoxSuperior", Id:"fulImgSuperior"},
    {img:"galerias/superior/27.jpg",alt: "22", src: "fulImgBoxSuperior", Id:"fulImgSuperior"},
    {img:"galerias/superior/28.jpg",alt: "23", src: "fulImgBoxSuperior", Id:"fulImgSuperior"},
    {img:"galerias/superior/29.jpg",alt: "24", src: "fulImgBoxSuperior", Id:"fulImgSuperior"}
];

for(i=0; i<datosGSuperior.length; i++) {
    let imgCard= document.createElement('img');
    imgCard.setAttribute('src', datosGSuperior[i].img);
    imgCard.setAttribute('alt', datosGSuperior[i].alt);
    imgCard.setAttribute('onclick', 'abrirImg(this.src,'+datosGSuperior[i].src+','+datosGSuperior[i].Id+')');
    sectionGaleriaSuperior.appendChild(imgCard);
}

// Ampliacion de fotos
const abrirImg = (reference, byId, Id) => {
    byId.style.display= "flex";
    Id.src = reference;
}
const cerrarImg = (byId) => {
    byId.style.display= "none";
}