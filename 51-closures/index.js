// Example 1: Basic Closure
function outer() {
  let message = "Hello from inner function!";
  function inner() {
    console.log(message); // Accesses outer variable
  }
  inner();
}
outer();

// Example 2: Global counter (not a closure)
let globalCount = 0;
function increment() {
  globalCount++;
  console.log("Global Count:", globalCount);
}
increment();
increment();
increment();

// Example 3: Closure counter
function createCounter() {
  let count = 0; // private variable
  function increment1() {
    count++;
    console.log("Counter:", count);
  }
  function getCount() {
    return count;
  }
  return { increment1, getCount };
}

const counter = createCounter();
counter.increment1(); // 1
counter.increment1(); // 2
counter.increment1(); // 3
console.log(`Current count (from getter): ${counter.getCount()}`); // 3

// Example 4: Closure-based game scoring
function createGame() {
  let score = 0;
  function increaseScore(points) {
    score += points;
    console.log(`Score: ${score}`);
  }
  function decreaseScore(points) {
    score -= points;
    console.log(`Score: ${score}`);
  }
  function getScore() {
    return score;
  }
  return { increaseScore, decreaseScore, getScore };
}

const game = createGame();
game.increaseScore(10);
game.increaseScore(5);
game.decreaseScore(3);
console.log(`Current score (from getter): ${game.getScore()}`); // 12
