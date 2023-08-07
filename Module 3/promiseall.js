//run 'npm init' and accept all the defaults 
//run 'npm install node-fetch' 
//add this line to package.json after line 5: "type": "module", 
import fetch from 'node-fetch' 
globalThis.fetch = fetch 

// fetches a single URL and returns a promise of the JSON data (or throws an error)
function fetchURLData(url) { 
    let fetchPromise = fetch(url).then(response => { 
        if (response.status === 200) { return response.json(); } 
        else { throw new Error(`${url} Request failed with status ${response.status}`); } 
    }); 
    return fetchPromise; 
} 

fetchURLData('https://jsonplaceholder.typicode.com/todos/1') 
    .then(data => console.log(data)) 
    .catch(error => console.error(error.message));


// fetches multiple URLs via urls.map, and uses Promises.all to resolve all of them into a returned array
function fetchMultipleURLData(urls) { 

    // maps array of URL strings into array of promises, then resolves them all into an array
    return Promise.all(urls.map(url => fetch(url).then(response => { 
        if (response.status === 200) { return response.json(); } 
        else { throw new Error(`${url} Request failed with status ${response.status}`); } 
    }) )); 
} 

fetchMultipleURLData(['https://jsonplaceholder.typicode.com/todos/1','https://jsonplaceholder.typicode.com/todos/2','https://jsonplaceholder.typicode.com/todos/3',
    'https://jsonplaceholder.typicode.com/todos/4','https://jsonplaceholder.typicode.com/todos/5','https://jsonplaceholder.typicode.com/todos/6']) 
    .then(data => console.log(data)) 
    .catch(error => console.error(error.message));