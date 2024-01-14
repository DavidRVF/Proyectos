console.log(sumar(1,2));

let sumar2 = function(a,b) {
    return a + b;
}
console.log(sumar2(1,2));

function sumar(a,b) {
    return a + b;
}


let persona = { nombre: 'Toshiro' };

// usando el operador spread ...
let a = {
    ...persona
};

// usando el método  Object.assign()
let b = Object.assign({}, persona);

// usando JSON
let c = JSON.parse(JSON.stringify(persona));