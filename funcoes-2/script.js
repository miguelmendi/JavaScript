const perimetro = new Function("lado", "return lado * 4")

function somar(n1, n2) {
  return n1 + n2;
}

console.log(somar(3,3))

function darOi() {
  console.log("Oi para você")
}

darOi.call({}, "André", 20)

window.marca = "Carro"
window.ano = 288

function descricaoCarro(velocidade) {
  console.log(this)
  console.log(this.marca + " " + this.ano + velocidade)
}

descricaoCarro.call({marca: 'Honda', ano: 2015}, 100)

const carros = ['Ford', 'Fiat', 'VW'];
const frutas = ["Banana", "Uva", "Pêra"]

carros.forEach.call(frutas, (item) => {
  console.log(item)
})

function Dom(seletor) {
  this.element = document.querySelector(seletor)
}

Dom.prototype.ativo = function(classe) {
  this.element.classList.add(classe)
}

const ul = new Dom("ul")

//const li = {
 // element: document.querySelector("li")
//}

//ul.ativo.call(li, "ativo")

//console.log(ul)

const frutas1 = ['Uva', 'Maçã', 'Banana'];

Array.prototype.pop.call(frutas)
frutas.pop

const arrayLike = {
  0: "Item 1",
  1: "Item 2",
  2: "Item 3",
  length: 3,
}

const li = document.querySelectorAll('li');
const arrayLi = Array.from(li)

const filtro = Array.prototype.filter.bind(li, (item) =>{
  return item.classList.contains("ativo")
})

console.log(filtro ())

console.log(li)

const numeros = [33, 23, 2, 456, 54, 8954, 24, 4]

const $ = document.querySelectorAll.bind(document)

const carro = {
  marca: 'Ford',
  ano: 2018,
  acelerar: function(aceleracao, tempo) {
    return `${this.marca} acelerou ${aceleracao} em ${tempo}`;
  }
}

const honda = {
  marca: "Honda"
}

const acelerarHonda = carro.acelerar.bind(honda, 100)

console.log(acelerarHonda(30))

console.log(carros)

// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce

const paragrafos = document.querySelectorAll("p")

const totalCaracteres = Array.prototype.reduce.call(paragrafos, (acumulador, item) =>{
  return acumulador + item.innerText.length
}, 0)

console.log(totalCaracteres)
console.log(paragrafos)


// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.

function criarElemento(tag, classe, conteudo) {
  const elemento = document.createElement(tag)
  classe ? elemento.classList.add(classe) : null
  conteudo ? elemento.innerHTML = conteudo : null
  return elemento
}

console.log(criarElemento("li", "azul", "Esse é o conteudo"))


// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico

const h1Titulo = criarElemento.bind(null, "h1", "titulo")

console.log(h1Titulo("Cursos de JavaScript"))