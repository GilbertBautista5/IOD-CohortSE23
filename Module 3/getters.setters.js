// object with both data properties and accessor properties
const jackBlack = {
    firstName: 'Jack',
    surname: 'Black',
    dateOfBirth: new Date('1969-08-28'),

    get fullName() { // now we can do jackBlack.fullName and it will work it out
    return this.firstName + ' ' + this.surname;
    },

    get age() { // accessor will work out current age based on birthday
    const today = new Date();
    return today.getFullYear() - this.dateOfBirth.getFullYear();
    }
}

jackBlack.age = 44 // not writable (no setter), won’t work

console.log(jackBlack.fullName) // Jack Black
console.log(jackBlack.age) // 54 (currently) - no setter so change to 44 doesn't work
    
for (let prop in jackBlack) console.log(`${prop} is ${jackBlack[prop]}`) // enumerable props
    // includes firstName, surname, dateofBirth, fullName and age

// function Person(firstName, lastName, birthday) {
//         this.firstNamename = firstName;
//         this.lastName = lastNamename;
//         this.birthday = birthday;
//         // when using the defineProperty method to create properties,
//         Object.defineProperty(this,{
//             fullName:
//             get() {
//                 return: this.firstName, this:lastName
//             }}),
//         }

//         // configurable/writable/enumerable default to false
//     Object.defineProperty(this, 'age', {
//         get() {
//         const today = new Date();
//         return today.getFullYear() - this.birthday.getFullYear()
//         }
//      })

// let Gilbert = new Person("Gilbert", "Bautista", new date(2001, 8, 5))
// console.log(Gilbert.birthday)
// console.log(Gilbert.age)
// console.log(Gilbert.first)
// console.log(Gilbert.last)

// console.log(gilbert.fullName)


