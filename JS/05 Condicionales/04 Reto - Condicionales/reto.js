let usuario = 18;
let accion = 'colocad r';
let numero = 20
if (usuario >= 18) {
    console.log('Eres mayor de edad');
}
else if (usuario < 18) {
    console.log('Eres menor de edad');
}
switch (accion) {
    case 'crear':
        console.log(`La accion es ${accion}`);
        break;
    case 'colocar':
        console.log(`La accion es ${accion}`);
        break;
    case 'actualizar':
        console.log(`La accion es ${accion}`);
        break;
    case 'borrar':
        console.log(`La accion es ${accion}`);
        break;
    default:
        console.log(`${accion} no esta permitida como accion`);
}
if (numero % 2 === 0) {
    console.log('El numero es par')
} else {
    console.log('El numero es impar')
} 