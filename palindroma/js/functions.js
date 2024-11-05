// ESECUZIONE LOIGCA
/**
 * Questa funzione permette di restituire una stringa in ordine inverso a quello dato 
 * @param {string} word
 * @returns {string}
 */
function reverseWords(word) {
    let reversedWord = '';
    for(i = word.length - 1; i >= 0; i-- ){
        reversedWord += word[i];
    }
    return reversedWord;
}

/**
 * Questa funzione richiede 2 parametri in ingresso, una stringa e la corrispettiva invertita,
 * con lo scopo di confrontarle e verificare se è palindroma e  restituisce un valore booleano.
 * @param {string} word
 * @param {string} invertedWord
 * @returns {boolean}
 */
function palindromeCheck(word, invertedWord) {
    let isPalindrome = false;
    if (word === invertedWord){
        isPalindrome = true;
    }
    return isPalindrome;
}