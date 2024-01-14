let regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

export class Validar {
    constructor(correo) {
        this.correo = correo;
    }

    validarCorreo() {
        let test = false;
        if (regex.test(this.correo)) {
            test = true;
            console.log('Formato correcto');
        } else {
            test = false;
            console.log('Formato incorrecto');
        }
        return test;
    }
}
