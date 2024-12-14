const numero = Math.floor(Math.random() * 9);

console.log(`Número: ${numero}`);

function aoQuadrado() {
  return numero * numero;
}

console.log(`${numero} ao quadrado: ${aoQuadrado()}`);

const nAoQuadrado = (n) => n * n;

console.log(`${numero} ao quadrado: ${nAoQuadrado(numero)}`);

console.log("");

//=============================================================

const carrinhoCompras = {
  quantidade: 2,
  total: 200,
};

// carrinhoCompras.quantidade = 3; ---> [ prática INCORRETA ]

const novoCarrinhoCompras = { ...carrinhoCompras, quantidade: 3, total: 285 }; // ---> [ prática CORRETA ]

console.log(carrinhoCompras);

console.log(novoCarrinhoCompras);
