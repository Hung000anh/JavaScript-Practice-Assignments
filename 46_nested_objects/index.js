const output = [];

function log(msg) {
  output.push(msg);
}

const Person = {
  name: "John Doe",
  age: 30,
  address: {
    street: "123 Main St",
    city: "Anytown",
    state: "CA"
  },
  hobbies: ["reading", "traveling", "gaming"]
};

log(`Name: ${Person.name}`);
log(`Age: ${Person.age}`);

log(`Street: ${Person.address.street}`);
log(`City: ${Person.address.city}`);
log(`State: ${Person.address.state}`);

log("Hobbies:");
for (const hobby of Person.hobbies) {
  log(`- ${hobby}`);
}

log("Address Properties:");
for (const key in Person.address) {
  log(`${key}: ${Person.address[key]}`);
}

document.getElementById("output").textContent = output.join("\n");
