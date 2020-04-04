let video = document.getElementById('vid');

let play = document.getElementById('play');
let pause = document.getElementById('pause');
let volume = document.getElementById('volumeAdd');
let playback = document.getElementById('playback');
let playfurther = document.getElementById('playfurther');


//
var initVolume = 0.5
var initTime = 0;

play.addEventListener('click',()=>{
    video.play();
    video.volume = initVolume;
})

pause.addEventListener('click',()=>{
    video.pause();
})

volumeAdd.addEventListener('click',()=>{
    initVolume += .1;
    video.volume = initVolume;   
})

volumeMinus.addEventListener('click',()=>{
    initVolume -= .1;
    video.volume = initVolume;   
})

playfurther.addEventListener('click',()=>{
    var actualTime = vid.currentTime;
    video.currentTime = actualTime + 5;
})

playBack.addEventListener('click',()=>{
    var actualTime = vid.currentTime;
    video.currentTime = actualTime - 5;
})

