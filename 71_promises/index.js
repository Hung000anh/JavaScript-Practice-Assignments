function walkDog() {
  return new Promise((resolve, reject) => {
    const dogWalked = true;
    setTimeout(() => {
      if (dogWalked) {
        resolve("✅ You walked the dog.");
      } else {
        reject("❌ You didn't walk the dog.");
      }
    }, 1500);
  });
}

function cleanKitchen() {
  return new Promise((resolve, reject) => {
    const kitchenCleaned = true;
    setTimeout(() => {
      if (kitchenCleaned) {
        resolve("✅ You cleaned the kitchen.");
      } else {
        reject("❌ You didn't clean the kitchen.");
      }
    }, 1500);
  });
}

function takeOutTrash() {
  return new Promise((resolve, reject) => {
    const trashTakenOut = false;
    setTimeout(() => {
      if (trashTakenOut) {
        resolve("✅ You took out the trash.");
      } else {
        reject("❌ You didn't take out the trash.");
      }
    }, 1500);
  });
}

document.getElementById("start-btn").addEventListener("click", () => {
  const output = document.getElementById("output");
  output.textContent = "⏳ Starting tasks...";

  walkDog()
    .then((res) => {
      output.textContent = res;
      return cleanKitchen();
    })
    .then((res) => {
      output.textContent = res;
      return takeOutTrash();
    })
    .then((res) => {
      output.textContent = res + " 🎉 All tasks completed!";
    })
    .catch((err) => {
      output.textContent = err;
    });
});
