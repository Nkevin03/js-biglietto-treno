// Variabili
const kilometri = parseInt( prompt('Inserisci quanti km vuoi fare'));
let prezzo = (kilometri * 0.21);
const etá = prompt('Quale é la tua etá');

if (isNaN(kilometri)) {
    alert('Errore: Devi mettere un numero')
}

if (etá < 18) {
    prezzo = (prezzo - prezzo * 0.2);
}else if (etá >= 65){
    prezzo = (prezzo - prezzo * 0.4);
}

document.getElementById('prezzo').innerHTML = 'Il prezzo finale é di ' + prezzo.toFixed(2) + '€';