
/*Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va stampato in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
Questo richiederà un minimo di ricerca.
Prima di scrivere il codice impostate il ragionamento nei commenti!
Bonus:
Applicare de controlli sull'input dell'utente*/


let km = 15;
console.log("Km inseriti: " + km);

let eta = 16;
console.log("Anni inseriti: " + eta);

let prezzoDelBiglietto = km * 0.21; 
console.log("Prezzo del biglietto: " + prezzoDelBiglietto);

let messageOutput;

let sconto40 = prezzoDelBiglietto * 0.40;
let prezzoBigliettoScontato40 = prezzoDelBiglietto - sconto40;

if(eta < 18){
    //Applicare sconto del 20% per i minorenni
    let sconto20 = prezzoDelBiglietto * 0.20;
    prezzoDelBiglietto = prezzoDelBiglietto - sconto20;
}else if (eta > 65){
    //Applicare sconto del 40% per gli over65
    let sconto40 = prezzoDelBiglietto * 0.40;
    prezzoDelBiglietto = prezzoDelBiglietto - sconto40;
}

console.log("il Prezzo del biglietto è" + prezzoDelBiglietto);