let boton = document.querySelector('button')
let div = document.querySelector('div')
const arrayColores = ['blue','red','green','black','purple','white','brown']
let letras = document.querySelector('h1')
let o = document.querySelector('p')
let header = document.querySelector('header')
let main = document.querySelector('main')
let footer = document.querySelector('footer').setAttribute('style', 'color:white; background-color: black')
//boton.addEventListener('click', (event) => {
//    eventoBoton(event);
    
//})
boton.onclick = eventoBoton;


function eventoBoton() {
         const colorAleatorio =  arrayColores[Math.floor(Math.random() * arrayColores.length)];
        div.style.backgroundColor = colorAleatorio
        div.style.borderRadius = '10%'
        letras.setAttribute('style', 'font-size: 15px; border: 1px solid yellow; color: lightblue; display: inline-block')
        o.setAttribute('style', 'font-size: 20px; color:blue; font-familt: arial ')
        header.style.backgroundColor = 'gray'
        main.style.height = '500px';
        console.log('haz echo click')
};

main.addEventListener('click', () => {
    console.log('haz echo click aqui')
    main.style.backgroundColor = 'red';
});
//boton.removeEventListener('click',eventoBoton);