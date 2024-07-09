// Global variables
let allGridDivs = "";
let resolution = 25;
const main = document.querySelector("main");

// Functions
const loopEdit = function (command) {
  for (let div of allGridDivs) {
    div.addEventListener("mouseenter", () => {
      // 1.
      if (command === "Erase") {
        div.style.backgroundColor = "white";
      }

      // 2.
      else if (command === "Random") {
        div.style.backgroundColor = randomColor();
      }

      // 3.
      else if (command === "Black") {
        div.style.backgroundColor = "black";
      }
    });
  }
};

// 1. Creating grids
const createGrids = function (counts = resolution) {
  main.textContent = "";
  const size = 400 / counts;
  // looping and creating grids
  for (let outerCounter = 1; outerCounter <= counts; outerCounter++) {
    for (let innerCounter = 1; innerCounter <= counts; innerCounter++) {
      // creating individual grid
      const div = document.createElement("div");
      div.style.cssText = `width: ${size}px; height: ${size}px`;
      div.classList.add("inline");
      div.addEventListener("mouseenter", () => {
        div.style.backgroundColor = "black";
      });
      main.appendChild(div);
    }
  }
  allGridDivs = document.querySelectorAll(".inline");
};

createGrids();

// 2. Implementing user preferred resolution
const input = document.querySelector("input");
input.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    resolution = Number(input.value);
    if (resolution > 1 && resolution < 91) {
      // setting initial values
      createGrids(resolution);
      randombtn.textContent = "Random";
      draw_erase.textContent = "Erase";
    } else {
      resolution = 25;
      alert("Sorry, Allowed range is from 2 to 90");
    }
    input.value = "";
  }
});

// 3. Implementing erasing and drawing
const draw_erase = document.querySelector("#erase");
draw_erase.addEventListener("click", () => {
  if (draw_erase.textContent === "Erase") {
    draw_erase.textContent = "Draw";
    loopEdit("Erase");
  } else {
    draw_erase.textContent = "Erase";
    if (randombtn.textContent === "Random") {
      loopEdit("Black");
    } else {
      loopEdit("Random");
    }
  }
});

// 4. Implementing resetting functionality
const resetbtn = document.querySelector("#reset");
resetbtn.addEventListener("click", () => {
  resolution = 15;
  randombtn.textContent = "Random";
  draw_erase.textContent = "Erase";
  createGrids();
});

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
  createGrids();
  if (randombtn.textContent === "Random") {
    randombtn.textContent = "Black";
    loopEdit("Random");
  } else {
    randombtn.textContent = "Random";
    loopEdit("Black");
  }
});
