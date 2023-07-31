('\nQUESTION6')

const westley = {
    name: 'Westley',
    numFingers: 5
    }
    const rugen = {
    name: 'Count Rugen',
    numFingers: 6
    }
    const inigo = {
    firstName: 'Inigo',
    greeting(person) {
    let greeting = `Hello ${person.name}, my name is ${this.firstName}. `;
    console.log(greeting + this.getCatchPhrase(person));
    },
    getCatchPhraseA(person) {
    if (person.numFingers < 6)
     return 'Nice to meet you.';
     else {
        return "you killed my father, prepare to die"
     }
    },
    getCatchPhrase: (person) => (person.numFingers < 6 ) ? "nice to meet you." : "you killed my father, prepare to die!"

    }
    inigo.greeting(westley)
    inigo.greeting(rugen)

('\nQUESTION7')
    const basketballGame = {
        score: 0,
        fouls: 0,

        foul() {
        this.fouls++;
        return this
        },

        basket() {
        this.score += 2;
        return this
        },

        threePointer() {
        this.score += 3;
        return this
        },

        halfTime() {
        console.log(`Halftime score is ${this.score}. Fouls: ${this.fouls}`);
        return this
        }
        }
        //modify each of the above object methods to enable function chaining as below:
        basketballGame
        .basket()
        .foul()
        .freeThrow()
        .basket()
        .threePointer()
        .halfTime();