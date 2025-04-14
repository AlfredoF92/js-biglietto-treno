
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


let km = 66; 
console.log("Km inseriti: " + km);

let eta = 66;
console.log("Anni inseriti: " + eta);

let prezzoDelBiglietto = km * 0.21; 

console.log("\n***********************************************************************");

console.log(">>>>>> Il Prezzo del biglietto è " + prezzoDelBiglietto.toFixed(2) + "€");

if(eta < 18){
    //Applicare sconto del 20% per i minorenni
    let sconto20 = prezzoDelBiglietto * 0.20;
    prezzoDelBiglietto = prezzoDelBiglietto - sconto20;
    console.log("Hai meno di 18 anni, è stato applicato uno sconto del 20% al tuo biglietto!");
    console.log(">>>>>> Il prezzo del biglietto scontato è: " + prezzoDelBiglietto.toFixed(2) + "€");
}else if (eta > 65){
    //Applicare sconto del 40% per gli over65
    let sconto40 = prezzoDelBiglietto * 0.40;
    console.log("Fai parte della categoria Over 65! E' stato applicato uno sconto del 40% al tuo biglietto!");
    prezzoDelBiglietto = prezzoDelBiglietto - sconto40;
    console.log(">>>>>> Il prezzo del biglietto scontato per te è: " + prezzoDelBiglietto.toFixed(2) + "€");
}



console.log("***********************************************************************");
