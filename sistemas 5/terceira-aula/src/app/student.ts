export class Student {

    id: number
    name: string
    email: string

    constructor(id?: number, name?: string, email?: string) { //? deixa o campo opcional
        this.id = id
        this.name = name                         //campo obrigadotorio vem antes de  
        this.email = email                     //campo opcional 
    }

}