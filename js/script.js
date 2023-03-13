// Mail
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

const listEmail = [
    'vitodepalma16@gmail.com',
    'depalmavito98@gmail.com',
    'casualemail@outlook.com',
    'pinkopallo69@libero.it',
    'booleanservice@gmail.com'
]

const btnSend = document.getElementById('send');
const btnCanc = document.getElementById('canc');
btnSend.addEventListener('click', checkemail);

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
            document.getElementById('resultemail').innerHTML =
            `
            <h2 class="text-success-emphasis text-center text-uppercase fs-2 fw-semibold"> Congratulazioni la tua E-mail è corretta !
            Puoi entrare nella festa privata di Boolean</h2>
            `
    }   else{
        document.getElementById('resultemail').innerHTML =
        `
        <h2 class="text-danger-emphasis text-center text-uppercase fs-2 fw-semibold"> mi dispiace ma non sei ammesso alla festa di Boolean, sarà per una prossima volta !</h2>
        `
        }

}
// const btnCanc = document.getElementById('canc');
btnCanc.addEventListener('click', function() {
    document.getElementById('resultemail').innerHTML = '';
})

// ESERCIO DADI
// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

const btnThrow = document.getElementById('btnThrow');
btnThrow.addEventListener('click', throw );

function throw(){
    
}