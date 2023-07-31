const myName = ['Gilbert', 'Mikhail', 'Bautista']
const [firstName, middleName, lastName] = myName
const [firstNameInitial ,] = firstName
const [lastNameInitial ,] = lastName

console.log(firstName, middleName, lastName)
console.log(firstNameInitial, lastNameInitial)

console.log('\nOBJECT DESTRUCTURING')

function displayComponent({height = 200, width = 100, title, color = 'black'}) {
    console.log(height)
    console.log(width)
    console.log(title)
    console.log(color)
    
    console.log(`<div style="width:${width}px; height:${height}px; ${color}"><h2>${title}</h2></div>`)

    }
    displayComponent({width:200, title:'My Awesome Component'})
    displayComponent({title:'My Amazing Component'})
    displayComponent({width:300, height:300, title:'My Average Component'})
    displayComponent({Color:'Black'})

    const movie = {
        title: 'Barbie',
        year: 2023,
        directedBy: 'Greta Gerwig',
        starring: [ 'Noah Baumbach', 'Margot Robbie', 'Emma Mackey', 'Simu Liu', 'Saoirse Ronan'],
        plot: 'Barbie is on a quest to search her self following a existential crisis'
    }

    // for (let [propertyName, propertyValue])