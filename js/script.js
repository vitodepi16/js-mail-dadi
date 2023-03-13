// Mail
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.
// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

const listEmail = [
    'vitodepalma16@gmail.com',
    'depalmavito98@gmail.com',
    'casualemail@outlook.com',
    'pinkopallo69@libero.it',
    'booleanservice@gmail.com'
]

const btn = document.querySelector('button');
btn.addEventListener('click', checkemail);

function checkemail(e){
    e.preventDefault();
    let emailTrue = '';
    const search = document.getElementById('emailCheck').value;
    for(let i = 0; i < listEmail.length; i++){
        if (listEmail[i] === search){
            emailTrue = listEmail[i];
        }
        
    }
        if (emailTrue){
            console.log('La tua email è giusta');
    }   else{
            console.log('Hai sbaglaito email');
        }

}