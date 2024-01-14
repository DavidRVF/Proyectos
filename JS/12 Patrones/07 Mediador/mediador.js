class VoluntariadoMediador {
	comunicar(nombre, mensaje) {
		console.log(`Voluntario: ${nombre} - Mensaje: ${mensaje}`);
	}
}

const mediador = new VoluntariadoMediador();

class PersonaVoluntario {
	constructor(nombre) {
		this.nombre = nombre;
	}

	enviar(mensaje) {
		mediador.comunicar(this.nombre, mensaje);
	}
}

const voluntario1 = new PersonaVoluntario('Juan');
const voluntario2 = new PersonaVoluntario('María');

voluntario1.enviar('Quisiera unirme a una organización de voluntariado');d
// Voluntario: Juan - Mensaje: Quisiera unirme a una organización de voluntariado

voluntario2.enviar('Tengo experiencia en trabajos sociales');
// Voluntario: María - Mensaje: Tengo experiencia en trabajos sociales