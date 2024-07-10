// Crea un array vuoto.
// Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell’array.Stampa l’array alla fine.

let numeriDispari = [];

for (let i = 0; i < 6; i++) {
  let numeroChiesto = parseInt(prompt('Scrivi un numero'));
  if (numeroChiesto % 2 === 1) {
    numeriDispari.push(numeroChiesto);
  }
}

console.log('Questi sono i numeri che hai inserito: ', numeriDispari)