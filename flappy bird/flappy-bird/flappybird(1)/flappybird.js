// board
let board;
let boardWidth = 360;
let boardHeight = 640;
let context;
//bird
let birdWidth = 34;
let birdHeight = 24;
let birdX = boardWidth / 8;
let birdY = boardHeight / 2;
let birdImg;

let bird = {
  x: birdX,
  y: birdY,
  height: birdHeight,
  width: birdWidth,
};
// pipes
let pipeArray = [];
let pipeWidth = 64; //width/height ratio=394/30172=1/8
let pipeHeight = 512;
let pipeX = boardWidth;
let pipeY = 0;

let topPipeImg;
let bottomPipeImg;

//physics
let velocityX = -2; //pipes moving left spped
let velocityY = 0; //jump spped
let gravity = 0.4;
let gameOver = false;
let score = 0;
const audio1 = new Audio("nhacflappybird.mp3");
const audio = new Audio ("nhacnen (mp3cut.net).mp3");
window.onload = function () {
  audio.play();
  board = document.getElementById("board");
  board.height = boardHeight;
  board.width = boardWidth;
  context = board.getContext("2d");
  // draw flappy bird
  // context.fillStyle="green"
  // context.fillRect(bird.x,bird.y,bird.width,bird.height)
  //load Img
  birdImg = new Image();
  birdImg.src = "./flappybird.png";
  birdImg.onload = function () {
    context.drawImage(birdImg, bird.x, bird.y, bird.width, bird.height);
  };
  topPipeImg = new Image();
  topPipeImg.src = "./toppipe.png";
  bottomPipeImg = new Image();
  bottomPipeImg.src = "./bottompipe.png";
  requestAnimationFrame(update);
  setInterval(placePipe, 1500);
  document.addEventListener("keydown", moveBird);
};
function update() {
  requestAnimationFrame(update);
  audio.play();
  if (gameOver) {
    return;
  }
  context.clearRect(0, 0, board.width, board.height);
  // bird
  velocityY += gravity;
  bird.y = Math.max(bird.y + velocityY, 0); //giới hạn của con chim
  context.drawImage(birdImg, bird.x, bird.y, bird.width, bird.height);

  if (bird.y > board.height) {
    gameOver = true;
  }
  //pipes
  for (let i = 0; i < pipeArray.length; i++) {
    let pipe = pipeArray[i];
    pipe.x += velocityX;
    context.drawImage(pipe.img, pipe.x, pipe.y, pipe.width, pipe.height);

    if (!pipe.passed && bird.x > pipe.x + pipe.width) {
      score += 0.5;
      pipe.passed = true;
    }

    if (detectCollision(bird, pipe)) {
      gameOver = true;
    }
  }
  // clear pipes
  while (pipeArray.length > 0 && pipeArray[0].x < -pipeWidth) {
    pipeArray.shift();
  }
  // score
  context.fillStyle = "white";
  context.font = "45px sans-serif";
  context.fillText(score, 5, 45);

  if (gameOver) {
    context.fillText("Game over", 5, 90);
  }
}

//(0->-128):pipeHeight/4
//(-128->-256):pipeHeight/4-pipeHeight/2=-3/4
function placePipe() {
  audio.play();
  if (gameOver) {
    return;
  }
  let randomPipeY = pipeY - pipeHeight / 4 - Math.random() * (pipeHeight / 2);
  let openingSpace = board.height / 4;
  let topPipe = {
    img: topPipeImg,
    x: pipeX,
    y: randomPipeY,
    width: pipeWidth,
    height: pipeHeight,
    passed: false,
  };
  pipeArray.push(topPipe);
  let bottompipe = {
    img: bottomPipeImg,
    x: pipeX,
    y: randomPipeY + pipeHeight + openingSpace,
    width: pipeWidth,
    height: pipeHeight,
    passed: false,
  };
  pipeArray.push(bottompipe);
}
function moveBird(e) {
  audio.play();
  if (e.code == "Space" || e.code == "ArrowUp" || e.code == "KeyX") {
    //jump
    velocityY = -6;
    audio1.play();
    if (gameOver) {
      bird.y = birdY;
      score = 0;
      pipeArray = [];
      gameOver = false;
    }
  }
}
function detectCollision(a, b) {
  audio.play();
  return (
    a.x < b.x + b.width &&
    a.x + a.width > b.x &&
    a.y < b.y + b.height &&
    a.y + a.height > b.y
  );
}
