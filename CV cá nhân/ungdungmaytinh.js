let result;
function sumWeb() {
  let number1 = +document.getElementById("Number 1").value;
  let number2 = +document.getElementById("Number 2").value;
  let tong = sum(number1, number2);

  document.getElementById("Result").innerHTML = tong;
}

function sum(a, b) {
  return a + b;
}

function sub() {
  let number1 = +document.getElementById("Number 1").value;
  let number2 = +document.getElementById("Number 2").value;
  let Tru = number1 - number2;
  document.getElementById("Result").innerHTML = Tru;
}
