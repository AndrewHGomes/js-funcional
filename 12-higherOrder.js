const numeros = [2, 4, 8, 16];

const aoQuadrado = (n) => n * n;

const resultado = numeros.map(aoQuadrado);

console.log(resultado);

//==========================================

const pause = (esperar) => (fn) => setTimeout(fn, esperar);

pause(1000)(() => console.log("esperando 1 segundo"));

const espera2000 = pause(2000);
const espera3000 = pause(3000);

espera2000(() => console.log("esperando 2 segundos"));
espera3000(() => console.log("esperando 3 segundos"));
