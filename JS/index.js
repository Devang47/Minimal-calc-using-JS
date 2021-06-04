let input = "";
let output = document.querySelector("#answerbox");

window.onload = () => {
    output.value = ""
}

const color = () => {
    output.style.color = "#fff";
}

const inputreciever = (e) => {
  input = output.value;
  output.style.color = "#fff";
  input += e;
  output.value = input;
};
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
const reset = () => {
  input = "";
  output.value = input;
};

const deleteLast = () => {
  input = output.value;
  input = input.slice(0, -1);
  output.value = input;
};

var text = document.getElementById("answerbox");
var btn = document.getElementById("copyText");

btn.onclick = function () {
  text.value = input;
  text.select();
  document.execCommand("copy");
};
