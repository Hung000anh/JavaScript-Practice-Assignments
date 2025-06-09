const myBtn = document.getElementById("myBtn");
const myImg = document.getElementById("myImg");

myBtn.addEventListener("click", () => {
  const isHidden = myImg.style.display === "none";
  myImg.style.display = isHidden ? "block" : "none";
  myBtn.textContent = isHidden ? "Hide" : "Show";
});
