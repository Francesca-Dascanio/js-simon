/*

Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

STEP 1  ----> OK
1. Creo un numero casuale (funzione per creare numero casuale + variabile numero casuale)
2. Creo un array di 5 numeri casuali (ciclo for da 1 a 5 dove devo stampare numeri casuali; all'esterno creo un array vuoto da riempire con numeri casuali? - mi serve un array perchè devo poterli richiamare per verifica finale)
3. stampo array di 5 numeri casuali in pagina (creo un div all'interno del quale stampo i 5 numeri)

STEP 2
4. Dal momento in cui ho stampato i 5 numeri casuali parte un tempo definito di 30 secondi (creo un setTimeout con dentro che cosa deve succedere dopo un dato tempo [30 secondi * 1000 millisecondi])


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

const arrayRandom = getArrayRandom();
let myDiv = document.getElementById('numbers-random');
myDiv.innerHTML = arrayRandom;




// Parte un tempo di 30 secondi (30.000 millisecondi) dopo il quale devono succedere delle cose
setTimeout (function () {

    // azioni che devono succedere dopo 30 secondi
    myDiv = getDisappeared (myDiv);

}, 3000);


// Parte un tempo di 35 secondi (35.000 millisecondi) dopo il quale devono succedere delle cose
setTimeout (function () {

    // azioni che devono succedere dopo 35 secondi
    // Vengono raccolti in un array i 5 numeri scritti dall'utente

    getResult ();

}, 5000);




// Cosa metto dentro alla funzione anonima (cioè cosa esegue dopo 30 secondi)
// a. Funzione per far scomparire i numeri stampati in pagina
function getDisappeared (element) {

    element.classList.add('not-visible');

    return element;

}

// b. Funzione per raccogliere in un array i 5 numeri inseriti dall'utente
function getArrayUser () {

    const arrayUser = [];
    

    for (let i = 1; i <= 5; i++) {

        // Raccolgo numero dell'utente 5 volte
        const numUser = parseInt((prompt('Scrivi uno dei numeri che hai visto')));
        
        console.log(numUser);

        arrayUser.push(numUser);
    }

    console.log(arrayUser);

    return arrayUser;

}



// c. In pagina compaiono 2 informazioni (quindi creo un paragrafo in HTML che dice x cose) (posso metterlo in setTimeout 35 sec?)
// Devo creare un modo per confrontare arrayRandom e arrayUser in modo da trovare le due informazioni

// Funzione mi dovrebbe restituire l'array dei numeri dell'utente che combaciano con quelli dell'arrayRandom

function getResult () {


    // In una variabile richiamo la funzione che restituisce array User
    const arrayUser = getArrayUser ();

    // Creo un array dove pushare i numeri risultanti
    const arrayResult = confronto (arrayUser, arrayRandom);
    // stampa dell'array con ciclo

    document.getElementById('result-1').innerHTML = `Hai indovinato ${arrayResult.length} numeri giusti!`;

    document.getElementById('result-2').innerHTML = 'I numeri corretti sono: ';

    for (let i = 0; i < arrayResult.length; i++) {

        document.getElementById('result-2').innerHTML += ` ${arrayResult[i]}         `;
    }   
      
}

    function confronto(arr1,arr2) {

        const arrayResult = [];

        console.log('arr2', arr2);

        for (let i = 0; i < arr1.length; i++) {

            console.log('Elemento: ', arr1[i]);


            if (arr2.includes(arr1[i])) {
                arrayResult.push(arr1[i]);
                console.log('dentro');              
  
            }
        }

        return arrayResult
    }




