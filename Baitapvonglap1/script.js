let imgObj = null;
imgObj = document.getElementById("myImage");
function init() {
  imgObj = document.getElementById("myImage");
  imgObj.style.position = "relative";
  imgObj.style.left = "0px";
  console.log("abc");
}
function moveRight() {
  imgObj.style.left = parseInt(imgObj.style.left) + 10 + "px";
}

init();
