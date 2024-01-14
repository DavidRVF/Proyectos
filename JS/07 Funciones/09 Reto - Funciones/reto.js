
// let formulario = {
//     nombre: 'david',
//     email: '',
//     mensaje: 'HOLA'
// }
// function validarFormulario(nombre, email, mensaje) {
//     if(nombre != '' && email != '' && mensaje != '') {
//         enviarFormulario();    
//     }else {
//         console.log('Porfavor completa todos los campos');
//     }

// }   
// function enviarFormulario() {
//     console.log('Formulario enviado con exito');
// }
// validarFormulario(formulario.nombre,formulario.email,formulario.mensaje)
 let formulario2 = {
    nombre: 'david',
    email: 'email@gmial.com',
    mensaje: 'HOLA'
}
function validarFormulario2(nombre,email,mensaje) {
    let validar = false;
    if(nombre != '' && email != '' && mensaje != '') {
        validar = true;
        console.log('Campos Validados Correctamente')
    } else
    {
        validar = false;
        console.log('Campos incorrectos')
    }
    return validar
}
function enviarFormulario2(Exito, Error) {
    if(validarFormulario2(formulario2.nombre,formulario2.email,formulario2.mensaje)) {
        console.log('El Formulario se envio con Exito')
        Exito()
    } else {
        console.log('Porfavor rellena todos los campos')
        Error()
    }
}
enviarFormulario2(
    () => {for(let i in formulario2) {
        console.log(formulario2[i])
    }},
    () => {for(let i in formulario2) {
        if(formulario2[i] === '') {
            console.log(`Rellena el campo ${i}`)
        }
    }}
)