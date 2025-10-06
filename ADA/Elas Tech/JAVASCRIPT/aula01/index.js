var nome = "Walisson Silva";
var idade = 27;

var nomeDoProfessor = "Gustavo Guanabara"; //Camel case - padrão do js - sem underlines
var idadeDoProfessor = 40;

//tipagem dinamica -js : infere o tipo de dados, tipagem fraca
//typescript tem uma tipagem estática
//Js é case sensitive

var estudando = true; //boolean
var altura = 1.75; //float

console.log("Nome: " + nome, typeof nome);
console.log("Idade: " + idade, typeof idade);
console.log("Nome do professor: " + nomeDoProfessor, typeof nomeDoProfessor);
console.log("Idade do professor: " + idadeDoProfessor, typeof idadeDoProfessor);
console.log("Estudando: " + estudando, typeof estudando);
console.log("Altura: " + altura, typeof altura);

var semConteudo; //undefined
console.log("Sem conteudo: " + semConteudo, typeof semConteudo);

var curso = 'front-end em React', topico = 'JavaScript basico'; //pode declarar multiplas variaveis em uma linha
console.log("Curso: " + curso, typeof curso);
console.log("Topico: " + topico, typeof topico);

//Não utilize var - escopo global
//utilize let (escopo de bloco) ou const (constante - valor imutavel)
let notaDoAluno = 10;
const mediaDoAluno = 8;

notaDoAluno = 9; //reatribuição de valor
//mediaDoAluno = 5; //erro - não pode reatribuir valor
