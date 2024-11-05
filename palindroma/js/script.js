const userWord = prompt("Inserisci una parola per verificare se è palindroma").toLowerCase();
let invertedWord = reverseWords(userWord);
let isPalindrome = palindromeCheck(userWord, invertedWord);

let message = '';

if(isPalindrome) {
    message = `La parola "${userWord}" è Palindroma.`;
}
else {
    message = `La parola "${userWord}" non è Palindroma.`;
}

document.writeln(message);