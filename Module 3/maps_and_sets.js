const plantNames = new Map();
plantNames.set('Bluberry', 'Vaccinium');
plantNames.set('Daylily', 'Hemerocallis');
plantNames.set('Foxglove', 'Digitalis');
plantNames.set('Lavender', 'Lavandula');

const plantNames2 = new Map([
    ['Bluberry', 'Vaccinium'],
    ['Daylily', 'Hemerocallis'],
    ['Foxglove', 'Digitalis'],
    ['Lavender', 'Lavandula'],
])

console.log(plantNames)
console.log(plantNames2)

plantNames.set('Daylily', 'Hemerocallis2')
plantNames.set('Tumeric', 'Curcuma Longa')

console.log('value of Foxglove is ' + plantNames.get('Foxglove'))
console.log('value of basil is ' + plantNames.get('basil'))

console.log(plantNames.has('Daffodil') ? 'daffodil exists': 'daffodil does not exist')
plantNames.delete('tumeric')
plantNames2.clear()

console.log('there are ' + plantNames2.size +' entries in my map/n')

for (let plant of plantNames) {
    console.log(plant); 
}

// console.log('\nSETS')
// const foods = new set(['pizza', 'chips', 'pasta', 'seafood', 'salad', 'noodles', 'vegetables']);

// foods.add('risotto')
// foods.add('pasta')

// console.log(foods)

// for (let food or foods) {
//     console.log('#1: ( for ... of loop) ' + food);
// }

console.log('\nWEAKMAPS')

const people = [
    {firstName: 'Preet', lastName: 'Sa', age: 40, location: 'QLD'},
    {firstName: 'Lauren', lastName: 'De', age: 21, location: 'NSW'},
    {firstName: 'Eryka', lastName: 'Da', age: 21, location: 'NSW'},
    {firstName: 'Gilbert', lastName: 'Ba', age: 19, location: 'NSW'},
    {firstName: 'Raden', lastName: 'Ad', age: 17, location: 'NSW'}

]
const logins = new WeakMap();

function login(person) {
    let loginCount = logins.get(person) ? logins.get(person) : 0;
    loginCount += 1;
    
    console.log(person.firstName + ' has logged in ' + loginCount + ' times')
    logins.set(person, loginCount);
}

login(people[0]);
login(people[1]);
login(people[4]);
login(people[3]);
login(people[0]);