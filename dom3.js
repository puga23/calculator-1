const display = document.querySelector(".display");

console.dir(display);

function btnText(x) {
 
    if (
      display.textContent === "" &&
      (x === "-" || x === "+" || x === "/" || x === "*")
    ) {
      display.textContent = "";
    } else if (display.textContent === "" && x === ".") {
      display.textContent = "0.";
    } else {
      display.textContent = display.textContent + x;
    }

}

function rstText() {
  display.textContent = "";
}

function toloba() {
  display.textContent = eval(display.textContent);
}

function dltText() {
  display.textContent = display.textContent.slice(0, -1);
}
