// 1. Creating grids
const createDivs = function (ele, counts) {
  const size = 500 / counts;
  for (let outerCounter = 1; outerCounter <= counts; outerCounter++) {
    for (let innerCounter = 1; innerCounter <= counts; innerCounter++) {
      // creating individual grid
      const div = document.createElement("div");
      div.style.cssText = `width: ${size}px; height: ${size}px`;
      div.classList.add("inline");
      ele.appendChild(div);

      // adding a line break
      if (innerCounter === counts) {
        const lineBreak = document.createElement("br");
        ele.appendChild(lineBreak);
      }
    }
  }
};
const main = document.querySelector("main");

createDivs(main, 20);
// 2. Implementing drawing
const inlineList = document.querySelectorAll(".inline");
for (let inline of inlineList) {
  inline.addEventListener("mouseenter", () => {
    inline.classList.add("hoverColor");
  });
}

// 3. Implementing choosing grid size
// const input = document.querySelector("input");
// input.addEventListener("keypress", (e) => {
//   if (e.key === "Enter") {
//     createDivs(main, Number(input.value));
//     console.log(typeof input.value);
//   }
// });
