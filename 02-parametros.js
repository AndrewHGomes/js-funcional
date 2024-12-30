function withParam(param) {
  console.log(`Recebendo um ${param}.`);
}

withParam("parâmetro");
withParam("argumento");

console.log("");

//-------------------------------------------

function dobro(numero) {
  console.log(`O dobro de ${numero} é ${numero * 2}`);
}

dobro(6);
dobro(99);

console.log("");

//-------------------------------------------

function somarDoisNumeros(a, b) {
  console.log(`Somando ${a} e ${b}: ${a + b}`);
}

somarDoisNumeros(51, 20);
somarDoisNumeros(10, 10);

console.log("");

//-------------------------------------------

function criarUsuario(nome, email, senha, tipo) {
  const usuario = {
    nome: nome,
    email: email,
    senha: senha,
    tipo: tipo,
  };

  console.log(usuario);
}

criarUsuario("Andrew", "andrew@email", 1324, "VIP");
criarUsuario("Viviane", "vivi@email", 4321, "admin");
