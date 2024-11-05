// ESECUZIONE LOGICA
/**
 * Genera un numero random compreso tra il numero minimo ed il numero massimo inserito 
 * come argomento
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
function getRandomInt(min, max) {
    const randomInt = parseInt(Math.floor(Math.random() * (max - min + 1) + min));
    return randomInt;
}

/**
 * Restituisce la somma di due numeri
 * @param {number} num1
 * @param {number} num2
 * @returns {number}
 */
function getSum(num1, num2) {
    let result = num1 + num2;
    return result;
}

/**
 * verifica se un numero è pari o dispari e restituisce il risultato come stringa
 * @param {number} num
 * @returns {string}
 */
function evenOdd(num) {
    let userChoice = '';
    if(num % 2 === 0){
        userChoice = 'pari';
    }
    else{
        userChoice = 'dispari';
    }
    return userChoice;
}

/**
 * Questa funzione specifica verifica la vittoria e restituisce un booleano come risposta
 * @param {string} pariDispari
 * @param {string} userChoice
 * @returns {boolean}
 */
function GetResult(pariDispari, userChoice) {
    let youWon = false;
    if(pariDispari === userChoice){
        youWon = true;
    }
    return youWon;
}