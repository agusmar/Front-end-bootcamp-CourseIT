const items = document.getElementsByClassName("item");
const itemsLength = items.length;
const slides = document.getElementById("slides-container");
let izq = 0;

for (let i = 0; i < itemsLength; i++) {
  createListItem(i + 1);
}

function createListItem(val) {
  const listItem = document.createElement("li");
  const text = document.createTextNode(val);

  const attr = document.createAttribute("onclick");
  attr.value = `goToSlide(${val})`;
  listItem.setAttributeNode(attr);

  listItem.appendChild(text)
  slides.appendChild(listItem);
}

function forward() {

  const container = document.getElementById("slider");
  izq = izq - 50;
  container.style.left = `${izq}px`;
}

function backward() {
  const container = document.getElementById("slider");
  izq = izq + 50;
  container.style.left = `${izq}px`;
}

function goToSlide(number) {
  const slider = document.getElementById("slider");
  slider.style.left = (number -1) * 200 * -1 + "px";
}
