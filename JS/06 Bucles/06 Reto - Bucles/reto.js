for(let i = 1; i <=5; i++) {
    console.log(i);
}
console.log('--------');
const colores = ['rojo', 'verde', 'azul', 'amarillo'];
for(let i of colores) {
    console.log(i);
}
console.log('--------');
const persona = {
    nombre: 'David',
    edad: 27,
    profesion: 'Desallorador web'
}
for(let i in persona) {
    console.log(`${i}:`, persona[i]);
}
console.log('--------');
let i = 0;
while(i*i < 100) {
    i++;
}
console.log('El numero mas cercano a 100 cuyo cuadrado es menor que 100 es: ',i);
console.log('--------');
for(let i = 0; i <= 10; i += 2) {
    if (i === 0) {
        continue
    }
    console.log(i);
}
console.log('--------');
let num = 0;
do {
    num += num%2 === 0;
    num++;
    console.log(num)
}while(num < 10)