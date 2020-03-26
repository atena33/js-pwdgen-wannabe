// Chiedi all’utente il suo nome,
// poi chiedi il suo cognome,
// poi chiedi il suo colore preferito
// Infine scrivi sulla pagina nomecognomecolorepreferito19

// Creare le var
var tuoNome;
var tuoCognome;
var tuoColore;

// Creare i prompt associati alle var
var tuoNome = prompt("Scrivi il tuo nome");
var tuoCognome = prompt("Scrivi il tuo cognome");
var tuoColore = prompt("Scrivi il tuo colore preferito");

// Creare l'output
document.getElementById("password").innerHTML = tuoNome + tuoCognome + tuoColore + "19";
