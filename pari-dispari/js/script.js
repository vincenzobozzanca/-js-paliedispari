const userChoice = prompt('Digita Pari o Dispari per giocare').toLowerCase();
console.log("user Choice", userChoice);

const userNumber = parseInt(prompt('Digita un numero da 1 a 5'));

console.log("user Number", userNumber);


let cmpNumber = 0;
let total = 0;
const minNum = 1;
const maxNum = 5;

if(userNumber >= 1 && userNumber <= 5 && (userChoice === "pari" || userChoice === "dispari")) {
    cmpNumber = getRandomInt(minNum, maxNum);
    console.log('computer Number', cmpNumber);

    total = getSum(userNumber, cmpNumber);
    console.log('totale', total);

    pariDispari = evenOdd(total);
    console.log('Il numero totale è', pariDispari);

    isWon = GetResult(pariDispari, userChoice);
    console.log('isWon', isWon);


    message = '';
    if(isWon) {
        message = 'Hai vinto';
    }
    else {
        message = 'hai perso';
    }
    document.writeln(message);
}

else {
    alert("Ricaricare la pagina e reinserire correttamente i valori richiesti.");
}