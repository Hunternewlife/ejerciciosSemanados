var imagen = document.getElementById('imagen');
var zoomIn = document.getElementById('zoomIn');
var zoomOut = document.getElementById('zoomOut');
var transIn = document.getElementById('transIn');
var transOut = document.getElementById('transOut');

var initZise = 500;

zoomIn.addEventListener('click',()=>{
    initZise += 10;
    var newSize = initZise + 'px';
    imagen.style.height = newSize;
})

zoomOut.addEventListener('click',()=>{
    initZise -= 10;
    var newSize = initZise + 'px';
    imagen.style.height = newSize;
})

transIn.addEventListener('click',()=>{
   setTimeout(aumentar(),1000);   
})

transOut.addEventListener('click',()=>{
    
})

function aumentar(){
    while(initZise <= 600){
     initZise += 10;
     var newSize = initZise + 'px';
     imagen.style.height = newSize;
    }
}