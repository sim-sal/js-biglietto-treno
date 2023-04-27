// dichiaro le variabili
let kmViaggio, userAge, prezzoBiglietto, scontoMinori, scontoOver, messaggio;

// chiedere all’utente il numero di chilometri da percorrere durante il viaggio
kmViaggio = prompt("Inserisci i km del tuo viaggio");
console.log(kmViaggio);

// chiedere l’età del passeggero.
userAge = prompt("Inserisci l'età del passeggero");
console.log(userAge);

// prezzo generico del biglietto
prezzoBiglietto = (0.21 * kmViaggio);
console.log(prezzoBiglietto);

// SE il passeggero è minorenne
 if (userAge < 18){
    // allora avrà uno sconto del 20%
    scontoMinori = ((prezzoBiglietto/100) * 20);
    prezzoBiglietto = (prezzoBiglietto - scontoMinori);
    console.log(prezzoBiglietto);
 }
 // SE il passeggero è over 65 
 else if (userAge > 65){
    // allora avrà uno sconto del 40%
    scontoOver = ((prezzoBiglietto/100) * 40);
    prezzoBiglietto = (prezzoBiglietto - scontoOver);
    console.log(prezzoBiglietto);
 }
//  ALTRIMENTI 
else {
    // non ci sarà sconto
    prezzoBiglietto = (0.21 * kmViaggio);
    console.log(prezzoBiglietto);
}

// creo messaggio per utente
messaggio = `Il prezzo del tuo biglietto è: ${prezzoBiglietto = prezzoBiglietto.toFixed(2)}€`;
console.log(messaggio);

// infine, riportare il tutto sulla pagina
document.getElementById("mio_id").innerHTML = messaggio;
