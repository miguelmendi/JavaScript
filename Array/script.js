//const instrumentos = ['Guitarra', 'Baixo', 'Violão'];
const precos = [49, 99, 69, 89];

const dados = [new String('Tipo 1'), ['Carro', 'Portas', {cor: 'Azul', preco: 2000}], function andar(nome) { console.log(nome) }];

const carros = new Array("Ford", "Fiat", "Honda")

carros[2] = "Ferrari"
carros[3] = "Kia"
carros[20] = "Kia"


console.log(carros.length)

const li = document.querySelectorAll("li")

const arrayLi = Array.from(li)

const obj = {
  0: "Miguel",
  1: "Mendes",
  2: "Teste",
  length: 3,
}

const objArray = Array.from(obj)

console.log(li)
console.log(arrayLi)

const frutas = ['Banana', 'Pêra', ['Uva Roxa', 'Uva Verde']];

console.log(frutas[0].length)

const instrumentos = ['Guitarra', 'Baixo', 'Violão'];
instrumentos.sort()

const idades = [32,21,33,43,1,12,8];
idades.sort()

console.log(instrumentos)
console.log(idades)

const carros1 = ["Ford", "Fiat", "VW"]
carros.unshift("Kia")

console.log(carros1)

console.log(carros1.splice(2,0,"Fusca"))
console.log(carros1)

console.log(['Item1', 'Item2', 'Item3', 'Item4', 'item5'].copyWithin(2, 0, 3))

let htmlString = "<h2>Titulo Principal</h2>"
htmlString = htmlString.split("h2")
htmlString = htmlString.join("h1")

console.log (htmlString)






const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrão'];
// Remova o primeiro valor de comidas e coloque em uma variável
// Remova o último valor de comidas e coloque em uma variável
// Adicione 'Arroz' ao final da array
// Adicione 'Peixe' e 'Batata' ao início da array

const primeiroValor = comidas.shift()
const ultimoValor = comida.pop()
comidas.push("arroz")
comidas.unshift("Peixe", "Batata")

console.log(primeiroValor)
console.log(ultimoValor)
console.log(comidas)

const estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber', 'Julia'];
// Arrume os estudantes em ordem alfabética
// Inverta a ordem dos estudantes
// Verifique se Joana faz parte dos estudantes
// Verifique se Juliana faz parte dos estudantes

estudantes.sort()
estudantes.reverse()

console.log(estudantes)
console.log(estudantes.includes("Joana"))
console.log(estudantes.includes("Juliana"))

let html = `<section>
              <div>Sobre</div>
              <div>Produtos</div>
              <div>Contato</div>
            </section>`
// Substitua section por ul e div com li,
// utilizando split e join

html = html.split("section").join("ul").split("div").join("li")


console.log(html)

const carros2 = ['Ford', 'Fiat', 'VW', 'Honda'];
// Remova o último carro, mas antes de remover
// salve a array original em outra variável

const carrosCopia = carros2.slice

carros2.pop()

console.log(carros)
console.log(carrosCopia)