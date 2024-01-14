let buttons = document.querySelectorAll('.agregar');
let divs = document.querySelectorAll('.contain');

buttons.forEach(button => {
    button.addEventListener('click', (event) => {
        event.stopPropagation();
        let producto = button.parentElement.firstElementChild
        function Mensaje() {
            const arrayColores = ['red','green','blue','lightblue','orange','purple']
            const colorAleatorio =  arrayColores[Math.floor(Math.random() * arrayColores.length)];
            let mensaje = document.createElement('div');
            mensaje.style.backgroundColor = colorAleatorio
            mensaje.classList.add('mensaje-transicion');
            
            console.log(mensaje);
           
            let header = document.querySelector('header');

            header.appendChild(mensaje);
            setTimeout(() => {

                mensaje.classList.add('mensaje-visible');
                setTimeout(() => {
                    mensaje.innerHTML = `<h4>Producto Agregado al Carrito</h4><p>${producto.innerText}</p>`;
                },500);
            }, 1);


            setTimeout(() => {
                mensaje.classList.remove('mensaje-visible');
                mensaje.innerHTML = ''
            }, 1500);
        }
        Mensaje();
    });
    
});
