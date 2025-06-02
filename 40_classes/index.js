class Product
{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }

    displayProduct() {
        console.log(`Product Name: ${this.name}, Price: $${this.price}`);
    }
    calculateTotal(salesTaxRate) {
        return this.price + (this.price * salesTaxRate);
    }
}

const product = new Product('Laptop', 1200);
const product2 = new Product('Smartphone', 800);
const product3 = new Product('Tablet', 600);


product.displayProduct(); // Output: Product Name: Laptop, Price: $1200
product2.displayProduct(); // Output: Product Name: Smartphone, Price: $800
product3.displayProduct(); // Output: Product Name: Tablet, Price: $600

const total = product.calculateTotal(0.07); // Assuming a sales tax rate of 7%
console.log(`Total Price with Tax: $${total.toFixed(2)}`); // Output: Total Price with Tax: $1284.00
