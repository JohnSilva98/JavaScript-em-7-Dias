console.log("JavaScript funcionando");

let firstName = "John";
let lastName = "Silva";
console.log(firstName + " " + lastName);
//variaveis nao podem começar com números, nem ter espaços, nem hífens
// uma boa prática é usar a primeira letra da
//primeira palavra em minúsculo
// a segunda letra do nome é maiuscula
//JS é case sensitive, ou seja, letra maiuscula e minúsculas são diferentes

const price = 30;
//price = 20;
console.log(price);
//variaveis constantes nunca terão seu valor alterado, o valor dela se mantem fixo(constante)

//variaveis de tipo primitivo
//string, number, boolean, undefined, null, symbol

let itemName = "pen"; // variavel tipo String
let itemPrice = 10; // variavel tipo Number
let isAvailable = true; // variavel tipo Boolean
let itemColor; //variavel tipo undefined
// variaveis de tipo primitivo são imutáveis, ou seja, não podem ser
// alteradas, o valor da variavel é fixo e não pode ser alterado
// variaveis de tipo primitivo são passadas por valor, ou seja, quando
// passamos uma variavel de tipo primitivo para outra variavel, o valor
// da variavel é copiado para a outra variavel, ou seja, as duas
// variaveis tem o mesmo valor, mas são diferentes variaveis

//variaveis do tipo referencia
//object, array, function, date, regExp, error
//objetos é um grupo de informações referentes a um objeto
let pen = {
  itemName: "Pen",
  itemPrice: 3,
  isAvailable: true,
  itemColor: "red",
};
pen.itemColor = "blue";
console.log(pen);

//Arrays
let friends = ["Marcos", "Anderson", "Guilherme", "Pedro", "Joao"];
console.log(friends);
//para armazenar uma lista de items dentro de uma unica variavel usamos os arrays

// variaveis de tipo referencia são mutáveis, ou seja, podem ser
// alteradas, o valor da variavel pode ser alterado
// variaveis de tipo referencia são passadas por referência, ou seja,
// quando passamos uma variavel de tipo referencia para outra variavel,
// o valor da variavel é copiado para a outra variavel, ou seja, as duas
// variaveis tem o mesmo valor, mas são diferentes variaveis
