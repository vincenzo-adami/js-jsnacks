// Il software deve chiedere per 10 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.

let sum = 0;

for (let i = 0; i < 10; i++) {
  sum += parseFloat(prompt('Scrivi un numero'))
}
console.log('La somma di tutti i numeri scritti è: ' + sum)