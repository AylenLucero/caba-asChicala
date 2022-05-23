const ham = document.querySelector('.ham');
const enlaces = document.querySelector('.enlaces-menu');
const barras = document.querySelectorAll('.ham span');

ham.addEventListener('click', () => {
    enlaces.classList.toggle('activado');
    barras.forEach(child => {
        child.classList.toggle('animado')
    })
})
// const iconoMenu = document.querySelector('#icono-menu');
// const menu = document.querySelector('#menu');

// iconoMenu.addEventListener('click', (e) => {
//     const rutaActual= e.target.getAttribute('src');
// })