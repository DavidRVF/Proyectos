class Gadget {
	constructor(nombre, precio) {
		this.nombre = nombre;
		this.precio = precio;
	}
}

const info = {
	mostrarInfo: function () {
		console.log(`${this.nombre} tiene un precio de $${this.precio}`);
	}
};
Object.assign(Gadget.prototype, info);
const datos = new Gadget('iPhone',999)
datos.mostrarInfo();