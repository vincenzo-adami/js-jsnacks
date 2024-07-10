// Scrivere un programma che stampi la tabellina del 2, fino al numero 1000.
// Modificate poi il programma in modo che venga chiesto all’utente il numero massimo consentito, e stampare tutta la tabellina del 2 fino al numero inserito.

// let numTabellina = 0;

// while (numTabellina < 1000) {
//   numTabellina += 2;
//   console.log(numTabellina)
// }

let numTabellina = 0;
let numMaxIteraction = parseInt(prompt('Fin a che numero vuoi la tabellina del 2?'))

while (numTabellina < numMaxIteraction) {
  numTabellina += 2;
  console.log(numTabellina)
}