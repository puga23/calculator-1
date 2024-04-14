const display = document.querySelector(".display");
const btn1 = document.querySelector(".theme-btn1")
const btn2 = document.querySelector(".theme-btn2")
const btn3 = document.querySelector(".theme-btn3")
const div3 = document.querySelector(".div3")


console.dir(display);

btn1.onclick=function(){
  btn1.style.opacity= "1"
  btn2.style.opacity= "0"
  btn3.style.opacity= "0"
  document.querySelector("body").classList.add("theme1")
  document.querySelector("body").classList.remove("theme2")
}
btn2.onclick=function(){
  btn1.style.opacity= "0"
  btn2.style.opacity= "1"
  btn3.style.opacity= "0" 
  document.querySelector("body").classList.add("theme2")
  document.querySelector("body").classList.remove("theme1")

}

btn3.onclick=function(){
  btn1.style.opacity= "0"
  btn2.style.opacity= "0"
  btn3.style.opacity= "1"
   document.querySelector("body").classList.remove("theme1")
   document.querySelector("body").classList.remove("theme2")

}


// div3.addEventListener("click",(event)=> {
//   console.log (event);
//   event.target.style.opacity="1"
// })



function btnText(x) {
  console.log(display.textContent.length);
  if (display.textContent.length < 10) {
    if (
      display.textContent === "" &&
      (x === "-" || x === "+" || x === "/" || x === "*")
    ) {
      display.textContent = "";
    } else if (display.textContent === "" && x === ".") {
      display.textContent = "0.";
    } else if (display.textContent === "0" && x !== ".") {
      display.textContent = x;
    } else {
      display.textContent = display.textContent + x;
    }
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
