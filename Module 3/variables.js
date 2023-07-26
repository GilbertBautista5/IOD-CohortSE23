console.log('\n--- STATEMENTS ---'); // headings to keep things tidy when running the script

// we can have multiple statements on the same line, but we NEED to separate them with a semi-colon
console.log('statements on the same line'); console.log('NEED a semi-colon'); // the semi colon at the end of the line is optional but recommended
console.log('statements on their own line work without a semi-colon');

console.log('\n--- CONST, VAR & LET ---');

// avoid using 'var' to define variables - it's the old way of doing things and can lead to unexpected side effects
if (true) {
    var oldVariable = "don't use var!" // declared within the if block scope, but still usable outside it. change var to let to see the difference!
}
console.log(oldVariable)
// if you're copying code from elsewhere, get into the habit of replacing all the var with let

// variables defined with 'let' can be reassigned later
let firstName = "Gilb"; // new variable. reserved space in memory is named 'firstName' and has the value 'Jo'.

// variables defined with 'const' can't be re-assigned a new value later on
const middleName = "Mikhail";
//middleName = 'Liz' // causes an error - why? try it!

console.log(firstName); // Gilbert
console.log(middleName); // Bautista

// we CAN re-assign this variable to a new value since we declared it using 'let'
// the variable already exists, so we don't need to re-declare it with 'let', we can just give it a new value
// single equals sign is used for assignment, need a double == (or triple ===) equals to check for equality
firstName = "Gilbert";

console.log(firstName); // Gilbert

// ++ replace the name values with your own, and add some more for lastName, location, age. print them all to the console.