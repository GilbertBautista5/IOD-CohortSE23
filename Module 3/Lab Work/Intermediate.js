// console.log('\nQUESTION1')

// function uppercase(str) {


//   var array1 = str.split(' ');
//   var newarray1 = [];
    
//   for(var x = 0; x < array1.length; x++){
//       newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
//   }
//   return newarray1.join(' ');
// }

// console.log(uppercase("los angeles") ) //Los Angeles

// console.log('\nQUESTION2')

// function truncate(str, maxlength) {
//     return (str.length > maxlength) ?
//       str.slice(0, maxlength - 1) + '…' : str;
//   }

// console.log(truncate('This text will be truncated if it is too long', 25))
// // This text will be truncat...

// console.log('\nQUESTION3')

// const animals = ['Tiger', 'Giraffe']

// animals.push('Lion','Whale');
// animals.unshift('Sloth', 'Beaver')
// animals.sort()
// console.log(animals)

// function replaceMiddleAnimal() {
//     animals.splice(3,4, "new value")

// }

// function findMatchingAnimals () {
// }

console.log('\nQUESTION4')

let camelCase
console.log(camelCase('margin-left')) // marginLeft
console.log(camelCase('background-image')) // backgroundImage
console.log(camelCase('display')) // display


console.log('\nQUESTION5')

let twentyCents = 0.20
let tenCents = 0.10
console.log(`${twentyCents} + ${tenCents} = ${twentyCents + tenCents}`)
// 0.2 + 0.1 = 0.30000000000000004

let fixedTwenty = twentyCents.toFixed(2);
let fixedTen = tenCents.toFixed(2);
console.log(fixedTwenty + fixedTen) //why is this not working?

console.log('\nQUESTION6')

const colours = ['red', 'green', 'blue', 'yellow', 'orange', 'red', 'blue', 'yellow']
const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43]

let duplicatesArray = [ 55, 84, 97, 63, 32, 91, 43 ];
let unique = Array.from(new Set(testScores));

console.log(unique(colours)) // [ 'red', 'green', 'blue', 'yellow', 'orange' ]
console.log(unique(testScores)) // [ 55, 84, 97, 63, 32, 91, 43 ]
