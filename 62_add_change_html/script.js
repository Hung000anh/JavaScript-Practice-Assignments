let selectedItem = null;

function selectItem(item) {
  if (selectedItem) {
    selectedItem.classList.remove("selected");
  }
  selectedItem = item;
  selectedItem.classList.add("selected");
  document.getElementById("inputText").value = selectedItem.textContent;
}

function addItem(position = 'end') {
  const input = document.getElementById("inputText").value.trim();
  if (input === "") return alert("Please enter text!");

  const li = document.createElement("li");
  li.textContent = input;
  li.onclick = function () {
    selectItem(this);
  };

  const ul = document.getElementById("itemList");
  if (position === 'start') {
    ul.insertBefore(li, ul.firstChild);
  } else {
    ul.appendChild(li);
  }

  document.getElementById("inputText").value = "";
}

function moveItem(direction) {
  if (!selectedItem) return alert("Select an item to move.");

  const ul = document.getElementById("itemList");
  if (direction === 'up' && selectedItem.previousElementSibling) {
    ul.insertBefore(selectedItem, selectedItem.previousElementSibling);
  } else if (direction === 'down' && selectedItem.nextElementSibling) {
    ul.insertBefore(selectedItem.nextElementSibling, selectedItem);
  }
}

function deleteItem() {
  if (!selectedItem) return alert("Please select an item to delete.");
  selectedItem.remove();
  selectedItem = null;
  document.getElementById("inputText").value = "";
}

function insertItem(position) {
  if (!selectedItem) return alert("Select an item first!");
  const input = document.getElementById("inputText").value.trim();
  if (input === "") return alert("Please enter text!");

  const li = document.createElement("li");
  li.textContent = input;
  li.onclick = function () {
    selectItem(this);
  };

  const ul = document.getElementById("itemList");
  if (position === "before") {
    ul.insertBefore(li, selectedItem);
  } else if (position === "after") {
    ul.insertBefore(li, selectedItem.nextSibling);
  }

  document.getElementById("inputText").value = "";
  updateHTMLPreview();
}
function editItem() {
  if (!selectedItem) {
    alert("Please select an item to edit.");
    return;
  }

  const newText = document.getElementById("inputText").value.trim();
  if (newText === "") {
    alert("Please enter new content.");
    return;
  }

  selectedItem.textContent = newText;

  selectedItem.onclick = function () {
    selectItem(this);
  };

}