import { Validar } from "./validacionReto.js";

class Correo extends Validar{
    constructor(correo) {
        super(correo)
    }
    EnviarCorreo() {
        if(this.validarCorreo()) {
            console.log('El correo esta en el formato Correcto ')
        }else {
            console.log('Verifique el formato del correo')
        }
    }
}
const enviar = new Correo('usuario@dominio.com');
enviar.EnviarCorreo();