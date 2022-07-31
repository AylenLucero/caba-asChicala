const ham = document.querySelector('.ham');
const enlaces = document.querySelector('.enlaces-menu');
const barras = document.querySelectorAll('.ham span');

ham.addEventListener('click', () => {
    enlaces.classList.toggle('activado');
    // if(enlaces.classList[1] == 'activado') {
    //     enlaces.innerHTML= "hola"
    // }
    barras.forEach(child => {
        child.classList.toggle('animado')
    })
})