const pessoa =  new Object({
  nome: "Miguel"
})

console.log(pessoa)

const carro = {
  rodas: 4,
  Init(valor){
    this.marca = valor
    return this
  },
  acelerar(){
    return this.marca + " acelerou"
  },
  buzinar() {
    return this.marca + " buzinou"
  }
}

const honda = Object.create(carro).Init("Honda")

console.log(honda.acelerar())

const ferrari = Object.create(carro).Init("Ferrari")
console.log(ferrari.acelerar())

const funcaoAutomovel = {
  acelerar() {
    return " acelerou"
  },
  buzinar() {
    return " buzinou"
  },
}

const moto = {
  rodas: 2,
  capacete: true,
}

//Object.assign(moto, funcaoAutomovel)

//console.log(moto)
//moto.rodas = 5;

console.log(moto)

Object.defineProperties(moto, {
  rodas: {
    get() {
      return this._rodas
    },
    set(valor) {
      this._rodas = valor * 4
    }
  }
})

moto.rodas= 5
console.log(moto)

const innerHeightConfig = Object.getOwnPropertyDescriptor(window, "innerHeight")

Object.getOwnPropertyNames(Array.prototype)

const frutas = ["Banana"]

console.log(Object.getPrototypeOf(frutas))
console.log(Array.prototype)

const frutas1 = ['Banana', 'Pêra'];
const frutas2 = ['Banana', 'Pêra'];

const novaFruta = frutas1

Object.is(frutas1, frutas2)

const carro1 = {
  marca: 'Ford',
  ano: 2018,
}

Object.freeze(carro)

carro.marca = "Honda"

// Crie uma função que verifique
// corretamente o tipo de dado

function verificarDado(dado) {
  return Object.prototype.toString.call(dado)
}

console.log(verificarDado([]))

// Crie um objeto quadrado com
// a propriedade lados e torne
// ela imutável

const quadrado = {}
Object.defineProperties(quadrado, {
  lados: {
    value:4,
    e
  }
})

// Previna qualquer mudança
// no objeto abaixo
const configuracao = {
  width: 800,
  height: 600,
  background: '#333'
}

Object.freeze(configuracao)

// Liste o nome de todas
// as propriedades do
// protótipo de String e Array

console.log(Object.getOwnPropertyNames(String.prototype))
console.log(Object.getOwnPropertyNames(Array.prototype))

