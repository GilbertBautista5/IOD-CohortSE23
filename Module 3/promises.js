// // https://javascript.info/promise-basics
// // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises

// // produces a random song after 1 second: if successful calls the resolve function, if unsuccessful calls the reject function
// // functions passed as params like this are called 'callbacks'
// function produceSong(resolve, reject) 
// {
//     const artists = ['Taylor Swift', 'Beyonce', 'Drake', 'Ed Sheeran', 'Rihanna', 'Lizzo', 'Harry Styles']
//     const randomArtist = Math.floor(Math.random() * artists.length) // random number corresponding to one of the above artists

//     const songs = ['Unstoppable', 'Halo', 'One Dance', 'Shape of You', 'Umbrella', 'About Damn Time', 'Watermelon Sugar']
//     const randomSong = Math.floor(Math.random() * songs.length) // random number corresponding to one of the above songs

//     const randomOutcome = Math.round(Math.random()) // returns either 0 or 1 randomly for failure (0) or success (1)

//     let successResult = artists[randomArtist] + ' has just released their newest song called ' + songs[randomSong]
//     let failResult = artists[randomArtist] + ' has no new songs'

//     //setTimeout(() => randomOutcome ? resolve(successResult) : reject(failResult), 1000)

//     // a longhand version of the above setTimeout, without arrow functions or conditional statements:
//     setTimeout(function() {
//        if (randomOutcome == 1) resolve(successResult) // calls the resolve callback to indicate successful promise resolution, native to promise producer functions
//        else reject(failResult) // calls the reject callback to indicate failed promise resolution, native to promise producer functions
//     }, 1000)
// }

// // using the above WITHOUT a Promise - just callbacks:
// produceSong(
//     (msg1) => console.log(`Success #0: ${msg1}`), // brackets around msg1 are optional when only one function argument
//     (msg2) => console.error(`Failure #0: Sorry fans, ${msg2}`)
// )


// // using the above WITH a Promise:

// let songPromise = new Promise(produceSong) // songPromise can be used to capture and act on the unknown result of produceSong

// // use .then to run when there is a result (either resolve or reject function is executed). 
// // takes two parameters: first a function for success, second a function for failure (optional)
// songPromise.then(
//     (successMsg) => console.log(`Success #1: ${successMsg}`),
//     failMsg => console.error(`Failure #1: Sorry fans, ${failMsg}`) // if we leave this out, it will only handle success. rejected promises will throw errors
// )

// // or if we only want to do something in case of error there are two options:
// songPromise.then(
//     null,
//     failMsg => console.error(`Failure #2: Sorry fans, ${failMsg}`)
// )

// // or use catch (with or without then):
// songPromise
//     .then(successMsg => console.log(`Success #3: ${successMsg}`))
//     .catch(failMsg => console.error(`Failure #3: Sorry fans, ${failMsg}`))

// // can also use finally (optional) if anything needs to happen regardless of success/failure:
// // finally takes no arguments and does generic cleanup - will run in the order you specify
// songPromise
//     .then(successMsg => console.log(`Success #4: ${successMsg}`))
//     .catch(failMsg => console.error(`Failure #4: Sorry fans, ${failMsg}`))
//     .finally(() => console.log('Song production now finalised.'))


// // -----------------------

// // we can also handle promises using async and await keywords instead of .then (without flexibility of inbuilt error handling)
// // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function


// // if we want to handle errors using this syntax we need to use a try...catch

// async function waitForSong() {
//     try {
//         let latestSong = await songPromise;
//         console.log(`Success #5: ${latestSong}`)

//         return true;
//     } catch(error) {
//         console.error(`Failure #5: Sorry fans, ${error}`)
//     }
//     finally {
//         console.log('Song production now finalised.')
//     }

//     return false;
// }

// // if using await inside a function, the function has to be declared as async like this (see fetch.js): 
// //async function myFunction() {...}

// let songResult = await waitForSong()
// console.log(songResult)

// example promise. settles after 250ms with success or failure depending on random number
const promise = new Promise((resolve, reject) => { // resolve/reject are callback functions
    if (Math.random() > 0.5) setTimeout( () => resolve('Random number ok'), 250 ) // success
    else setTimeout( () => reject('Random number too low'), 250 ) // failure
})

    promise // consume the promise by responding to outcomes when they happen
    .finally( () => console.log('Finally Wait is over, promise has settled.') ) // always prints
    .then( (result) => console.log('ThenSuccess! ' + result ) ) // prints resolve msg
    .catch( (error) => console.log('Catch Error! ' + error ) ) // prints reject msg

try{ 
let result = await promise;
console.log('await result: ' + result)
} catch (e) {
    console.log('await error: ' + e)
}