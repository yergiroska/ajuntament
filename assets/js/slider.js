
var cons=1;
function slideShow(){
    let elemento = document.getElementById('galeria').getElementsByTagName('li');
    for(let n = cons; n <= elemento.length; n++ ){
        
        elemento[n].className='selected';
    for(let i=0; i < elemento.length; i++){ 
        if(i !=cons){
            
            elemento[i].className='noselected';

        }
    }    
    cons++;
    break;
    
    }
    if (cons >= elemento.length){
        cons=0;
    }
    return  false;
}
window.onload = function (){
    setInterval(slideShow,6000);
}
