const carros = ["Ford", "Fiat", "Honda"]

carros.forEach((item, index, array) => {
  array[index] = "Teste"
  console.log(item, index, array)
})

console.log(carros)

const li = document.querySelectorAll('li');

const retornoForeach = li.forEach((item, index) => {
  item.classList.add('ativa' + index)
});

console.log(retornoForeach)

const carros1 = ["Ford", "Fiat", "Honda"]

const novaArray = carros1.map((item, index, array) => {
  console.log(item.toUpperCase, index, array)
  return index
})

const numeros = [2, 4, 5, 6, 78]
const numerosX2 = numeros.map(n => n *  2)
console.log(numerosX2)

console.log(novaArray)

//const aulas = [
 // {
  //  nome: 'HTML 1',
  //  min: 15
 // },
 // {
  //  nome: 'HTML 2',
   // min: 10
 // },
 // {
   // nome: 'CSS 1',
   // min: 20
 // },
  //{
    //nome: 'JS 1',
    //min: 25
  //},
//]

//const tempoAulas = aulas.map(aula => aula.min)

//const nomeAulas = function(aula) {
  //return aula.nome
//}


//const arrayNomeAulas = aulas.map(function(aula) {
  //return aula.nome
//})

//console.log(arrayNomeAulas)
//console.log(tempoAulas)

const aulas1 = [10, 25, 30]

const reduceAulas = aulas1.reduce((acumulador, item) => {
  console.log(acumulador, item)
  return acumulador + item
},  0)

console.log(reduceAulas)

const numeros1 = [10, 25, 30, 3, 54, 33, 22]

const maiorNumero = numeros1.reduce((anterior, atual) => {
  if(anterior > atual)
    return anterior
  else
    return atual
}, 0)

console.log(maiorNumero)


const aulas = [
  {
    nome: 'HTML 1',
    min: 15
  },
  {
    nome: 'HTML 2',
    min: 10
  },
  {
    nome: 'CSS 1',
    min: 20
  },
  {
    nome: 'JS 1',
    min: 25
  },
]

const listaAulas = aulas.reduce((acumulador, atual, index) => {
  acumulador[index] = atual.nome;
  return acumulador;
}, {})

const frutas = ["Banana", "Pêra", "Uva"]

const temUva = frutas.some((item) =>{
  return item === "Uva"
})

const every = frutas.every((fruta) =>{
  console.log(fruta)
  return fruta
})

const indexUva = frutas.findIndex (item =>{
  return item === "Uva"
})

console.log(indexUva)

console.log(every)

console.log(temUva)

const numeros2 = [6, 43, 22, 88, 101, 29];

const maiorQue3 = numeros.every (n => n > 3)

console.log(maiorQue3)

const frutas1 = ['Banana', undefined, null, '', 'Uva', 0, 'Maçã'];

const arrayFrutas = frutas1.filter((item)=>{
  console.log(item)
  return item === item
})

console.log(arrayFrutas)

const aulas2 = [
  {
    nome: 'HTML 1',
    min: 15
  },
  {
    nome: 'HTML 2',
    min: 10
  },
  {
    nome: 'CSS 1',
    min: 20
  },
  {
    nome: 'JS 1',
    min: 25
  },
]

const maiores15 = aulas.filter((aula) => {
  return aula.min > 15
})

console.log(maiores15)

// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso

const cursos = document.querySelectorAll(".curso")
const arrayCursos = Array.from(cursos)

const objetoCurso = arrayCursos.map((curso) => {
  const titulo = curso.querySelector("h1").innerText
  const descricao = curso.querySelector("p").innerText
  const aulas = curso.querySelector(".aulas").innerText
  const horas = curso.querySelector(".horas").innerText
  return {
    titulo,
    descricao,
    aulas,
    horas,
  }
})

console.log(objetoCurso)


// Retorne uma lista com os
// números maiores que 100
const numeros3 = [3, 44, 333, 23, 122, 322, 33];

const maioresQue100 =  numeros3.filter(n => n > 100)

console.log(maioresQue100)


// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos = ['Guitarra', 'Baixo', 'Bateria', 'Teclado']
const possuiBaixo = instrumentos.some((item) => {
  return item === "Baixo"
})


// Retorne o valor total das compras
const compras = [
  {
    item: 'Banana',
    preco: 'R$ 4,99'
  },
  {
    item: 'Ovo',
    preco: 'R$ 2,99'
  },
  {
    item: 'Carne',
    preco: 'R$ 25,49'
  },
  {
    item: 'Refrigerante',
    preco: 'R$ 5,35'
  },
  {
    item: 'Quejo',
    preco: 'R$ 10,60'
  }
]

const valorTotal = compras.reduce((acumulador, item) => {
  const precoLimpo = +item.preco.replace("R$ ", "").replace(",", ".")
  return acumulador + precoLimpo
}, 0)
