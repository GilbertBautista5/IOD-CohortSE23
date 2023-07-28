console.log('n/Numbers')

let pi = 3.54159
let amount = 25.33333333

console.log(pi.toFixed(3) + pi.toFixed(3))
console.log(parseFloat(amount.toFixed(2))+ 10.50)
console.log(parseInt(pi))

console.log('/nStrings')

let quickFox = 'The quick brown fox jumps over the lazy dog'
let quickFoxUpper = quickFox.toUpperCase()

console.log(quickFox)
console.log(quickFoxUpper)

const compareStrings = (string1, string2) => string1.toLowerCase() == string2.toLowerCase() 
console.log(compareStrings(quickFox, quickFoxUpper))

let name1 = 'Gilbert'
let name2 = 'Gary'
let name3 = 'Jack'
let name4 = 'Jude'

console.log('sentence starts with The ? '+quickFox.startsWith('the'))
console.log('sentence ends with . ?'+quickFox.endsWith('j'))

function startsWithJ(name) {
    return name.toUpperCase().startsWith('J')
}

const startsWithG = (name) => name.toUpperCase().startsWith('G')

console.log(name1+ ' starts with G? '+startsWithG(name1))
console.log(name2+ ' starts with G? '+startsWithG(name2))
console.log(name3+ ' starts with J? '+startsWithJ(name3))
console.log(name4+ ' starts with J? '+startsWithJ(name4))


let indexOfFox = quickFox.indexOf('fox')
console.log('index of fox is' +indexOfFox)
console.log(indexOfFox >= 0 ? ' found fox' : 'not found')

const mobile = 41234567
console.log(mobile) // 8730999 - decimal equivalent

const binary = 0b11111111 // binary form of 255
const octal = 0o377 // octal form of 255
console.log(binary) // 255
console.log(binary === octal) // true