let video = document.getElementById("myVideo"); 
let play= document.getElementById('play');
let pause= document.getElementById('pause');

const vid = () => { 
    video.play(); 
    play.style.display ='none';
    pause.style.display= 'inline';
    play.innerHTML= '<i class="fa-solid fa-pause fa-lg"></i>';
}

function pauseVid() { 
    video.pause(); 
    pause.style.display ='none';
    play.style.display= 'inline';
    play.innerHTML= '<i class="fa-solid fa-play fa-lg"></i>';
} 