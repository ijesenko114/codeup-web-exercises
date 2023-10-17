class Car {
    constructor(make,model,year,color) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
    }
    honk() {
        console.log(`Honk! Honk! The ${this.year} ${this.make} ${this.model} is honking.`);
    }
}
let car1 = new Car("Honda","Civic","2020","Grey");
console.log(car1);
car1.honk();