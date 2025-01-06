function Pessoa(nome, sobrenome, idade, profissao) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.idade = idade;
  this.profissao = profissao;

  this.apresentarSe = function () {
    return `${this.nome} ${this.sobrenome}, ${this.idade} anos, ${this.profissao}.`;
  };
}

const andrew = new Pessoa("Andrew", "Gomes", 36, "Desenvolvedor Web");

const viviane = new Pessoa("Viviane", "Rodrigues", 39, "Enfermeira");

console.log(andrew.apresentarSe());

console.log(viviane.apresentarSe());
