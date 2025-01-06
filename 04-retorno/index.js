function fazerVitamina(fruta1, fruta2) {
  return `Vitamina de ${fruta1} e ${fruta2}`;
}

const copo = fazerVitamina("banana", "maçã");

console.log(copo);

console.log("");

//--------------------------------------------------

function withReturn(param) {
  return `Este é o ${param}`;
}

console.log(withReturn("retorno"));

console.log("");

//--------------------------------------------------

function calcularMedia(a, b) {
  const media = (a + b) / 2;
  return `A média entre ${a} e ${b} é ${media}`;
}

const resultado = calcularMedia(8, 5);

console.log(resultado);

console.log("");

//--------------------------------------------------

function criarProduto(nome, preco) {
  const produto = {
    nome,
    preco,
  };

  return produto;
}

const celular = criarProduto("Motorola One Fusion", 1850);

console.log(celular);

console.log("");

//--------------------------------------------------

function areaRetangular(base, altura) {
  const area = base * altura;
  return `A área é de ${area}`;
}

const retangulo = areaRetangular(6, 3);

console.log(retangulo);

console.log("");

//--------------------------------------------------

function areaQuadrado(lado) {
  return areaRetangular(lado, lado);
}

const quadrado = areaQuadrado(5);

console.log(quadrado);
