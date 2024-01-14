function llamar(enExito, enError) {
    let exito = false;
    // .....
    if (exito) {
        enExito();
        console.log('Este fue el Exito')
    } else {
        enError();
        console.log('Este fue el error')
    }
}

llamar(
    function() { console.log('Exito'); },
    function() { console.log('Error'); }
);