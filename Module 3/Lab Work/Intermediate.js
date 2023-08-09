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

// console.log('\nQUESTION4')

// function camelCase(cssProp) {
//   let words = cssProp.split('-')
//   for (let i = 0; i < words.length; i++){
//     if (i === 0) {
//       words[i] = words[i]
      
//     }
//     else { 
//       words[i] = words[i].slice(0,1).toUpperCase()+words[i].slice(1)
//     }

//   } 
//   return words.join('')
// }

// function camelCase2(cssProp) {
//   let words = cssProp.split('-') 
//   let camelCaseWord = ''
//   words.forEach((word) => {
//     if (word===words[0]) {
//       camelCaseWord += word
//     }
//     else {
//     camelCaseWord+=word.slice(0,1).toUpperCase()+word.slice(1)

//     }
//   })
//   return camelCaseWord
// }

// function camelCase3(cssProp) {
//   let words = cssProp.split('-') 
//   let camelCaseWord = '' 
//   words.forEach((word) => {
//     return word===words[0] ? camelCaseWord+=word : camelCaseWord+=word.slice(0,1).toUpperCase()+word.slice(1)
//   })
// return camelCaseWord
// }

// console.log(camelCase3('margin-left')) // marginLeft
// console.log(camelCase3('background-image')) // backgroundImage
// console.log(camelCase3('display')) // display


// console.log('\nQUESTION5')

// let twentyCents = 0.20
// let tenCents = 0.10
// console.log(`${twentyCents} + ${tenCents} = ${twentyCents + tenCents}`)
// // 0.2 + 0.1 = 0.30000000000000004


// function currencyAddition(float1, float2){
//   const result = float1+float2
//   return result.toFixed(2)

// }

// console.log(currencyAddition(0.1, 0.2))

// function currencyOperation(float1, float2, operation){
//   switch (operation) {
//     case '+' :
//       return (float1 + float2).toFixed(2)
//       break;
//     case '-' :
//       return (float1 - float2).toFixed(2)
//       break;
//     case '/' :
//       return (float1 / float2).toFixed(2)
//       break;
//     case '*' : 
//     return (float1 * float2).toFixed(2)
//     break;
//     default: 
//     console.log('invalid operator')
//       break;
//   } 
// }
// console.log(currencyOperation(1.3, 3.4, '*'))


// let fixedTwenty = twentyCents.toFixed(2);
// let fixedTen = tenCents.toFixed(2);
// console.log(fixedTwenty + fixedTen) //why is this not working? // because the are strings

// console.log('\nQUESTION6')

// const colours = ['red', 'green', 'blue', 'yellow', 'orange', 'red', 'blue', 'yellow']
// const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43]

// function unique(duplicatesArray) {
//   const uniqueArray = []
//   duplicatesArray.forEach(element => {
//     if (!uniqueArray.includes(element)){
//       uniqueArray.push(element)
//     }
    
//   });
// return uniqueArray
// }

// console.log(unique(colours)) // [ 'red', 'green', 'blue', 'yellow', 'orange' ]
// console.log(unique(testScores)) // [ 55, 84, 97, 63, 32, 91, 43 ]

// console.log('\nQUESTION7')

// const books = [
//   { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
//   { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
//   { id: 3, title: '1984', author: 'George Orwell', year: 1949 },
//   { id: 4, title: 'Brave New World', author: 'Aldous Huxley', year: 1932 },
//   { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 },
//   ];

// function getBookTitle(bookId) {
//   const found = books.find((book) => book.id===bookId)
//   return found.title
// }

// function getOldBooks() {
//   return books.filter((book) => book.year < 1950)
  
// }
// function addGenre() {
//   books.map((book) => book.genre='classic')
// }


// console.log(getBookTitle(3))
// console.log(getOldBooks())
// addGenre()
// console.log(books)

console.log('\nQUESTION8')

const phoneBookABC = new Map() //an empty map to begin with
phoneBookABC.set('Annabelle', '0412312343')
phoneBookABC.set('Barry', '0433221117')
phoneBookABC.set('Caroline', '0455221182')

const phoneBookDEF = new Map([
  ['Daniel', '0475978272'], 
  ['Elaine', '0438926452'],
  ['Francis', '0468340723']
])

phoneBookABC.set('Caroline', '0467583212')

function printPhoneBook(contacts){
  for (let contact of contacts) {
    console.log(contact)
  }

}

const combinedPhoneBook = new Map([
...phoneBookABC, ...phoneBookDEF
])


printPhoneBook(phoneBookABC)
console.log(...combinedPhoneBook.keys())

console.log('\nQUESTION9')

let salaries = {
  "Timothy" : 35000,
  "David" : 25000,
  "Mary" : 55000,
  "Christina" : 75000,
  "James" : 43000
  };

function sumSalaries(salaries) {
  let totalSalaries = 0;
for (const person in salaries) {
  totalSalaries+=salaries[person]
}
return totalSalaries

}

console.log(sumSalaries(salaries))

console.log('\nQUESTION10')

const today = new Date();
console.log('Current time is ' + today.toLocaleTimeString())
console.log(today.getHours() + ' hours have passed so far today')
console.log(today.getMinutes() + ' minutes passed today')
console.log(today.getSeconds() + ' seconds passed today')

