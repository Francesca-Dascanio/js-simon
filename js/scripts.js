/*

Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

STEP 1
1. Creo un numero casuale (funzione per creare numero casuale + variabile numero casuale)
2. Creo un array di 5 numeri casuali (ciclo for da 1 a 5 dove devo stampare numeri casuali; all'esterno creo un array vuoto da riempire con numeri casuali? - mi serve un array perchè devo poterli richiamare per verifica finale)
3. stampo array di 5 numeri casuali in pagina (creo un div all'interno del quale stampo i 5 numeri)


*/

// Funzione per creare un array di 5 numeri random
function getArrayRandom () {

    const arrayRandom = [];

    for (let i = 1; i <= 5; i++) {

        // Creo un numero casuale da 1 a 50
        const numRandom = Math.floor(Math.random() * 50 + 1);
            
        // console.log(`Al giro ${i}, il numero random è ${numRandom}`);
        console.log(numRandom);

        arrayRandom.push(numRandom);
    }

    console.log(arrayRandom);

    return arrayRandom;

}


// Stampo in pagina i 5 numeri random
const myDiv = document.getElementById('numbers-random');
myDiv.innerHTML = getArrayRandom();