// Cards principales seccion
let sectionCards = document.getElementById('section-cards');
// Galeria dentro del modal seccion
let sectionCardModalPileta = document.getElementById('section-cards-modal-pileta');
let sectionCardModalPlaya = document.getElementById('section-cards-modal-playa');
let sectionCardModalParque = document.getElementById('section-cards-modal-parque');
let sectionCardModalG = document.getElementById('section-cards-modal-g');
let sectionCardModalQuincho = document.getElementById('section-cards-modal-quincho');
// Galeria estandar seccion
let sectionGaleria = document.getElementById('estandar-galeria');
// Agrandar img
const fulImgBoxPlaya = document.getElementById("fulImgBoxPlaya");
const fulImgPlaya = document.getElementById("fulImgPlaya");
const fulImgBoxParque = document.getElementById("fulImgBoxParque");
const fulImgParque = document.getElementById("fulImgParque");
const fulImgBoxPileta = document.getElementById("fulImgBoxPileta");
const fulImgPileta = document.getElementById("fulImgPileta");
const fulImgBoxG = document.getElementById("fulImgBoxG");
const fulImgG = document.getElementById("fulImgG");
const fulImgBoxQuincho = document.getElementById("fulImgBoxQuincho");
const fulImgQuincho = document.getElementById("fulImgQuincho");
// Agrandar img Estandar
const fulImgBoxEstandar = document.getElementById("fulImgBoxEstandar");
const fulImgEstandar = document.getElementById("fulImgEstandar");

let secciones = [
    {
        title:'PILETA',
        modal:'#modalPileta'
    }, 
    {
        title:'PLAYA',
        modal:'#modalPlaya'
    }, 
    {
        title:'JUEGOS', 
        modal:'#modalJuegos'
    },
    {
        title:'PARQUE',
        modal:'#modalParque'
    }, 
    {
        title:'GIMNASIO',
        modal:'#modalG'
    },
    {
        title:'QUINCHO',
        modal:'#modalQuincho'
    }]; 

for (let i = 0; i < secciones.length; i++) {
    let div = document.createElement('div');
    div.setAttribute('class', 'div-image');
    div.setAttribute('data-bs-toggle', 'modal');
    div.setAttribute('data-bs-target', secciones[i].modal)
    div.innerHTML = '<div><p>'+ secciones[i].title +'</p></div>';
    sectionCards.appendChild(div);
}  


// Galeria dentro de modal

//OBJ PILETA
let datosCardsPileta = [{img: "galerias/pileta/1.jpg",alt: "1", src: "fulImgBoxPileta", Id:"fulImgPileta"},{img: "galerias/pileta/2.jpg",alt: "2", src: "fulImgBoxPileta", Id:"fulImgPileta"},{img: "galerias/pileta/3.jpg",alt: "3", src: "fulImgBoxPileta", Id:"fulImgPileta"},{img: "galerias/pileta/4.jpg",alt: "4", src: "fulImgBoxPileta", Id:"fulImgPileta"},{img: "galerias/pileta/5.jpg",alt: "5", src: "fulImgBoxPileta", Id:"fulImgPileta"},{img: "galerias/pileta/6.jpg",alt: "6", src: "fulImgBoxPileta", Id:"fulImgPileta"},{img: "galerias/pileta/7.jpg",alt: "7", src: "fulImgBoxPileta", Id:"fulImgPileta"},{img: "galerias/pileta/8.jpg",alt: "8", src: "fulImgBoxPileta", Id:"fulImgPileta"}];

//OBJ PLAYA
let datosCardsPlaya = [{img: "galerias/playa/1.png",alt: "1", src: "fulImgBoxPlaya", Id:"fulImgPlaya"},{img: "galerias/playa/2.png",alt: "2", src: "fulImgBoxPlaya", Id:"fulImgPlaya"},{img: "galerias/playa/4.png",alt: "4", src: "fulImgBoxPlaya", Id:"fulImgPlaya"},{img: "galerias/playa/5.png",alt: "5", src: "fulImgBoxPlaya", Id:"fulImgPlaya"},{img: "galerias/playa/6.png",alt: "6", src: "fulImgBoxPlaya", Id:"fulImgPlaya"},{img: "galerias/playa/7.jpg",alt: "7", src: "fulImgBoxPlaya", Id:"fulImgPlaya"}];


// g50nas56
let datosCardsG = [{img: "galerias/g/1.jpg",alt: "1", src: "fulImgBoxG", Id:"fulImgG"},{img: "galerias/g/2.jpg",alt: "2", src: "fulImgBoxG", Id:"fulImgG"},{img: "galerias/g/3.jpg",alt: "3", src: "fulImgBoxG", Id:"fulImgG"},{img: "galerias/g/4.jpg",alt: "4", src: "fulImgBoxG", Id:"fulImgG"}];

