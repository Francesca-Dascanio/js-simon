# js-simon

Visualizzare in pagina 5 numeri casuali. 
Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono 
e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri dall'utente con il prompt, 
il software dice:
- quanti numeri ha indovinato l'utente
- quali dei numeri da indovinare sono stati individuati dall'utente

0. Inizio
1. Creo un numero casuale (funzione per creare numero casuale + variabile numero casuale)
2. Creo un array di 5 numeri casuali (ciclo for da 1 a 5 dove devo stampare numeri casuali; all'esterno creo un array vuoto da riempire con numeri casuali? - mi serve un array perchè devo poterli richiamare per verifica finale)
3. stampo array di 5 numeri casuali in pagina (creo un div all'interno del quale stampo i 5 numeri)
4. Dal momento in cui ho stampato i 5 numeri casuali parte un tempo definito di 30 secondi (creo un setTimeout con dentro che cosa deve succedere dopo un dato tempo [30 secondi * 1000 millisecondi])
5. Creo funzione che deve succedere dopo (la creo qui oppure faccio una funzione anonima in cui inserisco il richiamo alla funzione che voglio richiamare con i rispettivi argomenti?)

6. COSA SUCCEDE DOPO I 30 SECONDI (tutto questo deve essere dentro al setTimeout?)
    a.  i 5 numeri scompaiono (posso usare una classe .black e .white, che tolgo e metto; oppure se ho usato un array posso svuotare array?)
    b. compaiono 5 prompt utente
    - compare la richiesta 1 di inserimento del primo numero scomparso (prompt utente con parseInt)
    - compare la richiesta 2 di inserimento del secondo numero scomparso (prompt utente con parseInt)
    - compare la richiesta 3 di inserimento del terzo numero scomparso (prompt utente con parseInt)
    - compare la richiesta 4 di inserimento del quarto numero scomparso (prompt utente con parseInt)
    - compare la richiesta 5 di inserimento del quinto numero scomparso (prompt utente con parseInt)

    (devo fare 5 prompt separati o posso accorparli in qualche modo per non ripetere il codice?)
    Devo creare un array, un contenitore con i 5 numeri inseriti dall'utente

    Io arrivo qui con un array di numeri casuali e un array di numeri dell'utente

    c. In pagina compaiono 2 informazioni (quindi creo un paragrafo in HTML che dice x cose)
    - Informazione 1: quanti numeri inseriti dall'utente erano presenti anche tra i 5 numeri random
        - Opzione un prompt alla volta:
            if (arrayRandom.includes(prompt1)) {
                aggiungi prompt1 all'arrayRisultato
            }
            si fa con tutti i prompt; arrayRisultato.lenght è quanti numeri corrispondono e contenuto arrayRisultato corrisponde a quali

        - Opzione confronto tra arrayRandom e arrayUtente:
            for (let numUtente = 0; numUtente < 5; numUtente++) {                           // CICLO ESTERNO

                arrayUtente[i]            

                for (let numRandom = 0; numRandom < 5; numUtente++) {      // CICLO INTERNO

                    arrayRandom[i]

                    if (arrayUtente[i] == arrayRandom[i]) {
                        aggiungi arrayUtente[i] all'arrayRisultato
                    }
                    else {
                        non succede niente
                    }

                }

            arrayRisultato.lenght è quanti numeri corrispondono e contenuto arrayRisultato corrisponde a quali
            non so se funziona
            
        }