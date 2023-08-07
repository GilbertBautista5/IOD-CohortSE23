let famousMovie = {
    title: 'fight club',
    released: 1999,
    actors: [ 'Brad Pitt', ' edward norton', ' Helena bonham Carter'],
    synopsis: ' Edward norton forms a "fight club" with soap salesman Brad Pitt',
    printDescription() {
        console.log(`${this.title} was a release in ${this.released} and stars ${this.actors.join(', ')}, ${this.synopsis}.`)
    }
}

setTimeout(() => famousMovie.printDescription(), 1000);
famousMovie = {...famousMovie, title: "Fight Club Pt2"};
console.log(famousMovie)