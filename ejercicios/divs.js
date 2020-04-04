var add = document.getElementById('add');
var remove = document.getElementById('removeAll');
var inpairs = document.getElementById('removeInpairs');
var removeX = document.getElementById('removeX');
var container = document.getElementById('contenedor');
var contador = 0;

add.addEventListener('click',()=>{
    contador++;
    console.log(contador);
    var div = document.createElement('div');
    div.innerHTML = contador ;
    div.setAttribute('class','square');
    div.setAttribute('id', "id"+ contador);
    container.appendChild(div);
})

remove.addEventListener('click',()=>{
    contador = 0;
    while(container.hasChildNodes){
        container.removeChild(container.firstChild);
    }
})

inpairs.addEventListener('click',()=>{
    let listaDivs = document.querySelectorAll('.square');
    for(let i = 0; i<listaDivs.length; i++){
        if(i%2==0){
            let listaDivs = document.querySelectorAll('.square');
            listaDivs[i].style.display = 'none';        
        }
    }  
})

removeX.addEventListener('click',()=>{
    var cuadrados = document.querySelectorAll('.square');
    for(let i = 0; i<cuadrados.length; i++){
        cuadrados[i].addEventListener('click', function() {
            let listaDivs = document.querySelectorAll('.square');
            listaDivs[i].style.display = 'none';         
          });
    }  
})