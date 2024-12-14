const dizerMeuNome = () => "Andrew";

const rodarFuncoes = (fn) => fn();

rodarFuncoes(dizerMeuNome);

rodarFuncoes(() => console.log("Olá,", rodarFuncoes(dizerMeuNome)));

console.log(rodarFuncoes(Math.random));

console.log(rodarFuncoes(Date));
