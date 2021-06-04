let input = "";
let output = document.querySelector("#answerbox");

window.onload = () => {
  output.value = "";
};

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.toggle(localStorage.getItem("theme"));
}

const color = () => {
  // output.style.color = "#fff";
};

//input reciever
const inputreciever = (e) => {
  input = output.value;
  // output.style.color = "#fff";
  input += e;
  output.value = input;
};

//equals btn
const findans = () => {
  input = output.value;
  try {
    input = eval(input);
  } catch (e) {
    if (e instanceof SyntaxError) {
      alert("Error! Please review your input");
    }
  }
  output.value = input;
  input = "" + input;
};

// reset btn
const reset = () => {
  input = "";
  output.value = input;
};

//delete btn
const deleteLast = () => {
  input = output.value;
  input = input.slice(0, -1);
  output.value = input;
};

//copy btn
var text = document.getElementById("answerbox");
var btn = document.getElementById("copyText");

btn.onclick = function () {
  text.value = input;
  text.select();
  document.execCommand("copy");
};

const themeSwitch = document.querySelector(".inner")
const themeSwitcher = document.getElementById("theme");
themeSwitcher.addEventListener("click", function () {
  document.body.classList.toggle("dark");
  themeSwitch.classList.toggle("theme2")
  // themeSwitch.style.left = "20px"
  localStorage.setItem("theme", document.body.classList);
});


