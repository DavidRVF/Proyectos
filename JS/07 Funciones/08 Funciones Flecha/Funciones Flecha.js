function llamar(enExito, enError) {
    let exito = true;
    // .....
    if (exito) {
        enExito();
    } else {
        enError();
    }
}

llamar(
    () => console.log('Exito'),
    () => console.log('Error')
);

[1, 2, 3, 40].forEach((a,b,c,d) => console.log(a,b,c,d));