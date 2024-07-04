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
};

// Node list of all grid divs
const allGridDivs = document.querySelectorAll(".inline");
console.log(allGridDivs);

const main = document.querySelector("main");
createDivs(main, 10);

// 2. Implementing user preferred resolution+
const input = document.querySelector("input");
input.addEventListener("keypress", (event) => {
  const value = Number(input.value);
  if (event.key === "Enter") {
    if (value > 1 && value < 71) {
      main.textContent = "";
      createDivs(main, value);
    } else {
      alert(input.placeholder);
      console.log(value, typeof value);
    }
  }
});
