function start() {
    return new Promise(resolve =>
    setTimeout(() => { console.log('started preparing pizza...'); resolve(makebase) } ,0));
}

function makebase() {
    setTimeout(() => console.log('Made the base'), 1000);
}

const addCheese = function() {
    setTimeout(() => console.log('added the sauce and cheese'), 2500);
}

const addToppings = function() {
    setTimeout(() =>console.log('added the pizza toppings'), 3500);
}

const cook = () => setTimeout(() => console.log('cooked the pizza'), 5000);

const finish = () => setTimeout(() => console.log('pizza is ready'), 10000);

start()
makebase()
addCheese()
addToppings()
cook()
finish()