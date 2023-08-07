let animal = {
    eats: true,
    sleeps: true,
    legs: 4,
    mammal: true
};

let rabbit = Object.create(animal, {
    jumps: {
        value: true,
        enumerable: true
    }
});
console.log(rabbit)
rabbit.jumps = true

function Dog(name) {
    this.name = name;
}
Dog.prototype = animal;
const dog = new Dog('Kaiser');
console.log('dog eats? '+ dog.eats );

for (let prop in dog) console.log(`${prop} is ${dog[prop]}`); 

let animal2 = {
    eats: true,
    legs: false,
    swims: true
}

let fish = Object.create(animal, {
    swims: {
        value: true,
        enumerable: true
    }
})

let bream = {swims: true}
Object.setPrototypeOf(bream, animal);
console.log('Bream')
console.log(fish)

console.log(bream.eats)
console.log(bream.swims)
console.log(bream.legs)

