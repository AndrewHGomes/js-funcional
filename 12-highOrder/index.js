const pessoas = [
  {
    nome: "Andrew",
    idade: 36,
    profissao: "Desenvolvedor Web",
  },
  {
    nome: "Irvin",
    idade: 34,
    profissao: "Desenvolvedor FullStack",
  },
  {
    nome: "Steice",
    idade: 32,
    profissao: "Musicoterapeuta",
  },
  {
    nome: "Renan",
    idade: 30,
    profissao: "Quality Assurance",
  },
];

//------------------------------------------------------------------

pessoas.forEach((pessoa) => {
  console.log(pessoa);
});

console.log("");

//------------------------------------------------------------------

const nomes = pessoas.map((pessoa) => {
  return pessoa.nome;
});

console.table(nomes);

console.log("");

//------------------------------------------------------------------

const devs = pessoas.filter((pessoa) => {
  return pessoa.profissao.includes("Desenvolvedor");
});

console.table(devs);

console.log("");

//------------------------------------------------------------------

const somaIdades = pessoas.reduce((acc, pessoa) => {
  return acc + pessoa.idade;
}, 0);

console.log(`A soma das idades é de ${somaIdades} anos`);

console.log("");

//------------------------------------------------------------------

const profissoes = pessoas.reduce((acc, pessoa) => {
  if (acc[pessoa.profissao]) {
    acc[pessoa.profissao].push(pessoa);
  } else {
    acc.pessoa.profissao = [pessoa];
  }

  return acc;
}, {});

console.table(profissoes);
