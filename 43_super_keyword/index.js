class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    move() {
        return `${this.name} is moving.`;
    }
}

class Rabbit extends Animal {
    constructor(name, age, runSpeed) {
        super(name, age); // Call Animal constructor
        this.runSpeed = runSpeed;
    }

    run() {
        return `${this.name} runs at ${this.runSpeed} km/h.`;
    }
}

class Fish extends Animal {
    constructor(name, age, swimSpeed) {
        super(name, age);
        this.swimSpeed = swimSpeed;
    }

    swim() {
        return `${this.name} swims at ${this.swimSpeed} km/h.`;
    }
}

class Hawk extends Animal {
    constructor(name, age, flySpeed) {
        super(name, age);
        this.flySpeed = flySpeed;
    }

    fly() {
        return `${this.name} flies at ${this.flySpeed} km/h.`;
    }
}

// Create instances
const rabbit = new Rabbit("Rabbit", 2, 30);
const fish = new Fish("Fish", 1, 10);
const hawk = new Hawk("Hawk", 3, 50);

// Prepare output
const output = document.getElementById("output");
const logs = [
    `Name: ${rabbit.name}, Age: ${rabbit.age}, Run Speed: ${rabbit.runSpeed}`,
    rabbit.move(),
    rabbit.run(),
    "",
    `Name: ${fish.name}, Age: ${fish.age}, Swim Speed: ${fish.swimSpeed}`,
    fish.move(),
    fish.swim(),
    "",
    `Name: ${hawk.name}, Age: ${hawk.age}, Fly Speed: ${hawk.flySpeed}`,
    hawk.move(),
    hawk.fly()
];

output.textContent = logs.join("\n");