//OBJ PARQUE
let datosCardsParque = [{img: "galerias/parque/1.jpg",alt: "1", src: "fulImgBoxParque", Id:"fulImgParque"},{img: "galerias/parque/2.jpg",alt: "2", src: "fulImgBoxParque", Id:"fulImgParque"},{img: "galerias/parque/3.jpg",alt: "3", src: "fulImgBoxParque", Id:"fulImgParque"},{img: "galerias/parque/4.jpg",alt: "4", src: "fulImgBoxParque", Id:"fulImgParque"},{img: "galerias/parque/5.jpg",alt: "5", src: "fulImgBoxParque", Id:"fulImgParque"},{img: "galerias/parque/6.jpg",alt: "6", src: "fulImgBoxParque", Id:"fulImgParque"},{img: "galerias/parque/7.jpg",alt: "7", src: "fulImgBoxParque", Id:"fulImgParque"},{img: "galerias/parque/8.jpg",alt: "8", src: "fulImgBoxParque", Id:"fulImgParque"},{img: "galerias/parque/9.jpg",alt: "9", src: "fulImgBoxParque", Id:"fulImgParque"},{img: "galerias/parque/10.jpg",alt: "10", src: "fulImgBoxParque", Id:"fulImgParque"},{img: "galerias/parque/11.jpg",alt: "11", src: "fulImgBoxParque", Id:"fulImgParque"}];

//OBJ QUINCHO
let datosCardsQuincho = [{img: "galerias/quincho/1.jpg",alt: "1", src: "fulImgBoxQuincho", Id:"fulImgQuincho"},{img: "galerias/quincho/2.jpg", alt: "2", src: "fulImgBoxQuincho", Id:"fulImgQuincho"},{img: "galerias/quincho/3.jpg", alt: "3", src: "fulImgBoxQuincho", Id:"fulImgQuincho"},{img: "galerias/quincho/4.jpg", alt: "4", src: "fulImgBoxQuincho", Id:"fulImgQuincho"},{img: "galerias/quincho/5.jpg", alt: "5", src: "fulImgBoxQuincho", Id:"fulImgQuincho"},{img: "galerias/quincho/6.jpg", alt: "6", src: "fulImgBoxQuincho", Id:"fulImgQuincho"},{img: "galerias/quincho/7.jpg", alt: "7", src: "fulImgBoxQuincho", Id:"fulImgQuincho"},{img: "galerias/quincho/8.jpg", alt: "8", src: "fulImgBoxQuincho", Id:"fulImgQuincho"}];



// Galeria estandar
let datosGaleria = [
    {img: "galerias/estandar/1a.png",alt: "1a", src: "fulImgBoxEstandar", Id:"fulImgEstandar"},
    {img: "galerias/estandar/1b.jpg",alt: "1b", src: "fulImgBoxEstandar", Id:"fulImgEstandar"},
    {img: "galerias/estandar/1.jpg",alt: "1", src: "fulImgBoxEstandar", Id:"fulImgEstandar"},
    {img: "galerias/estandar/2.jpg",alt: "2", src: "fulImgBoxEstandar", Id:"fulImgEstandar"},
    {img: "galerias/estandar/3.jpg",alt: "3", src: "fulImgBoxEstandar", Id:"fulImgEstandar"},
    {img: "galerias/estandar/4.jpg",alt: "4", src: "fulImgBoxEstandar", Id:"fulImgEstandar"},
    {img: "galerias/estandar/5.jpg",alt: "5", src: "fulImgBoxEstandar", Id:"fulImgEstandar"},
    {img: "galerias/estandar/6.jpg",alt: "6", src: "fulImgBoxEstandar", Id:"fulImgEstandar"},
    {img: "galerias/estandar/7.jpg",alt: "7", src: "fulImgBoxEstandar", Id:"fulImgEstandar"}
]




const forModals = (data, ubic) => {
    for(i=0; i<data.length; i++) {
        let imgCard= document.createElement('img');
        imgCard.setAttribute('src', data[i].img);
        imgCard.setAttribute('alt', data[i].alt);
        imgCard.setAttribute('onclick', 'abrirImg(this.src,'+data[i].src+','+data[i].Id+')');
        ubic.appendChild(imgCard);
    }
}

forModals(datosCardsPileta, sectionCardModalPileta);
forModals(datosCardsPlaya, sectionCardModalPlaya);
forModals(datosCardsParque, sectionCardModalParque);
forModals(datosCardsG, sectionCardModalG);
forModals(datosCardsQuincho, sectionCardModalQuincho);


// Ampliacion de fotos


const abrirImg = (reference, byId, Id) => {
    byId.style.display= "flex";
    Id.src = reference;
}
const cerrarImg = (byId) => {
    byId.style.display= "none";
}





