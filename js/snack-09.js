// Scrivere un programma a cui venga chiesto all’utente di inserire numeri uno dopo l’altro.
// Quando l’utente scriverà 2 volte consecutive lo stesso numero allora il programma dovrà terminare.

let num1 = parseFloat(prompt('Scrivi un numero'));
let num2 = parseFloat(prompt('Scrivi un altro numero'));

let numInseriti = [num1, num2]

while (numInseriti[numInseriti.length - 2] !== numInseriti[numInseriti.length - 1]) {
  let num3 = parseFloat(prompt('Scrivi un altro numero'));
  numInseriti.push(num3)
}