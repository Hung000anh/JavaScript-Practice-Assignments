const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    isEmployed: true,
    greet: function () {
        return `Hello, my name is ${this.firstName} and I am ${this.age} years old.`;
    }
};

// Helper function to append output to HTML
function writeOutput(text) {
    const outputDiv = document.getElementById('output');
    outputDiv.innerText += text + '\n';
}

// Display outputs
writeOutput(`First Name: ${person.firstName}`);
writeOutput(`Age: ${person.age}`);
writeOutput(`Is Employed: ${person.isEmployed}`);
writeOutput(`Greeting: ${person.greet()}`);
writeOutput(`Type of greet: ${typeof person.greet}`);
writeOutput(`Keys: ${Object.keys(person).join(', ')}`);
writeOutput(`Values: ${Object.values(person).join(', ')}`);
writeOutput(`Entries: ${JSON.stringify(Object.entries(person), null, 2)}`);
