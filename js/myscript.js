// Creiamo un finto biglietto del treno con:

// Codice treno (numero casuale tra 90000 e 100000 escluso)
// Numero carrozza
// Prezzo calcolato
// Categoria selezionata dall’utente
// Aggiungiamo una piccola animazione al click su “Crea” e “Annulla”, se clicchiamo su annulla dobbiamo ripulire il form.


// bottone Genera
var genera = document.getElementById('genera-button');


genera.addEventListener('click',
  function() {
    // genero struttura biglietto
    var risultato = document.getElementById('contenitore-none').style.display="block";

    // genero titolo struttura
    var titoloTicket = document.getElementById('titolo-biglietto');
    titoloTicket.innerHTML = "IL TUO BIGLIETTO";

    // genero dettagli biglietto
    var ticket = document.getElementById('biglietto');

    // genero titolo dettagli biglietto
    var titoloDettagli = document.getElementById('dettagli');
    titoloDettagli.innerHTML = "DETTAGLIO PASSEGGERI";

    // genero etichetta nome passeggero
    var etichettaNome = document.getElementById('titolo-nomepasseggero');
    etichettaNome.innerHTML = "NOME PASSEGGERO";

    // genero nome passeggero
    // collego al form
    var nomeUtente = document.getElementById('inserire-nome');
    console.log ("nome utente",nomeUtente.value);
    // risultato
    var nomePasseggero = document.getElementById('nome-inserito');
    nomePasseggero.innerHTML = nomeUtente.value;

    // genero etichetta offerta
    var etichettaOfferta = document.getElementById('titolo-offerta');
    etichettaOfferta.innerHTML = "Offerta";

    // genero tipo offerta età passeggero
    // collego al form, creo variabile inserimento fascia età
    var fasciaEta = document.getElementById('inserire-fasciaeta');

    // creo variabile per descrizione offerta in base all'età inserita
    var offerta = document.getElementById('offerta-inserita');

    // genero il tipo di offerta
    if (fasciaEta.value === "Minorenne"){
      offerta.innerHTML = "Sconto " + fasciaEta.value;
    }else if (fasciaEta.value === "Maggiorenne"){
      offerta.innerHTML = "Sconto " + fasciaEta.value;
    }else if (fasciaEta.value === "Over65"){
      offerta.innerHTML = "Sconto " + fasciaEta.value;
    };

    // genero etichetta carrozza
    var etichettaCarrozza = document.getElementById('titolo-carrozza');
    etichettaCarrozza.innerHTML = "Carrozza";

    // genero numero random carrozza
    var numCarrozza = document.getElementById('numero-carrozza');
    numCarrozza.innerHTML = Math.floor(Math.random()*10);
    console.log("numero carrozza", numCarrozza);

    // genero titolo codice CP
    var etichettaCodice = document.getElementById('titolo-codice');
    etichettaCodice.innerHTML = "Codice CP";

    // genero codice random CP
    var numCodice = document.getElementById('numero-codice');
    numCodice.innerHTML = Math.floor(Math.random()*100000);
    console.log("codice", numCodice);

    // genero etichetta prezzo
    var etichettaPrezzo = document.getElementById('titolo-costo');
    etichettaPrezzo.innerHTML = "Costo biglietto";


    // **********CALCOLO DEL PREZZO********

    // input:utente inserisce km da percorrere
    var kmUtente = document.getElementById('inserire-km');
    console.log("km da percorrere", kmUtente);

    // definisco variabile calcolo prezzo intero
    var prezzointero = 0.21 * kmUtente.value;
    // collego prezzo al form
    var prezzoFinale = document.getElementById('prezzo');

    // genero prezzo biglietto minorenne (sconto del 20%)
    if (fasciaEta.value === "Minorenne") {
      prezzoFinale.innerHTML = (prezzointero *80/100) ;

    // genero prezzo biglietto over65 (sconto del 40%)
    }else if (fasciaEta.value === "Over65") {
      prezzoFinale.innerHTML = (prezzointero *60/100) ;

    // altrimenti prezzo intero
    }else{
      prezzoFinale.innerHTML = prezzointero;
    }
  }
);



// bottone annulla
var annulla = document.getElementById('annulla-button');

annulla.addEventListener('click',
  function () {
    document.getElementById('contenitore-biglietto').style.display = "none";

    // reset dei dati compilati
    document.getElementsById('inserire-nome').reset();
    document.getElementById('inserire-km').reset();
  }
);
