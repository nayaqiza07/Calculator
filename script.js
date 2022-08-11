var tb = "";
const input = document.querySelector("#input");
const output = document.querySelector("#output");

function num(value) {
  tb = tb + value;
  input.value = tb;
}

function remove() {
  tb = tb.substring(0, tb.length - 1);
  input.value = tb;
}

function exec() {
  if (tb.length == 0 || tb == "") {
    alert("No Input");
    return;
  }
  try {
    ans = eval(tb);
    output.value = ans;
  } catch (error) {
    alert("Invalid Input");
  }
}

const c = document.querySelector("#clear");

c.addEventListener("click", function (e) {
  input.value = "";
  output.value = "";
  tb = "";
});
