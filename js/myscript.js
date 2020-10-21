// Creiamo un finto biglietto del treno con:

// Codice treno (numero casuale tra 90000 e 100000 escluso)
// Numero carrozza
// Prezzo calcolato
// Categoria selezionata dall’utente
// Aggiungiamo una piccola animazione al click su “Crea” e “Annulla”, se clicchiamo su annulla dobbiamo ripulire il form.

var prezzoFinale;



// km da percorrere
var kmUtente = document.getElementById('inserire-km');

console.log ("km da percorrere",kmUtente.value);

// età passeggero
var etaUtente = document.getElementById('inserire-fasciaeta');

console.log ("età utente",etaUtente.value);

// bottone Genera
var genera = document.getElementById('genera-button');

// bottone annulla
var annulla = document.getElementById('annulla-button');



genera.addEventListener('click',
  function() {
    // genero struttura biglietto
    var risultato = document.getElementById('risultato');

    // genero titolo struttura
    var titoloTicket = document.getElementById('titolo-biglietto');
    titoloTicket.innerHTML = "iL TUO BIGLIETTO";

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

    // genero
  }
);
