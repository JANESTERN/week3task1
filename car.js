class Car{
    #millage
    constructor(millage){
        this.#millage=millage
    }
    kevo(){
       return this.#millage; 
    }
}
const car1 = new Car(1000)
console.log(car1.kevo());

