function makeMultiplier(x) {
    return function (y) {
        return x * y;
    }
}

const times5 = makeMultiplier(5);
const times10 = makeMultiplier(10);

console.log( times5(10) );
console.log( times10(100) );

function makeHeading(hTag) { // every call to makeHeading could have different values for hTag
    return function(title) { //unnamed closure function, can access value of hTag when created
    return `<${hTag}>${title}</${hTag}>`
    }
}
const getH1 = makeHeading('h1') // sets hTag to h1, creates new instance of closure in getH1
const getH2 = makeHeading('h2') // sets hTag to h2, creates separate instance of closure in getH2
console.log( getH1('Heading 1') ) // sets title to Heading 1 inside <h1>: <h1>Heading 1</h1>
console.log( getH2('Heading 2') ) // sets title to Heading 2 inside <h2>: <h2>Heading 2</h2>

console.log('name of printcat function is ' + printCat.name)
console.log('length of printcat function is ' + printCat.length)
console.log('custom of printcat function is ' + printCat.custom)
console.log(printCat.name + ' has')

function sayHi() {
    console.log('Hi');
    sayHi.counter++; // increment the custom counter property every time the function is called
    }
sayHi.counter = 0 // initialise the counter to 0 before calling it
sayHi() // Hi - calls the function and increments the counter
sayHi() // Hi - calls the function and increments the counter again

console.log( `Called ${sayHi.name} ${sayHi.counter} times` ) // Called sayHi 2 times

function printGreeting(name) { // simple undecorated function
console.log('Hello, ' + name);
}
printGreeting('Undecorated')
function loggingTimingDecorator(originalFunction) { // decorator takes a function as parameter
return function (name) { // and returns that function with extra bits - timing/logging
console.time('Function timer'); // start a timer
console.log(`\nExecuting function ...`) // log a message
const result = originalFunction(name); // execute the original function and store result
console.timeEnd('Function timer'); // stop the timer
return result; // return the result of running the original function
}
}
// returns the original function WITH the timing/logging features included
const decoratedPrintGreeting = loggingTimingDecorator(printGreeting);
decoratedPrintGreeting('Decorated') // we can still call the decorated version in the same way