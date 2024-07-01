// 1. Creating grids
const createDivs = function (ele) {
  for (let outerCounter = 1; outerCounter <= 16; outerCounter++) {
    for (let innerCounter = 1; innerCounter <= 16; innerCounter++) {
      const div = document.createElement("div");
      div.textContent = "";
      div.classList.add("inline");
      ele.appendChild(div);

      // adding a line break
      if (innerCounter === 16) {
        const lineBreak = document.createElement("br");
        ele.appendChild(lineBreak);
      }
    }
  }
};
const main = document.querySelector("main");

createDivs(main);
// 2. Implementing drawing
const inlineList = document.querySelectorAll(".inline");

for (let inline of inlineList) {
  inline.addEventListener("mouseenter", () => {
    inline.classList.add("hoverColor");
  });
}
