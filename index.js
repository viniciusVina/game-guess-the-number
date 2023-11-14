let computerNumber;
let userNumbers = [];
let attempts = 0;
let maxguesses = 10;

//botão para jogar novamente
function newGame(){
    window.location.reload()
}


//gerar numero aleatorio de 0 a 100
function init() {
    computerNumber = Math.floor(Math.random() * 100 + 1);
    //console.log(computerNumber)
}


//recupera valor do input, coloca no array e printa na tela.
function compareNumbers() {
    const userNumber = Number(document.getElementById('inputBox').value);
    userNumbers.push(' ' + userNumber)
    document.getElementById('guesses').innerHTML = userNumbers;

    if (attempts < maxguesses) {
        if (userNumber > computerNumber) {
            document.getElementById('textOutput').innerHTML = 'Your Number is too high';
            document.getElementById('inputBox').value = '';
            attempts++;
            document.getElementById('attempts').innerHTML = attempts;
        }
        else if (userNumber < computerNumber) {
            document.getElementById('textOutput').innerHTML = 'Your Number is too low';
            document.getElementById('inputBox').value = '';
            attempts++;
            document.getElementById('attempts').innerHTML = attempts;
        }
        else {
            document.getElementById('textOutput').innerHTML = 'Congratulation';
            document.getElementById('inputBox').value = '';
            attempts++;
            document.getElementById('attempts').innerHTML = attempts;
            document.getElementById('inputBox').setAttribute('Readonly', 'Readonly');//deixar o campo somente leitura
        }   
    }
    else{
        document.getElementById('textOutput').innerHTML = 'Your Lose ! The computer number was ' + computerNumber;
        document.getElementById('inputBox').setAttribute('Readonly', 'Readonly');
    }



}

