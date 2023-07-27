// const gilbertBautista = {
//     'nameArray' : ["Gilbert", "Bautista"],
//     nameObject: {
//         first: 'Gilbert',
//         last: 'Bautista'
//     },
//     'first-name' : 'Gilbert',
//     lastName: 'Bautista',
//     age: 21,
//     location: 'Sydney',


//     bio() {
//         console.log(`${['first-name']}${this.lastName} is ${this.age} years old`);
//     }
// };

// const phone = {
//     model: 'iPhone 11',
//     colour: 'black',
//     storage: 3
//     }
//     if (phone.colour) console.log(`My ${phone.model} is ${phone.colour}`) // prints message
//     if (phone.storage) { // undefined counts as false, so the below won't print
//     console.log(`My ${phone.model} has ${phone.storage}GB`);
//     }
//     for (let key in phone) { // iterates over each property in the phone object
//         console.log('key: ' + key); // prints each object property name (key) in turn
//         console.log('value: ' + phone[key]); // prints each object value in turn

//     }

//     let person1 = { name: 'Anna' }; // object - stored by reference
// let person2 = person1; // person2 points to same memory location as person1
// person1.name = 'Brian';
// console.log(person2.name); // Brian, even though we changed person1.name
// let person3 = 'Carly'; // string - stored by value
// let person4 = person3; // person4 points to different memory location than person3
// person3 = 'David';
// console.log(person4); // still Carly, since person3 and person4 are string primitives

// const user = { name: 'Gilbert', age: 21 };
// const userClone = {}; // empty object, refers to different memory location
// for (let key in user) { // iterate over user properties
// userClone[key] = user[key]; // re-create them in userClone
// }
// console.log(userClone); // { name: 'Gilbert', age: 21}

// const vehicle = { make: 'Subaru', model: 'WRX'};
// const mergedUser = {...user, ...vehicle};
// console.log(mergedUser); // { name: 'Gilbert', age: 21, make: 'Subaru', model: 'WRX' }

// const box1 = {
//     weight: '20kg',
//     dimensions: { //nested object property
//     width: '30cm',
//     height: '10cm'
//      }

//     }
//     const box2 = {...box1}; // shallow clone
//     box1.dimensions.height = '12cm'; //change box1 nested object property
//     console.log(box2); // box2 references box1 dimensions and picks up height change

    // const user = {
    //     name: 'Bilbo Baggins',
    //     printThis() {
    //     console.log(this) // 'this' is the current object
    //     return this; // if we return it, we can 'chain' object methods together
    //     },
    //     printGreeting() {
    //     console.log(`Hello, I'm ${this.name}`) // 'this' is the current object
    //     }
    //     }
    //     user.printThis().printGreeting();

        function User(first, last) { // constructor function
            this.first = first;
            this.last = last;
        
            }
            // we can create multiple users with different names
            let user1 = new User('Gilbert', 'Bautista') // need to use 'new'
            let user3 = new User('Connor', 'McGregor') // need to use 'new'

            console.log(user1) // User { first: 'Gilbert', last: 'Bautista' }
            console.log(user3) // User { first: 'Connor', last: 'McGregor' }
           
            user1.first = 'Lauren'

            console.log(user1)
            console.log(user3)

            class newUser {
                constructor(newFirst, newLast) {
                    this.nameArray = [newFirst, newLast];
                    this.nameObject = {first: newFirst, last: newLast}
                this.first = newFirst;
                this.last = newLast;
                }
                hasShortName() {
                return this.first.length >= 3
                }
                }
                let user4 = new User('Will', 'Smith') // need to use 'new'
                console.log(user4) // User { first: 'Will', last: 'Smith' }


              