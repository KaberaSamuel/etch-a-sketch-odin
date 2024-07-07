// Node list of all grid divs
let allGridDivs = "";

// Functions
const resetGrid = function (resolution = 20) {
  main.textContent = "";
  createDivs(main, resolution);
};

// 1. Creating grids
const createDivs = function (ele, counts) {
  let size = 400 / counts;
  // looping and creating grids
  for (let outerCounter = 1; outerCounter <= counts; outerCounter++) {
    for (let innerCounter = 1; innerCounter <= counts; innerCounter++) {
      // creating individual grid
      const div = document.createElement("div");
      div.style.cssText = `width: ${size}px; height: ${size}px`;
      div.classList.add("inline");
      div.addEventListener("mouseenter", () => {
        div.classList.add("hoverColor");
      });
      ele.appendChild(div);
    }
  }
  allGridDivs = document.querySelectorAll(".inline");
};

const main = document.querySelector("main");
createDivs(main, 20);

// 2. Implementing user preferred resolution
const input = document.querySelector("input");
let inputChoice = 20;
input.addEventListener("keypress", (event) => {
  let value = Number(input.value);
  if (event.key === "Enter") {
    if (value > 1 && value < 91) {
      inputChoice = value;
      resetGrid(value);
    } else {
      alert("Sorry, Allowed range is from 2 to 90");
    }
    input.value = "";
  }
});

// 3. Implementing erasing and drawing
const draw_erase = document.querySelector("#draw-erase");
draw_erase.addEventListener("click", () => {
  if (draw_erase.textContent === "Erase") {
    draw_erase.textContent = "Draw";
    for (let div of allGridDivs) {
      div.addEventListener("mouseenter", () => {
        div.classList.remove("hoverColor");
      });
    }
  } else {
    draw_erase.textContent = "Erase";
    for (let div of allGridDivs) {
      div.addEventListener("mouseenter", () => {
        div.classList.add("hoverColor");
      });
    }
  }
});

// 4. Implementing resetting functionality
const resetbtn = document.querySelector("#reset");
resetbtn.addEventListener("click", resetGrid);

// 5. Implementing random color functionality
const randomNumber = function (min, max) {
  let number = Math.random() * (max - min + 1) + min;
  return Math.trunc(number);
};

const randomColor = function () {
  return `rgb(${randomNumber(0, 256)}, ${randomNumber(0, 256)}, ${randomNumber(
    0,
    256
  )})`;
};

const randombtn = document.querySelector("#random");
randombtn.addEventListener("click", () => {
  resetGrid(inputChoice);
  if (randombtn.textContent === "Random") {
    randombtn.textContent = "Black";
    for (let div of allGridDivs) {
      div.addEventListener("mouseenter", () => {
        div.style.backgroundColor = randomColor();
      });
    }
  } else {
    randombtn.textContent = "Random";
    for (let div of allGridDivs) {
      div.addEventListener("mouseenter", () => {
        div.style.backgroundColor = "black";
      });
    }
  }
});
