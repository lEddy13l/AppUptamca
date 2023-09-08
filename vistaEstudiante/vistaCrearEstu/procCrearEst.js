const seccion = document.querySelectorAll('.seccion ul li a');
const seccionTexto = document.querySelector('.seccion span');
const trayecto = document.querySelectorAll('.trayecto ul li a');
const trayectoTexto = document.querySelector('.trayecto span');

function seleccionar(){

    seccion.forEach((li)=>{
        li.addEventListener('click', ()=>{
            let textInterno = li.innerText;
            seccionTexto.innerText = `${textInterno}`;
        })
    });

    trayecto.forEach((li)=>{
        li.addEventListener('click', ()=>{
            let textInterno = li.innerText;
            trayectoTexto.innerText = `${textInterno}`;
        })
    });
}

seleccionar();