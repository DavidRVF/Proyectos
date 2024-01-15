let button = document.querySelector('button');
let img = document.querySelector('img');
let imagen1 = 'https://media.istockphoto.com/id/1035676256/es/foto/fondo-de-galaxia-y-estrellas.jpg?s=612x612&w=0&k=20&c=CCOStm5MJtOBnAkAcYr_qH1iqi4Zae8ScvNHDEnSDVs=';
let imagen2 = 'https://img.freepik.com/foto-gratis/nave-espacial-orbita-galaxia-oscura-cometa-azul-brillante-generado-ia_188544-9662.jpg?size=626&ext=jpg&ga=GA1.1.1880011253.1705190400&semt=sph';
let imagen3 = 'https://www.tuexperto.com/wp-content/uploads/2019/12/imagenes-espacio-2.jpg';
let imagenPredeterminada = 'https://img.freepik.com/foto-gratis/fondo-pantalla-abstracto-nebulosa-ultra-detallado-4_1562-749.jpg?size=626&ext=jpg&ga=GA1.1.1880011253.1705190400&semt=sph'
img.src = imagenPredeterminada;
const arrayImagenes = [ imagen1, imagen2, imagen3,imagenPredeterminada]
let i = 0;

button.addEventListener('click', (event) => {

    // if(i < 2) {
    //     i++;
    // const recorrerImagen = arrayImagenes[i]
    // img.src = recorrerImagen;
    // console.log(i)
    // }else{
    //     img.src = 'https://img.freepik.com/foto-gratis/fondo-pantalla-abstracto-nebulosa-ultra-detallado-4_1562-749.jpg?size=626&ext=jpg&ga=GA1.1.1880011253.1705190400&semt=sph';
    //     i = -1;
    // }
    i = (i + 1) % arrayImagenes.length;
    const recorrerImagen = arrayImagenes[i];
    img.src = recorrerImagen;
    event.stopPropagation();
});