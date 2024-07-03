// 1. Creating grids
const createDivs = function (ele, counts) {
  let size = 500 / counts;

  // looping and creating grids
  for (let outerCounter = 1; outerCounter <= counts; outerCounter++) {
    for (let innerCounter = 1; innerCounter <= counts; innerCounter++) {
      // creating individual grid
      const div = document.createElement("div");
      div.style.cssText = `width: ${size}px; height: ${size}px`;
      div.classList.add("inline");
      ele.appendChild(div);
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
