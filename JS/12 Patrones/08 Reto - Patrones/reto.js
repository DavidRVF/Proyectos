class Usuario {
    constructor() {
        this.listaUsuarios = [];
    }
    agregarUsuario(usuario) {

        console.log(`Usuario '${usuario}' agregado.`)
        this.listaUsuarios.push(usuario)

        
    }
    mostrarUsuarios() {
        console.log('Lista de Usuarios')
        this.listaUsuarios.forEach(usuario =>
            console.log(usuario))
    }
}
const Mediadior = new Usuario()
class Persona {
    constructor(usuario) {
        this.usuario = usuario;
    }
    enviarUsuario() {
        Mediadior.agregarUsuario(this.usuario)
    }
}
const usuario = new Persona('Juan')
const usuario2 = new Persona('Maria')
usuario.enviarUsuario();
usuario2.enviarUsuario();
Mediadior.mostrarUsuarios();
