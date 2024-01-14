class Vehiculo {
    constructor(numRuedas, capacidad) {
        this.numRuedas = numRuedas;
        this.capacidad = capacidad;
    }

    detalles() {
        return `Este es un vehiculo que tiene ${this.numRuedas} ruedas. Con la capacidad de ${this.capacidad} pasajeros`;
    }
}
class Moto extends Vehiculo {
    constructor(numRuedas,capacidad, modelo, año) {
        super(numRuedas,capacidad);
        this.modelo = modelo;
        this.año = año;
    }
    detalles() {
        console.log( `${super.detalles()}. Es una moto del modelo ${this.modelo} del año ${this.año}`);
    }
}
class Bici extends Vehiculo {
    constructor(numRuedas, capacidad,tipo) {
        super(numRuedas,capacidad);
        this.tipo = tipo;
    }
    detalles() {
        console.log(`${super.detalles()}. Es una bicicleta tipo ${this.tipo}`)
    }
}


const Mo = new Moto(2,2, 'kawasaki', 2023)
const Bi = new Bici(2,1,'Carreas')

Mo.detalles();
Bi.detalles();