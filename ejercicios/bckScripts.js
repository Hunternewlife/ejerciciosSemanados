// opciones
var blue = document.getElementById('blue');
var grey = document.getElementById('grey');
var green = document.getElementById('green');
var red = document.getElementById('red');
var yellow = document.getElementById('yellow');

//fondo
var fondo = document.querySelector('body');

blue.addEventListener('mouseover',()=>{
    fondo.style.backgroundColor = '#00a8cc';
})

grey.addEventListener('mouseover',()=>{
    fondo.style.backgroundColor = '#758184';
})

green.addEventListener('mouseover',()=>{
    fondo.style.backgroundColor = '#235952';
})

red.addEventListener('mouseover',()=>{
    fondo.style.backgroundColor = '#d63447';
})

yellow.addEventListener('mouseover',()=>{
    fondo.style.backgroundColor = '#ffd31d';
})