class handlebars {
    constructor(figure, brakes) {
        this.figure = figure
        this.brakes = brakes
    }

    whatHandlebars() {
        return `The bike comes with ${this.figure} handlebars and ${this.brakes} for brakes`
    }
}

let time = new handlebars('butterfly', 'front')

console.log(time.whatHandlebars())