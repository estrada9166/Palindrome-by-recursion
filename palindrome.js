// Validar si una palabra es palindrome utilizando recursión
// Complejidad: 
// Validar si una plabra es palindrome (se puede leer al derecho y al reves)
//  Se valida si la primera letra es excatamente igual a la ultima; esto siempre y cuando no sea una sola letra
//  Si estas letras son iguales en la palabra se puede considerar que la palabra es Palindrome, de lo contrario no lo es.

var word = 'rotoR';

var palindrome = function(str) {
    var str = str.toLowerCase();
    var first = 0;
    var last = str.length - 1;
    if(str[first] === str[last]){
        if(str.length > 0){
            palindrome(str.slice(1, -1));
        }
        return 'Palindrome';
    }
    return 'Not Palindrome';
};

var assertEqual = function(expected, result) {
    if(expected === result) {
        return 'PASS';
    }
    return `Expected ${expected} but actually got: ${result}`;
}

console.log(palindrome(word));
console.log(assertEqual('Not Palindrome', palindrome('aloh')));
console.log(assertEqual('Palindrome', palindrome('RotOr')));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////