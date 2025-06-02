
class User {
    static count = 0;
    constructor(name) {
        this.name = name;
        User.count++;
    }
    static getUserCount() {
        console.log(`Total users: ${User.count}`);
    }

    greet() {
        console.log(`Hello, ${this.name}!`);
    }

}

User.getUserCount(); // Output: 0
const user1 = new User('Alice');
user1.greet(); // Output: Hello, Alice!
User.getUserCount();
const user2 = new User('Bob');
user2.greet(); // Output: Hello, Bob!

User.getUserCount();
