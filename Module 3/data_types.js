console.log('\nDATA TYPES - NUMBERS')

let four = 4 // this variable called four stores the number 4 (an integer, or whole number)
let Four = 44 // this variable refers to a different memory location called Four, because variables are case-sensitive

let pi = 3.14159 // pi refers to a decimal, or floating point number, called a float

four = 'four' // we can change the type of the variable from an int to a string if we like

let infinity = 1/0; // Infinity is a special numerical value representing infinity
let negativeInfinity = -1/0; // we can also have negative Infinity, rarely needed
let nan = "text" / 6; // NaN = Not a Number - results from trying to do mathematical operations on values that aren't numbers

console.log(four); // 'four'
console.log(Four); // 44 - different locations in memory

console.log(pi); // 3.14159

console.log(infinity == Infinity); // true
console.log(negativeInfinity); // -Infinity

console.log(nan);
console.log(nan == NaN); // false! even though it would make sense to be true
console.log(isNaN(nan)); // NaN != NaN, so we have to use the isNan function to test for not a number values

let string1 = "first string";
let string2 = "second string";

// since the first thing before the + is a string, the + will concatenate the strings
console.log(string1 + ' ' + string2);

let number1 = 10;
let number2 = "20";
let number3 = 30;

console.log(number1 + number3 + number2); // + will add numbers until it reaches a string, when it concatenates instead. what happens if we change + to - ?

let one = 1;
let two = 2;
let three = 3;

console.log(one * (three + two) / three * two); // can combine variables to work out mathematical formulas, standard BODMAS order applies

// to add onto a number, three ways:
one = one + 5; // new value of one is previous value + 5
two += 8; // shorthand - add 8 to previous (also *= to multiply previous value)
three++; // increment previous value by 1

console.log(one); // 6
console.log(two); // 10
console.log(three); // 4

// to decrease a value, three ways:
one = one - 5; // new value of one is previous value - 5
two -= 8; // shorthand - subtract 8 from previous (also /= to divide previous value)
three--; // decrement previous value by 1

console.log(one); // 1
console.log(two); // 2
console.log(three); // 3

const bigint_valid = 1234567890123456789012345n;
const bigint_invalid = 1234567890123456789012345; // too large for standard integers, overflows memory
console.log(bigint_valid);
console.log(bigint_invalid);
console.log(bigint_valid == bigint_invalid); // false - memory locations don't store same value

console.log('\nDATA TYPES - STRINGS');

 const doubleQuotes = "This string uses double quotes for a word like can't"; // double quoted strings are the same as single quoted strings
const singleQuotes = 'This string uses single quotes "with double quotes inside"'; // but you can put ' inside " " and " inside ' '
const backTicks = `This string uses back ticks and displays variables like ${four} or ${pi}`; // back ticks are used for strings containing variables

console.log(doubleQuotes);
console.log(singleQuotes);
console.log(backTicks);

console.log('\nDATA TYPES - BOOLEANS');

let myBoolean = false; // booleans only have true or false values

myBoolean = !myBoolean; // ! means NOT. toggles or switches the previous value of the boolean to its opposite

if (myBoolean) { console.log('my boolean was true'); } // booleans can be easily used in if tests
else { console.log('my boolean was false'); }

console.log('\nDATA TYPES - NULL & UNDEFINED')

let unknownNull = null; // null means it doesn't exist, there's nothing there
let unknown; // undefined means something exists but we don't know what (yet)
console.log(unknown == unknownNull) // true: null and unknown are equivalent
console.log(unknown === unknownNull) // false: but they aren't strictly equal

let testVariable;
let nullTestVariable = null;
console.log(`${testVariable} == ${nullTestVariable} ? ${testVariable == nullTestVariable}`) // true (uses == to check equivalence)
console.log(`${testVariable} === ${nullTestVariable} ? ${testVariable === nullTestVariable}`) // false (uses === to check strict equality)

console.log('\nDATA TYPES - OBJECTS');

const user = { name: 'Jo', location: 'Maryborough' }; // objects store complex multi-part data instead of a single primitive value

console.log(typeof user) // we can use typeof to check what type a variable is
console.log(typeof(doubleQuotes))
console.log(typeof Four)
console.log(typeof pi)

console.log(typeof undefined); // undefined
console.log(typeof 0); // number
console.log(typeof 10n); // bigint
console.log(typeof true); // boolean
console.log(typeof 'text'); // string
console.log(typeof Symbol('id')) // symbol
console.log(typeof Math); // object
console.log(typeof null); // object
console.log(typeof console.log); // function

console.log('\nDATA TYPES - CONVERSIONS')

console.log(String(myBoolean)) // converts a boolean to a string using the String constructor
console.log(String(myBoolean) == myBoolean)
console.log("4" + "4") // no conversion - + concatenates two strings
console.log(Number("4") + Number("4")) // explicit conversion of strings to numbers, forcing addition
console.log("4" * "4") // * does implicit conversion to numbers because multiplying strings doesn't make sense

// implicit conversions
console.log( "1" + 1 + 2 ) // 112 - string ‘1’ is concatenated with number 1 then number 2
console.log( 1 + 1 + "2" ) // 22 - number 1 is added to number 1 then concatenated with string ‘2’
console.log( 1 * 1 * "2" ) // 2 - number 1 is added to number 1 then concatenated with string ‘2’

// explicit conversions
console.log( Number("    4    ") ) // 4 - trims spaces
console.log( Number(null) ) // 0 - intentionally empty value converts to 0
console.log( Number(undefined) ) // NaN - non-existent value is unknown
console.log( Number(false) ) // 0 - false converts to 0
console.log( Number(true) ) // 1 - true converts to 1
console.log( Number("") ) // 0 - empty string converts to 0
console.log( Number("not a number") ) // NaN - non-empty strings beginning with chars cannot convert
console.log( Number("88 is the number eighty eight") ) // NaN as well
console.log( parseInt("88 is the number eighty eight") ) // 88 - different explicit conversion function that parses a string to find integers

console.log('\nDATA TYPES - BOOLEANS & CONDITIONALS')

if ("") console.log('empty string is true') // implicit "" conversion to false - won't print msg. add a negation operator ! to check !"" instead
if (undefined) console.log('undefined is true') // implicit conversion to false - won't print msg

// fully written if statement
if ("") { 
    console.log('my value was true'); 
}
else { 
    console.log('my value was false');
}

// shorthand conditional (ternary) operator that does the same thing
(5 > 3) ? console.log('my value was true') : console.log('my value was false');

// ++ write both an if statement and an equivalent conditional that tests if a variable is greater than zero

let age = 10; // replace this with your age
let name = "William" // replace this with your name

let isAdult = (age >= 18) ? ' is an adult' : ' is not an adult' // can also capture value from conditional and assign to a variable
console.log(name + isAdult)
// ++ create a similar conditional to check if the person is old enough to retire

// the below 'if' is the long hand equivalent of the above conditional 
let isAdult2;

if (age >= 18) {
    isAdult2 = ' is an adult';
} else {
    isAdult2 = 'is not an adult';
}
console.log(name + isAdult2)
// ++ create the if statement equivalent of your retire conditional


console.log(false == 0) // true, because 0 is equivalent to false. ++ try it using === instead

console.log("02" == 2) // true - they are equivalent (types not checked)
console.log("02" === 2) // false - they are not strictly equal (types are checked)