let colorPicker = document.querySelector("#color-picker");
const canvas = document.querySelector("#canvas");
const modal = document.querySelector("#modal");
const userInput = document.querySelector("#userInput");
const resetButton = document.querySelector("#reset-game");
const cell = document.querySelector(".cell");

window.addEventListener("load", () => {
  createDivs();
  console.log(colorPicker.value);
});

const Modal = {
  open() {
    document.querySelector(".modal-overlay").classList.add("active");
  },
  close() {
    document.querySelector(".modal-overlay").classList.remove("active");
  },
};

function createDivs() {
  for (let i = 0; i < 256; i++) {
    const div = document.createElement("div");
    div.classList.add("cell");
    div.addEventListener("mouseover", function (event) {
      event.target.style.backgroundColor = colorPicker.value;
    });
    canvas.appendChild(div);
  }
}
function updateCanvas() {
  canvas.innerHTML = "";
  canvas.style.setProperty(
    "grid-template-columns",
    `repeat(${userInput.value}, 2fr)`
  );
  canvas.style.setProperty(
    "grid-template-rows",
    `repeat(${userInput.value},2fr)`
  );
  for (let i = 0; i < userInput.value * userInput.value; i++) {
    if (userInput.value > 100) {
      alert("The limit is 100");
      canvas.innerHTML = "";
      userInput.value = "";
      canvas.style.setProperty("grid-template-columns", `repeat(16, 2fr)`);
      canvas.style.setProperty("grid-template-rows", `repeat(16, 2fr)`);
      createDivs();
    }
    const div = document.createElement("div");
    div.classList.add("cell");
    div.addEventListener("mouseover", function (event) {
      event.target.style.backgroundColor = colorPicker.value;
    });
    canvas.appendChild(div);
  }
  console.log(userInput.value);
  Modal.close();
}

userInput.addEventListener("change", updateCanvas);

resetButton.addEventListener("click", function () {
  canvas.innerHTML = "";
  userInput.value = "";
  canvas.style.setProperty("grid-template-columns", `repeat(16, 2fr)`);
  canvas.style.setProperty("grid-template-rows", `repeat(16, 2fr)`);
  createDivs();
});
