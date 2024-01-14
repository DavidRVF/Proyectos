
const caja = document.getElementById('caja');
const mensaje = document.getElementById('mensaje');
const cambiarEstiloBtn = document.getElementById('cambiar-estilo-btn');


    caja.classList.toggle('rojo');
    caja.classList.toggle('azul');
    caja.classList.toggle('verde');

    // Modificar directamente la propiedad CSS
    caja.style.borderRadius === "40";
    if (caja.style.borderRadius === '50%') {
        caja.style.borderRadius = '0';
    } else {
        caja.style.borderRadius = '50%';
    }

    // Añadir atributo de estilo
    mensaje.setAttribute('style', 'font-size: 18px; color: #313;');

    // Añadir y remover clases con toggle
    mensaje.classList.toggle('negrita');
    mensaje.classList.toggle('negrita')


