function defaultParam(param = "parâmetro padrão") {
  console.log(`Este é o ${param}`);
}

defaultParam("parâmetro");
defaultParam("argumento");
defaultParam();

console.log("");

//------------------------------------------

function dizerOla(nome = "Gente boa") {
  console.log(`Olá, ${nome}`);
}

dizerOla("Andrew");
dizerOla("Viviane");
dizerOla();

console.log("");

//------------------------------------------

function somarDoisNumeros(a, b = 30) {
  console.log(`Somando ${a} e ${b}: ${a + b}`);
}

somarDoisNumeros(51, 20);
somarDoisNumeros(10);

console.log("");

//------------------------------------------

function criarUsuario(nome, email, senha, tipo = "Normal") {
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
criarUsuario("Irvin", "lemao@email", 1234);
