function ChangeMoney() {
  var Amount = document.getElementById("Amount").value;
  var From = document.getElementById("From").value;
  var To = document.getElementById("To").value;
  var result;

  if (From == "USD" && To == "VND") {
    result = "Result: " + Amount * 23000 + " Đ";
  } else if (From == "VND" && To == "USD") {
    result = "Result: " + Amount / 23000 + " $";
  } else if (From == "VND") {
    result = "Result: " + Amount + " Đ";
  } else {
    result = "Result: " + Amount + " $";
  }

  document.getElementById("result").innerHTML = result;
}
