let sectionCards= document.getElementById('section-cards');

let datosCards= [
    {
        img:"galerias/estandar/1a.jpg",
        a: "cabañas-estandar.html",
        title:"ESTANDAR",
        subTitle:"4 personas"
    },
    {
        img:"img/bajada/2.jpeg",
        a: "cabañas-superior.html",
        title:"SUPERIOR",
        subTitle:"5 personas"
    },
    {
        img:"img/bajada/1.jpeg",
        a: "cabañas-premium6.html",
        title:"PREMIUM",
        subTitle:"4 personas"
    },
    {
        img:"img/bajada/1.jpeg",
        a: "cabañas-premium6.html",
        title:"PREMIUM",
        subTitle:"6 personas"
    }
];

for(i=0;i<datosCards.length;i++) {
    //creacion elementos
    let div = document.createElement('div');
    let divText = document.createElement('div');
    let divImg = document.createElement('div');
    let a = document.createElement('a');
    let imageCard = document.createElement('img');
    //asignacion atributos
    div.setAttribute('class', 'div-card');
    a.setAttribute('href', datosCards[i].a);
    a.setAttribute('class', 'a-card');
    imageCard.setAttribute('src', datosCards[i].img);
    imageCard.setAttribute('class', 'img-card');
    divImg.setAttribute('class', 'div-img');
    divText.setAttribute('class', 'div-text');
    divText.innerHTML= '<h4>'+datosCards[i].title+'</h4><p>'+ datosCards[i].subTitle +'</p>';
    //ubicacion
    divImg.appendChild(imageCard);
    div.appendChild(divImg);
    div.appendChild(divText);
    a.appendChild(div);    
    sectionCards.appendChild(a);
}