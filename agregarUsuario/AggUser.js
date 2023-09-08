const tipoUsuario = document.querySelectorAll('.tipo-usuario ul li a');
const tipoUserText = document.querySelector('.tipo-usuario span');

function seleccionar(){

    tipoUsuario.forEach((li)=>{
        li.addEventListener('click', ()=>{
            let textInterno = li.innerText;
            tipoUserText.innerText = `${textInterno}`;
        })
    });
}

seleccionar();