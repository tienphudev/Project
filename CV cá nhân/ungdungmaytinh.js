// var result = document.getElementById("Result");
// var Tong = Number1 + Number2;
// var Trừ = Number1 - Number2;
var result;
function Sum() {
  var Number1 = +document.getElementById("Number 1").value;
  var Number2 = +document.getElementById("Number 2").value;
  var Tong = Number1 + Number2;
  document.getElementById("Result").innerHTML = Tong;
}
function Sub() {
  var Number1 = +document.getElementById("Number 1").value;
  var Number2 = +document.getElementById("Number 2").value;
  var Tru = Number1 - Number2;
  document.getElementById("Result").innerHTML = Tru;
}
