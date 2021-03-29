let colorPicker;
let defaultColor = "#F4D799";
let container = document.querySelector("#canvas");

window.addEventListener("load", () => {
  chooseColor();
});

function chooseColor() {
  colorPicker = document.querySelector("#color-picker");
  colorPicker.value = defaultColor;
  console.log(colorPicker.value);
}

function createDivs(grid) {
  for (let i = 0; i < grid; i++) {
    let row = document.createElement("div");
    row.className = "row";
    for (let j = 0; j <= grid; j++) {
      let cell = document.createElement("div");
      cell.className = "cell";

      row.appendChild(cell);
    }
    container.appendChild(row);
    console.log(container);
  }
}
