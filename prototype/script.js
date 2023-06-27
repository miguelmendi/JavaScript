function Pessoa(nome, idade) {
  this.nome = nome
  this.idade = idade
  this.abracar = function () {
    return "abraçou"
  }
}

var obj = {
  nome: "Miguel",
  idade: 33
}

Pessoa.prototype.andar = function (){
  return this.nome + "Pessoa andou"
}

const andre = new Pessoa ("Andre", 28)

console.log(Pessoa.prototype)
console.log(andre.prototype)

const pais = "Brasil"
const cidade = new String("Rio")

const listaAnimais = ["Cachorro", "Gato", "Cavalo"]

const lista = document.querySelectorAll('li');

// Transforma em uma array
const listaArray = Array.prototype.slice.call(lista);
const listaArray2 = Array.from(lista)

const Carro = {
  marca: "Ford",
  preco: 200,
  andar() {
    return true
  }
}

// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa

function pessoa(nome, sobrenome, idade){
  this.nome = nome
  this.sobrenome = sobrenome
  this.idade = idade
}

pessoa.prototype.nomeCompletp = function() {
  return `${this.nome} ${this.sobrenome}`
}

const Miguel = new pessoa("Miguel", "Mendes", 18)

// Liste os métodos acessados por 
// dados criados com NodeList,
// HTMLCollection, Document
Object.getOwnPropertyNames(NodeList.prototype)
Object.getOwnPropertyNames(HTMLCollection.prototype)
Object.getOwnPropertyNames(Document.prototype)

// Liste os construtores dos dados abaixo
const li = document.querySelector('li');

li; // HTMLLIElement
li.click; // Function
li.innerText;// String
li.value; // Number
li.hidden; // Boolean
li.offsetLeft; // Number
li.click(); // Undefined

// Qual o construtor do dado abaixo:
li.hidden.constructor.name; // String
