// Fate generare un numero random da 0 a 10 al computer, e chiedete all’utente di inserire un suo numero.Se il numero scelto dall’utente è uguale al numero del computer informate l’utente che ha vinto, altrimenti ha perso.
// A questo punto fate giocare l’utente, fintanto che non vince la partita contro il PC

let randomNumber = Math.round(Math.random() * 10); // intevallo 0-10, estremi compresi
let result = false; // indica lo stato di vittoria o meno dell'utente

do {
  let userNumber = parseInt(prompt('Ti senti fortunato? Scrivi un numero intero'));

  if (userNumber === randomNumber) {
    result = true;
    console.log('HAI VINTO!')
  } else {
    console.log('Mi dispiace, hai perso! Ritenta')
  }
} while (result === false);