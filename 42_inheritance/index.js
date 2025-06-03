class Animal {
    alive = true;
    eat() {
        return `${this.name} is eating.`;
    }
    sleep() {
        return `${this.name} is sleeping.`;
    }
}

class Rabbit extends Animal {
    name = "Rabbit";
    run() {
        return `${this.name} is running.`;
    }
}

class Fish extends Animal {
    name = "Fish";
    swim() {
        return `${this.name} is swimming.`;
    }
}

class Hawk extends Animal {
    name = "Hawk";
    fly() {
        return `${this.name} is flying.`;
    }
}

const output = document.getElementById("output");
const rabbit = new Rabbit();
const fish = new Fish();
const hawk = new Hawk();

const logs = [
    `Rabbit alive: ${rabbit.alive}`,
    rabbit.eat(),
    rabbit.run(),
    `Fish alive: ${fish.alive}`,
    fish.eat(),
    fish.swim(),
    `Hawk alive: ${hawk.alive}`,
    hawk.eat(),
    hawk.fly()
];

output.textContent = logs.join("\n");
