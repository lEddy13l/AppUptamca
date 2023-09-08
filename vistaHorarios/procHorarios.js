const busquedaSeccion = document.querySelectorAll('.busquedaSeccion ul li a');
const busquedaSeccionTexto = document.querySelector('.busquedaSeccion span');
const busquedaTrayecto = document.querySelectorAll('.busquedaTrayecto ul li a');
const busquedaTrayectoTexto = document.querySelector('.busquedaTrayecto span');

function seleccionar(){

    busquedaSeccion.forEach((li)=>{
        li.addEventListener('click', ()=>{
            let textInterno = li.innerText;
            busquedaSeccionTexto.innerText = `${textInterno}`;
        })
    });

    busquedaTrayecto.forEach((li)=>{
        li.addEventListener('click', ()=>{
            let textInterno = li.innerText;
            busquedaTrayectoTexto.innerText = `${textInterno}`;
        })
    });
}

seleccionar();