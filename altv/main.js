// creo 16 numeri da 1 a 100
// quindi pusho i 16 numeri in un array
// chiedo numero ad utente se numero presente in array perde
// altrimenti chiedo un altro numero

//inizializo due array vuoti che poi popolero
var numeriProibiti = [];
var numeriInseriti = [];

var difficolta = parseInt(prompt("difficolta"));
// if (difficolta == 0) {
//   var range = 50;
// }
// else if (difficolta == 1) {
//   var range = 80;
// }
// else{
//   var range = 100;
// }
// console.log(range);



switch (difficolta) {
  case 0:
    var range = 50;
      break;
  case 1:
    var range = 80;
      break;
  case 2:
    var range = 100;
      break;
  default:
  var range = 10;

}
console.log(range)





//creo ciclo for che popolera l array numeriProibiti
for (var i = 1; i < 17; i++) {
  var numeroCasuale = parseInt(Math.floor(Math.random()*(range))+1);
  // console.log(numeroCasuale);
  numeriProibiti.push(numeroCasuale);
}
//array coi numeriProibiti che l utente non deve scrivere in ordine crescente
console.log(numeriProibiti.sort(function(a, b){return a - b}));
//creo una funzione che ha la funzione di pushare nell'array numeriInseriti
// i vaori scritti dall'utente
function chiediNumero(asked){
  if (isNaN(asked)) {
    console.log("non e un numero");
  }
  else if (asked > 101 || asked < 0) {
    console.log("numero non compreso tra 1 e 100. scrivine un altro");
  }
  else {
    numeriInseriti.push(asked);
    console.log("numero inserito dall utente",numeriInseriti);
  }

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
