document.addEventListener('DOMContentLoaded', function(){
    iniciarApp();
})

function iniciarApp(){
    navegacionFija();
    crearGaleria();
    scrollNav();
}

function scrollNav(){
    const enlaces = document.querySelectorAll('.navegacion-principal a');

    enlaces.forEach(enlaces =>{
        enlaces.addEventListener('click',function(e){
            
            e.preventDefault();

            const seccionScroll = e.target.attributes.href.value;
            const seccion = document.querySelector(seccionScroll);

            seccion.scrollIntoView(
                {
                    behavior: 'smooth',
                }
            );
        })
    });
}

function crearGaleria(){
    const galeria = document.querySelector('.galeria-imagenes');

    for(let i = 1; i <= 12; i++ ) {
        const imagen = document.createElement('picture');

        imagen.innerHTML = `
            <source srcset="build/img/thumb/${i}.avif" type="image/avif">
            <source srcset="build/img/thumb/${i}.webp" type="image/webp">
            <img loading="lazy" width="200" height="300" src="build/img/thumb/${i}.jpg" alt="imagen galeria">
        `;

        imagen.onclick = () => mostrarImagen(i);

        galeria.appendChild(imagen);
    }
}

function navegacionFija(){
    const barra = document.querySelector('.header');
    const sobreFestival = document.querySelector('.sobre-festival');

    const body = document.querySelector('body');

    window.addEventListener('scroll',function(){

        if(sobreFestival.getBoundingClientRect().top < 0){
            barra.classList.add('fijo');
            body.classList.add('body-scroll');
        }
        else{
            barra.classList.remove('fijo');
            body.classList.remove('body-scroll');
        }
    });
}

function mostrarImagen(i){
    
    //Crear el overlay con la imagen
    const imagen = document.createElement('picture');

    imagen.innerHTML = `
        <source srcset="build/img/grande/${i}.avif" type="image/avif">
        <source srcset="build/img/grande/${i}.webp" type="image/webp">
        <img loading="lazy" width="200" height="300" src="build/img/grande/${i}.jpg" alt="imagen galeria">
    `;

    const overlay = document.createElement('DIV');
    overlay.appendChild(imagen);
    overlay.classList.add('imagen-overlay');
    overlay.onclick = function(){
        overlay.remove();
        const body = document.querySelector('body');
        body.classList.remove('fijar-body');
    }

    ///Creando boton para cerrar el modal
    const cerrarModal = document.createElement('P');
    cerrarModal.textContent = 'X';
    cerrarModal.classList.add('cerrar');

    overlay.appendChild(cerrarModal);

    //Funcion para cerrar la imagen abierta
    cerrarModal.onclick = () =>{
        overlay.remove();
        const body = document.querySelector('body');
        body.classList.remove('fijar-body');
    }

    //Añadirlo al html
    const body = document.querySelector('body');
    body.appendChild(overlay);
    body.classList.add('fijar-body');

}