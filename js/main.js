// Kilometri 
let kilometri = parseInt( prompt('Inserisci quanti km vuoi fare'));

if (isNaN(kilometri)) {
    alert('Errore: Devi mettere un numero');
    kilometri = (20)
}

// Etá e prezzo
let etá = prompt('Quale é la tua etá');
let prezzo = (kilometri * 0.21);

if (isNaN(etá)) {
    alert('Errore: Devi mettere un numero');
    etá = Math.floor(Math.random() * 100) + 1;
}

if (etá < 18) {
    prezzo = (prezzo - prezzo * 0.2);
}else if (etá >= 65){
    prezzo = (prezzo - prezzo * 0.4);
}

// Stampa del prezzo
document.getElementById('prezzo').innerHTML = 'Il prezzo finale é di ' + prezzo.toFixed(2) + '€';