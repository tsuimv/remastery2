class wheels {
    constructor(size, type, inflator) {
        this.size = size
        this.type = type
        this.inflator = inflator
    }

    whatWheels() {
        return `The bike has ${this.type} ${this.size} wheels with a ${this.inflator} valve`
    }
}

let speed = new wheels('18in', 'aero', 'presta')

console.log(speed.whatWheels())