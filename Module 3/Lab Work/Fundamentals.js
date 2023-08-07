// ('/nQuestion1')
"" + 1 + 0 //10
"" - 1 + 0 //-1
true + false //1
!true // false
6 / "3" // 2
"2" * "3" // 6
4 + 5 + "px" //9x
"$" + 4 + 5 //$45
"4" - 2 //2
"4px" - 2 //Nan
" -9 " + 5 //-9 5
" -9 " - 5 -14
null + 1 //1
undefined + 1 //NaN
undefined == null // true
undefined === null // false
" \t \n" - 2 //-2

// ('/nQuestion2')

let three = "3"
let four = "4"
let thirty = "30"

//what is the value of the following expressions?
let addition = three + four //7
let multiplication = three * four //13
let division = three / four //0.75 (Decimals, we.ll need to use .toFixed)
let subtraction = three - four //-1
let lessThan1 = three < four //true
let lessThan2 = thirty < four // false

// ('/nQuestion3')

if (0) console.log('#1 zero is true')
if ("0") console.log('#2 zero is true')
if (null) console.log('null is true') // doesnt print because null has no value
if (-1) console.log('negative is true')
if (1) console.log('positive is true')

// ('/nQuestion4')
let a = 2, b = 3;
let result = `${a} + ${b} is `;
if (a + b < 10) {
result += 'less than 10';
} else {
result += 'greater than 10';
}

// ('/nQuestion5')
function getGreeting(name) {
    return 'Hello ' + name + '!';
    }


