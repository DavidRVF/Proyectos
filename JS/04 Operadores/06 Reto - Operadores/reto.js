let a,b;
a = 1;
b = 2;
console.log('¿El numero 1 es mayor que el numero 2? ', !(a > b));
console.log('¿El numero 1 es menor que el numero 2? ', !(a < b));
console.log('¿El numero 1 es igual al numero 2? ', a === b);
let text1,text2;
text1 = 'text1';
text2 = 'text2';
console.log('¿El texti 1 es igual al texto 2? ', text1 === text2);
const objeto1 = {
    numero: 1
};
const objeto2 = {
    numer: 1
};
console.log('¿Los objetos son iguales?', objeto1 === objeto2);
console.log('AND LOGICO: ', (objeto1 === objeto2 && text1 === text2));
console.log('OR TRUE: ', (objeto1 !== objeto2 || text1 === text2));
let num1 = 10;
let num2 = 3;
console.log(`La suma de ${num1} + ${num2}: `, num1 + num2);
console.log(`La resta de ${num1} - ${num2}: `, num1 - num2);
console.log(`La multiplicacion de ${num1} * ${num2}: `, num1 * num2);
console.log(`La division de ${num1} / ${num2}: `, num1 / num2);
console.log('10 nodulo de 3: ', num1 % num2);
