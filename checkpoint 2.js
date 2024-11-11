// String Manipulation Functions:

var text = prompt("Entrez une phrase :");
var rev = reversed(text);
var result = count(text);
var upper = upperCase(text);
// Reverse a String: Write a function that reverses a given string.
function reversed(str) {
    let splitString = str.split("");
    let reverseArray = splitString.reverse();
    let joinArray = reverseArray.join("");
    console.log(joinArray);
}

// Count Characters: Create a function that counts the number of characters in a string.
function count(str){
    let splitString = str.split("");
    let a = 0 ;
    for (let i=0 ; i < splitString.length ; i++ ){
        a += 1 ;
    }
    console.log(a);
}

// Capitalize Words: Implement a function that capitalizes the first letter of each word in a sentence.
function upperCase(str){
    console.log(str.toUpperCase());
}



// Array Functions:
// Find Maximum and Minimum: Write functions to find the maximum and minimum values in an array of numbers.
let arr = [1, 2, 3, 4, 5];
let max = Math.max(...arr);
let min = Math.min(...arr);
console.log("Min:", min);
console.log("Max:", max);
// Sum of Array: Create a function that calculates the sum of all elements in an array.
let arr = [1, 2, 3, 4, 5];
let count=0;
for(let i=0 ; i<=arr.length ; i++){
    count += i ;
}
console.log(count);
// Filter Array: Implement a function that filters out elements from an array based on a given condition.
let arr = [1, 'b', 3, 'amira', 5];
let result = [];

for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'string') {
        result.push(arr[i]);
    }
}
console.log(result); // Output: ['b', 'amira']
console.log(arr);


// Mathematical Functions:

// Factorial: Write a function to calculate the factorial of a given number.
var num = prompt("plz enter a number :");
let count=0;
for(let i=0 ; i=num ; i--){
    count *= i ;
}
console.log(count);
// Prime Number Check: Create a function to check if a number is prime or not.
var num = prompt("please enter a number :");
var count = num ;
for(let i=1 ; i<num ; i++){
    count *= i;
}
console.log(count);
// Fibonacci Sequence: Implement a function to generate the Fibonacci sequence up to a given number of terms.
const number = parseInt(prompt('Enter the number of terms: '));
let n1 = 0, n2 = 1, nextTerm;
console.log('Fibonacci Series:');
for (let i = 1; i <= number; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}