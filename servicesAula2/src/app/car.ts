export class Car {

    id: number
    brand: string
    model: string
    color: string
    manufactureYear: number
    modelYear: number

    constructor() {
        this.id = (new Date()).getTime()
    }

}