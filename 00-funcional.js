const sucessor = (x) => x + 1;

console.log(`O sucessor de 5 é ${sucessor(5)}`);

const antecessor = (x) => x - 1;

console.log(`O antecessor de 5 é ${antecessor(5)}`);

//--------------------------------------------

const soma = (x, y) => x + y;

console.log(`A soma entre 7 e 3 é ${soma(7, 3)}`);

//--------------------------------------------

const areaCirculo = (raio) => Math.PI * Math.pow(raio, 2);

console.log(`A área de um círculo de raio 5 é ${areaCirculo(5).toFixed(2)}`);

console.log(`A área de um círculo de raio 9 é ${areaCirculo(9).toFixed(2)}`);

//--------------------------------------------

const quadradoDaSoma = (x, y) => Math.pow(x + y, 2);

console.log(`O quadrado da soma entre 5 e 9 é ${quadradoDaSoma(5, 9)}`);

//--------------------------------------------

const aoCubo = (x) => Math.pow(x, 3);

console.log(`10³ é ${aoCubo(3)}`);

//--------------------------------------------

const produto = (x, y) => x * y;

console.log(`O produto de 7 e 5 é ${produto(7, 5)}`);

//--------------------------------------------

const imc = (peso, altura) => peso / Math.pow(altura, 2);

console.log(`O imc para peso 70kg e altura de 1.80 é ${imc(85, 1.85)}`);

//--------------------------------------------

const precoDolar = (real, dolar) => real / dolar;

console.log(
  `Com R$ 123.00 posso comprar U$ ${precoDolar(123, 6.09).toFixed(2)}`
);

//--------------------------------------------

const somaDosQuadrados = (a, b) => Math.pow(a, 2) + Math.pow(b, 2);

console.log(`A soma dos quadrados de 10 e 20 é ${somaDosQuadrados(10, 20)}`);

//--------------------------------------------
