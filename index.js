let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let clearbtn = document.getElementById("clear-btn");
let count = 0;

clearbtn.addEventListener("click", () => {
  saveEl.textContent = "Previous Entries: ";
});

function increment() {
  count += 1;
  countEl.textContent = count;
}

function save() {
  let countStr = count + " - ";
  saveEl.textContent += countStr;
  countEl.textContent = 0;
  count = 0;
}
