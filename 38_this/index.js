const person = {
    name: 'John',
    age: 30,
    isEmployed: true,
    greet: function() {
        const message = `Hello, my name is ${this.name} and I am ${this.age} years old.`;
        console.log(message);
        appendOutput(message);
    },
    eat: function() {
        const message = `${this.name} is eating.`;
        console.log(message);
        appendOutput(message);
    },
};

function appendOutput(text) {
    const outputEl = document.getElementById('output');
    outputEl.textContent += text + '\n';
}

// Console and page output
appendOutput(`Name: ${person.name}`);        // Output: John
appendOutput(`Age: ${person.age}`);          // Output: 30
appendOutput(`Employed: ${person.isEmployed}`); // Output: true
person.greet();                              // Output: Hello, my name is John...
person.eat();                                // Output: John is eating.

console.log(person);
