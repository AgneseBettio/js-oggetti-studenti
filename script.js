// Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
// Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
// Creare un array di oggetti di studenti.
// Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
// Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

// Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
var studente = {
    'nome': 'Gennaro',
    'cognome': 'Rossi',
    'eta': 19
}
console.log(studente);
// Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
for (var key in studente) {
    console.log(key + ":", studente[key]);
}
// Creare un array di oggetti di studenti.
var arrStudenti = [
    {
        'nome': 'Gennaro',
        'cognome': 'Rossi',
        'eta': 19
    },
    {
        'nome': 'Carola',
        'cognome': 'Neri',
        'eta': 18
    },
    {
        'nome': 'Matteo',
        'cognome': 'Verdi',
        'eta': 19
    },
    {
        'nome': 'Sandra',
        'cognome': 'Viola',
        'eta': 18
    }
]
console.log(arrStudenti);
//prove mie per capire: così vado a recuperare il valore di nome nell'indice 0 dell'array
console.log(arrStudenti[0].nome);
console.log(arrStudenti[2].nome);

// Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.

//Deve essere un ciclo unico; ad ogni "giro" del ciclo, devi stampare sia il nome che il cognome relativo all'oggetto estratto dall'array in quel momento

for (var i = 0; i < arrStudenti.length; i++) {

    var elementoRicerca = arrStudenti[i];
    console.log(elementoRicerca.nome);
    console.log(elementoRicerca.cognome);

}
// Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
var nomeUtente = prompt("inserisci il tuo nome");
var cognomeUtente = prompt("inserisci il tuo cognome");
var etaUtente = parseInt(prompt("inserisci la tua eta"));

var datiNuovoStudente = {
    'nome': nomeUtente,
    'cognome': cognomeUtente,
    'eta': etaUtente
};
console.log(datiNuovoStudente);
for (var key in datiNuovoStudente) {
    console.log(key + ":", datiNuovoStudente[key]);
}
// aggiungo nuovo studente in array 
arrStudenti.push(datiNuovoStudente);
console.log (arrStudenti);


// Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
for (var i = 0; i < arrStudenti.length; i++) {

    var elementoRicerca = arrStudenti[i];
    console.log(elementoRicerca.nome);
    console.log(elementoRicerca.cognome);

}

