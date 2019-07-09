// creo 16 numeri da 1 a 100
// quindi pusho i 16 numeri in un array
// chiedo numero ad utente se numero presente in array perde
// altrimenti chiedo un altro numero



//inizializo due array vuoti che poi popolero
var numeriProibiti = [];
var numeriInseriti = [];

//creo ciclo for che popolera l array numeriProibiti
for (var i = 1; i < 17; i++) {
  var numeroCasuale = parseInt(Math.floor(Math.random()*(100))+1);
  // console.log(numeroCasuale);
  numeriProibiti.push(numeroCasuale);
}
//array coi numeriProibiti che l utente non deve scrivere in ordine crescente
console.log(numeriProibiti.sort());
//creo una funzione che ha la funzione di pushare nell'array numeriInseriti
// i vaori scritti dall'utente
function chiediNumero(asked){
  numeriInseriti.push(asked);
  console.log("numero inserito dall utente",numeriInseriti);
};

//infine verifico se i valori inseriti dall'utente e quelli contenuti nell array
//dei numeriProibiti combaciano
//se il numero inserito non c'e allora chiedo un altro numero all utente
//se il numero inserito e presente allora blocco il ciclo
while (numeriProibiti.includes(inserito) == false || numeriInseriti.length == 84) {
  var inserito = parseInt(prompt("inserisci numero"));
  chiediNumero(inserito);
  numeriProibiti.includes(inserito) == true;
}

console.log("l'utente ha inserito: ",numeriInseriti.length);







//
