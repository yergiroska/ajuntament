/*Menu que se queda fijo en la parte superior*/
document.addEventListener('DOMContentLoaded', function() {
    const header = document.getElementById('header');
    const menu3 = document.getElementById('menu3');
    const offsetTop = menu3.offsetTop;

    window.addEventListener('scroll', function() {
        if (window.pageYOffset > offsetTop) {
            menu3.classList.add('fixed');
            header.classList.add('hidden');
        } else {
            menu3.classList.remove('fixed');
            header.classList.remove('hidden');
        }
    });
});

/*Formulario de entradas*/
function entroEnFoco(elemento){
    elemento.className="enfoco";

}
function SalirEnFoco(elemento){
    elemento.className="";
}

function revisarObligatorio(elemento){
    let valor = elemento.value;
    if(valor==""){
        elemento.className="obligatorio";
        elemento.placeholder="campo obligatorio";
    }else {
        elemento.className="";
    }
}

/*Reloj que actualiza cada segundo*/
document.addEventListener('DOMContentLoaded', function() {
    function updateClock() {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');
        const formattedTime = `${hours}:${minutes}:${seconds}`;
        document.getElementById('clock').textContent = formattedTime;
    }

    setInterval(updateClock, 1000); // Actualiza cada segundo
});


