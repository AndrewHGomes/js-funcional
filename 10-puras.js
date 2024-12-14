const n1 = Math.floor(Math.random() * 9);
const n2 = Math.floor(Math.random() * 9);

const soma = (x, y) => x + y;

console.log(n1, n2);
console.log(soma(n1, n2));

console.log("");

//=======================================================

const pi = Math.PI.toFixed(2);
const raio = Math.floor(Math.random() * 9);

const calcularCircunferencia = (pi, raio) => pi * (raio * raio);

console.log(pi, raio);
console.log(calcularCircunferencia(pi, raio));

console.log("");

//=======================================================

const pessoa = {
  nome: "Andrew",
  idade: 36,
};

console.log(pessoa);
const outraPessoa = (pessoa, nome, idade) => ({ ...pessoa, nome, idade });

console.log(outraPessoa(pessoa, "Viviane", 39));
