// L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.

let word1 = prompt('Inseirisci una parola');
let word2 = prompt('Inseirisci una parola');

if (word1.length > word2.length) {
  console.log(word2 + ' è la parola più corta.')
  console.log(word1 + ' è la parola più lunga.')
} else if (word2.length > word1.length) {
  console.log(word1 + ' è la parola più corta.')
  console.log(word2 + ' è la parola più lunga.')
} else {
  console.log(word1 + ', ' + word2 + ' sono lunghe uguali')
}