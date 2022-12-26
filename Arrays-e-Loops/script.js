//var ultimoItem = videoGames.pop();

for (var numero = 0; numero < 10; numero++) {
  console.log(numero);
}

var i = 0;
while (i < 10) {
  console.log(i);
  i++;
}

var videoGames = ["Switch", "PS4", "XBOX", "3DS"];

for (var item = 0; item < videoGames.length; item++) {
  console.log(videoGames[item]);
  if (videoGames[item] === "PS4") {
    break;
  }
}

var frutas = ["Banana", "Pera", "Maça", "Abacaxi", "uva"];

frutas.forEach(function (fruta, index, array) {
  console.log(fruta, index, array);
});

// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002

var copas = ["1959", "1962", "1970", "1994", "2002"];

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`

for (var i = 0; i < copas.length; i++) {
  console.log("O Brasil ganhou a copa de" + copas[i]);
}

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var fruta = ["Banana", "Maçã", "Pera", "Uva", "Melância"];

for (var frutaa = 0; frutaa < fruta.length; frutaa++) {
  console.log(fruta[frutaa]);
  if (fruta[frutaa] === "Pera") {
    break;
  }
}

// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.

var ultimaFruta = fruta[frutas.length - 1];
