// L’utente inserisce due numeri in successione
// Il software stampa il maggiore.

let num1 = parseFloat(prompt('Scrivi un numero'));
let num2 = parseFloat(prompt('Scrivi un numero'));

if (num1 > num2) {
  console.log(num1 + ' è il maggiore');
} else if (num2 > num1) {
  console.log(num2 + ' è il maggiore')
} else {
  console.log('i due numeri sono uguali')
}