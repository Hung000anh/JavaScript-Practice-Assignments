function Car(make, model, year, color) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.getDetails = function() {
        return `${this.year} ${this.color} ${this.make} ${this.model}`;
    };
}

const car1 = new Car('Toyota', 'Corolla', 2020, 'blue');

console.log(car1.make); // Output: Toyota
console.log(car1.model); // Output: Corolla
console.log(car1.year); // Output: 2020
console.log(car1.color); // Output: blue
console.log(car1.getDetails()); // Output: 2020 blue Toyota Corolla
console.log(car1); // Output: Car { make: 'Toyota', model: 'Corolla', year: 2020, color: 'blue', getDetails: [Function] }
console.log(typeof car1.getDetails); // Output: function
console.log(Object.keys(car1)); // Output: [ 'make', 'model', 'year', 'color', 'getDetails' ]