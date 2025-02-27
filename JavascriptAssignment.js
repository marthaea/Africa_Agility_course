
// Declaring personal information variables
let firstName = "Martha";
let lastName = "Katusiime";
let maritalStatus = "Single";
let country = "Uganda";
let age = 20;
let city = "Kampala"
Year = 2025

// Declaring and logging age variables
let myAge = 20;
let yourAge = 25;
console.log("My age is:", myAge);
console.log("Your age is:", yourAge);


// Checking data types using typeof
console.log(typeof firstName); // string
console.log(typeof age); // number
console.log(typeof isMarried); // undefined (not declared yet)
console.log(typeof myBoolean); // boolean
console.log(typeof myNull); // object (JavaScript quirk)
console.log(typeof city);// string
console.log(typeof country);// string

// Checking if '10' is equal to 10
console.log('10' == 10); // true
console.log('10' === 10); // false

// Checking if parseInt('9.8') is equal to 10
console.log(parseInt('9.8') === 10); // false

// Truthy and falsy values
console.log(Boolean(1)); // true
console.log(Boolean("Hello")); // true
console.log(Boolean([])); // true

console.log(Boolean(0)); // false
console.log(Boolean("")); // false
console.log(Boolean(null)); // false

// Logical expressions
console.log(4 > 3 && 10 < 12); // true
console.log(4 > 3 && 10 > 12); // false
console.log(4 > 3 || 10 < 12); // true
console.log(4 > 3 || 10 > 12); // true
console.log(!(4 > 3)); // false
console.log(!(4 < 3)); // true
console.log(!(false)); // true
console.log(!(4 > 3 && 10 < 12)); // false
console.log(!(4 > 3 && 10 > 12)); // true
console.log(!(4 === '4')); // true

// Triangle area calculation
let base = prompt("Enter base:");
let height = prompt("Enter height:");
let area = 0.5 * base * height;
console.log("Area of the triangle:", area);

// Age and driving eligibility
let birthYear = prompt("Enter birth year:");
let currentYear = new Date().getFullYear();
let userAge = currentYear - birthYear;
if (userAge >= 18) {
    console.log(`You are ${userAge}. You are old enough to drive.`);
} else {
    console.log(`You are ${userAge}. You will be allowed to drive after ${18 - userAge} years.`);
}

// Declaring a variable named challenge and assigning iy to an initial value "30 days of javascript"
let challenge = "30 Days Of JavaScript";
console.log(challenge.toUpperCase());
console.log(challenge.toLowerCase());
console.log(challenge.slice(3));
console.log(challenge.slice(3, 21)); // Slice out 'Days Of JavaScript'
console.log(challenge.includes("Script"));
console.log(challenge.indexOf("a"));
console.log(challenge.lastIndexOf("a"));

let sentence = "You cannot end a sentence with because because because is a conjunction";
console.log(sentence.indexOf("because"));

console.log(challenge.startsWith("30 Days")); // True
console.log(challenge.endsWith("JavaScript")); // True

// Random number generation
console.log(Math.floor(Math.random() * 101));

// Conditional comparison
let a = 10, b = 5;
if (a > b) {
    console.log("a is greater than b");
} else {
    console.log("a is less than b");
}

console.log(a > b ? "a is greater than b" : "a is less than b");

// Grading system
let scores = 85;
if (scores >= 80 && scores <= 100) {
    console.log("A");
} else if (scores >= 70) {
    console.log("B");
} else if (scores >= 60) {
    console.log("C");
} else if (scores >= 50) {
    console.log("D");
} else {
    console.log("F");
}
