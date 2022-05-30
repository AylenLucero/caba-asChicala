const sectionItemsTermas = document.getElementById('container-text');

const icon = '<i class="fa-solid fa-circle fa-xs"></i>';
const termasPark = ["7 piscinas","Restaurantes","Spa/Masajes","Parque"];
const mundoMarino= ["7 piscinas","Restaurantes","Spa/Masajes","Parque"];

const showData = (array, icon, ubic) => {
    for(let value of array) {
        let div = document.createElement('div');
        div.setAttribute('class','info');
        div.innerHTML= icon + '<p>'+ value +'</p>';
        ubic.appendChild(div);
    }
}

showData(termasPark, icon, sectionItemsTermas);