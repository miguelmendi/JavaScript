Number.isNaN(NaN)
console.log(Number.isInteger(10.54645))

parseFloat('99.50'); // Mesma função sem o Number
Number.parseFloat('99.50'); // 99.5
Number.parseFloat('100 Reais'); // 100
Number.parseFloat('R$ 100'); // NaN

parseInt('99.50', 10); // 99
parseInt(5.43434355555, 10); // 5
Number.parseInt('100 Reais', 10); // 100

const preco = 10.3546648
console.log(preco.toFixed(4))

let valor = 48.49
valor = valor.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})

console.log(valor)

// Retorne um número aleatório
// entre 1050 e 2000

Math.floor(Math.random() * (2000 - 1050 + 1)) + 1050; 

// Retorne o maior número da lista abaixo
const numeros = '4, 5, 20, 8, 9';
const arrayNumeros = numeros.split(", ")
const numeroMaximo = Math.max(...arrayNumeros)


// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total
const listaPrecos = ['R$ 59,99', ' R$ 100,222',
                     'R$ 230  ', 'r$  200'];

function limparPreco(preco) {
  preco = +preco.toUpperCase().replace("R$", " ").trim().replace(",", ".")
  preco = +preco.toFixed(2)
  return preco
}

let soma = 0
listaPrecos.forEach((preco) =>{
  soma += limparPreco(preco)
})

console.log(soma.toLocaleString("pt-BR", {Style: "currency", currency:"BRL"}))
