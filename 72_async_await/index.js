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

async function doChores() {
  const logList = document.getElementById("logList");
  logList.innerHTML = "";
  try {
    const dog = await walkDog();
    addLog(dog);
    const kitchen = await cleanKitchen();
    addLog(kitchen);
    const trash = await takeOutTrash();
    addLog(trash);
  } catch (error) {
    addLog(error, true);
  }
}

function addLog(message, isError = false) {
  const li = document.createElement("li");
  li.textContent = message;
  if (isError) li.classList.add("error");
  document.getElementById("logList").appendChild(li);
}

document.getElementById("startBtn").addEventListener("click", doChores);
