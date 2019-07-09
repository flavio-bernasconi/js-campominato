// creo 16 numeri da 1 a 100
// quindi pusho i 16 numeri in un array
// chiedo numero ad utente se numero presente in array perde
// altrimenti chiedo un altro numero

var numeriProibiti = [];
var numeriInseriti = [];

for (var i = 1; i < 16; i++) {
  var numeroCasuale = Math.floor(Math.random()*(100))+1;
  // console.log(numeroCasuale);
  numeriProibiti.push(numeroCasuale);
  console.log(numeriProibiti);
}

function chiediNumero(asked){
  numeriInseriti.push(asked);
  console.log("numero inserito dall utente",numeriInseriti);
};


while (numeriProibiti.includes(inserito) == false) {
  var inserito = parseInt(prompt("inserisci numero"));
  chiediNumero(inserito);
  numeriProibiti.includes(inserito) == true;
}

console.log("l'utente ha inserito: ",numeriInseriti.length);







//
