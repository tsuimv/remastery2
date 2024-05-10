class gear {
    constructor(speed) {
        this.speed = speed
    }

    whatGear() {
        return `The bike comes with a ${this.speed} gear speed`
    }
}

let eight = new gear('eight')

console.log(eight.whatGear())