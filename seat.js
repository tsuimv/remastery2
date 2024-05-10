class seat {
    constructor(shape, fabric) {
        this.shape = shape
        this.fabric = fabric
    }

    whatSeat() {
        return `The seat is a(n) ${this.shape} seat with ${this.fabric}`
    }
}

let aero = new seat('aero', 'leather')

console.log(aero.whatSeat())