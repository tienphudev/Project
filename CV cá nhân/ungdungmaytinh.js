let result;
function sumWeb() {
  let number1 = +document.getElementById("Number1").value;
  let number2 = +document.getElementById("Number2").value;
  let tong = sum(number1, number2);

  document.getElementById("Result").innerHTML = tong;
}

function sum(Number1, Number2) {
  return Number1 + Number2;
}

function subWeb() {
  let number1 = +document.getElementById("Number1").value;
  let number2 = +document.getElementById("Number2").value;
  let Tru = sub(number1, number2);
  document.getElementById("Result").innerHTML = Tru;
}
function sub(a, b) {
  return a - b;
}
