/***************************
 * VENDITA BIGLIETTO TRENO
 ***************************/

/** 
 * REFERENZE ELEMENTI
 */
var container = document.getElementById('biglietto');

var bottoneGenera = document.getElementById('bottoneGenera');
var bottoneAnnulla = document.getElementById('bottoneAnnulla');



/**
 * EVENTI
 */

// Generare il biglieto
bottoneGenera.addEventListener('click', 
    function() {
        // Ottieni valori input utente
        var nome = document.getElementById('nome').value;
        console.log(nome); 

        var kmDaPercorrere = document.getElementById('km').value;
        //console.log(kmDaPercorrere); 

        var fasciaEta = document.getElementById('fascia-eta').value;
        //console.log(fasciaEta); 

        // Calcolo biglietto
        var prezzoKm = 0.21;
        var costoBiglietto = prezzoKm * kmDaPercorrere;
        var offerta = 'Biglietto Standard';

        // Calcoliamo il costo e l'offerta applicata
        if (fasciaEta == 'minorenne') {
            // 20% sconto
            costoBiglietto -= costoBiglietto * 0.2;
            offerta = 'Sconto minorenne';
        } else if (fasciaEta == 'over65') {
            //40% sconto
            costoBiglietto -= costoBiglietto * 0.4;
            offerta = 'Sconto Over 65';
        }

        // Controllo dei decimali
        costoBiglietto = costoBiglietto.toFixed(2) + '€';

        // Numero random per la carrozza da 1 a 9
        var numCarrozza = Math.floor( Math.random() * 9) + 1;

        // Numero random per codice cp da 90000 a 100000
        var codiceCp = Math.floor( Math.random() * (100000 - 90000) ) + 90000;

        // Inseriamo valori nella pagina
        document.getElementById('nome-passeggero').innerHTML = nome;
        document.getElementById('offerta-applicata').innerHTML = offerta;
        document.getElementById('carrozza').innerHTML = numCarrozza;
        document.getElementById('codice-cp').innerHTML = codiceCp;
        document.getElementById('costo').innerHTML = costoBiglietto;

        // Mostra biglietto
        container.className = 'show';
    }   
);

// Reset biglietto
bottoneAnnulla.addEventListener('click',
function () {
    // ACQUISISCO IL VALORE ALL'INTERNO DELL'ELEMENTO HTML PER POI RIASSEGNARE IL VALORE DI STRINGA EMPTY;
    var nome = document.getElementById('nome').value = '';
    console.log(nome);

     // ACQUISISCO IL VALORE ALL'INTERNO DELL'ELEMENTO HTML PER POI RIASSEGNARE IL VALORE DI 1;
    var kmDaPercorrere = document.getElementById('km').value = 1;
    console.log(kmDaPercorrere);

    // ACQUISISCO IL VALORE ALL'INTERNO DELL'ELEMENTO HTML PER POI RIASSEGNARE IL VALORE DI TIPO STRINGA EMPTY;
    var fasciaEta = document.getElementById('fascia-eta').value = '';
    console.log(fasciaEta);
    
    // PRINT ALL'INTERNO DEL DOCUMENTO HTML IL VALORE CONTENUTO NELLA VARIABILE nome
    document.getElementById(nome).innerHTML = nome;

    // PRINT ALL'INTERNO DEL DOCUMENTO HTML IL VALORE CONTENUTO NELLA VARIABILE kmDaPercorrere

    document.getElementById(km).innerHTML = kmDaPercorrere;

    // PRINT ALL'INTERNO DEL DOCUMENTO HTML IL VALORE CONTENUTO NELLA VARIABILE fasciaEta
    document.getElementById(fascia-eta) = fasciaEta;
    
    
    
    
        
    
}



)


