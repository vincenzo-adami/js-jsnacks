// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

let nomiInvitati = ['Antonio', 'Francesco', 'Giuseppe', 'Vincenzo', 'Anna', 'Maria', 'Francesca', 'Sofia'];

let nomeUtente = prompt('Qual è il tuo nome?');

let nomeTrovato = nomiInvitati.includes(nomeUtente);

if (nomeTrovato) {
  console.log('Ho trovato il suo nome nella lista degli invitati. Può entratre');
} else {
  console.log('Non ho trovato il suo nome nella lista degli invitati. Mi dispiace ma non può entratre');
}