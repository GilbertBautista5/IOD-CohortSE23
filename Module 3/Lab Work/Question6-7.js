// ('\nQUESTION6')

// const westley = {
//     name: 'Westley',
//     numFingers: 5
//     }
//     const rugen = {
//     name: 'Count Rugen',
//     numFingers: 6
//     }
//     const inigo = {
//     firstName: 'Inigo',
//     greeting(person) {
//     let greeting = `Hello ${person.name}, my name is ${this.firstName}. `;
//     console.log(greeting + this.getCatchPhrase(person));
//     },
//     getCatchPhraseA(person) {
//     if (person.numFingers < 6)
//      return 'Nice to meet you.';
//      else {
//         return "you killed my father, prepare to die"
//      }
//     },
//     getCatchPhrase: (person) => (person.numFingers < 6 ) ? "nice to meet you." : "you killed my father, prepare to die!"

//     }
//     inigo.greeting(westley)
//     inigo.greeting(rugen)
    
//     console.log('\nQUESTION7')
//     const basketballGame = {
//         score: 0,
//         fouls: 0,

//         freeThrow() {
//             this.score++;
//             return this
//             },

        
//         foul() {
//         this.fouls++;
//         return this
//         },

//         basket() {
//         this.score += 2;
//         return this
//         },

//         threePointer() {
//         this.score += 3;
//         return this
//         },

//         halfTime() {
//         console.log(`Halftime score is ${this.score}. Fouls: ${this.fouls}`);
//         return this
//         }
//         }
//         //modify each of the above object methods to enable function chaining as below:
//         basketballGame
//         .basket()
//         .freeThrow()
//         .freeThrow()
//         .basket()
//         .threePointer()
//         .halfTime();

// console.log('\nQUESTION8')
// const sydney = {
//     name: 'Sydney',
//     population: 5_121_000,
//     state: 'NSW',
//     founded: '26 January 1788',
//     timezone: 'Australia/Sydney'
//     }

// const Melbourne = {
//     name: 'Melbourne',
//     resturants: ['mcDonalds', 'kfc', 'hungry jacks'],
//     suburbs: '35000'
// }

// function cityProperties(cityObject) {
//     for(let cityProp in cityObject) {
//         console.log(cityProp + ': ' + cityObject[cityProp])

//     }
// }

// cityProperties(Melbourne)
// console.log(Melbourne['resturants'])


// console.log('\nQUESTION9')

// let teamSports = ['Hockey', 'Cricket', 'Volleyball'];
// let dog1 = 'Bingo';
// let cat1 = { name: 'Fluffy', breed: 'Siberian' };
// let moreSports2 = [...teamSports]
// let moreSports = teamSports;
// moreSports.push('Basketball');
// moreSports.unshift('Soccer');

// let dog2 = dog1;
// dog2 = 'Dingo' // dog 2 is a primitve type, and stored by value
// let cat3 = {...cat1}
// let cat2 = cat1;
// cat2.name = ['Kai']; //objects are stored by references cat2 points to the same memory location as cat1
// console.log(dog1)

// console.log(teamSports) // arrays are stored by references and more sports points to the same memory location
// console.log(dog1)
// console.log(cat1)

//  console.log(moreSports2)
// console.log(cat3)

// console.log('\nQUESTION10')

function Person(name, age) {
    this.name = name;
    this.age = age;
    this.human = true;
    this.canDrive = () => this.age>=16
    }

let person = new Person('Gilbert', 21);
let person2 = new Person('Ben', 30);
console.log(person.canDrive())
console.log(person2)

class PersonClass {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.human = true;
    }
 canDrive() {
    return this.age >=16
 }
}

let person3 = new PersonClass('Jake', 26)
console.log(person3)
console.log(person2)










// let myFakeObj = {
//     accessMeWithDotNotation: 'Well done!',
//     'access-me-with-bracket-notation': 'Nice one!',
//     5: "Why can't I be accessed with dot notation?",
//     iAmANestedObject: {
//       'access-me-as-a-nested-object': 'Great work!',
//       chainDotNotationTogether: 'Awesome stuff.',
//       'a-Further-Nested-Object': {
//         tryMeWithDotNotation: 'Hello!',
//         6: 'Goodbye!',
//       },
//     },
//   };


// console.log(myFakeObj.iAmANestedObject['a-Further-Nested-Object'])
// console.log(myFakeObj.iAmANestedObject['a-Further-Nested-Object'].tryMeWithDotNotation)

// console.log(
//     myFakeObj.iAmANestedObject['a-Further-Nested-Object'].tryMeWithDotNotation
//   ); // bad
//   console.log(
//     myFakeObj.iAmANestedObject['a-Further-Nested-Object']['tryMeWithDotNotation']
//   ); // better




 

