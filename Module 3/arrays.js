const cities_au = ['Sydney', 'Melbourne', 'Adelaide', 'Cairns', 'Brisbane']

console.log("PUSH, POP, UNSHIFT")

cities_au.push('Perth')
console.log('New list of cities after push: '+cities_au)

let lastCity = cities_au.pop()
console.log('last city is '+lastCity)
console.log('New list of cities after pop: '+cities_au)

console.log(cities_au.sort())
console.log(cities_au)

console.log('\nFOREACH')

cities_au.forEach( (city, index) => console.log(`${index}: ${city}`)) // list with index

for (let city of cities_au) {
    console.log(`${city}`)
} // list without index

const people = [
    {firstName: 'Preet', lastName: 'Sa', age: 40, location: 'QLD'},
    {firstName: 'Lauren', lastName: 'De', age: 21, location: 'NSW'},
    {firstName: 'Eryka', lastName: 'Da', age: 21, location: 'NSW'},
    {firstName: 'Gilbert', lastName: 'Ba', age: 19, location: 'NSW'},
    {firstName: 'Raden', lastName: 'Ad', age: 17, location: 'NSW'}
]

people.forEach( (person, i) => console.log(`#${i}: ${person.firstName} ${person.lastName} is ${person.age} years old`))

let qldPerson = people.find((person) => person.location == 'QLD')
console.log(`\nFirst person whose location matches QLD:`)
console.log(qldPerson)

let newAges = people.map(person => (person.age+1));
let names = people.map(person => ({firstName: person.firstName, lastName: person.lastName}));
console.log(`\nAll perople with age incremented by 1:`)
console.log(newAges)
console.log(names)

console.log(' Total age of all people: ' + people.reduce((sum, person) => sum + person.age, 0));

// ++ use split, map and join to change the months into their short 3 letter version:
let months = 'January,February,March,April,May,June,July,August,September,October,November,December';


// ++ In the Philippines they refer to the 'ber' (brr) months as the colder part of the year. Try and return an array of just the ber months

// ++ use array functions, and/or a for ... of loop to print out just the name and age of each person
