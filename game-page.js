let isGameActive = true;
let state = "start";
let spaceshipY = -300;
let spaceshipX = 100;
let speed = 1;
let acceleration = 0.2;

const canvasW = 900;
const canvasH = 600;

let startBtn;
let restartBtn;

function setup() {
  createCanvas(canvasW, canvasH);
  frameRate(30);
  state = "start";
  isGameActive = true;
  spaceshipY = -300;
  spaceshipX = 100;
  speed = 1;
  acceleration = 0.2;

  startBtn = createButton("Play");
  startBtn.mousePressed(playGame);
  startBtn.style("font-size", "30");
  startBtn.position(200, 200);
  startBtn.style("display", "show");

  restartBtn = createButton("Restart");
  restartBtn.mousePressed(playGame);
  restartBtn.style("font-size", "30");
  restartBtn.position(200, 200);
  restartBtn.style("display", "none");
}

//star
push();

let starX = [];
let starY = [];
let starAlpha = [];

for (let i = 0; i < 400; i++) {
  const x = Math.floor(Math.random() * canvasW);
  const y = Math.floor(Math.random() * canvasH);
  const alpha = Math.random();

  starX.push(x);
  starY.push(y);
  starAlpha.push(alpha);
}
pop();

function moon() {
  fill(65, 65, 65);
  ellipse(400, 700, 700, 600);
}

function spaceship(x, y) {
  noStroke();
  translate(x, y);

  // spaceship body top
  fill(255, 0, 0);
  ellipse(355, 150, 50);

  // spaceship body rec
  fill(255, 0, 0);
  rect(330, 150, 50, 100);

  //window circle
  fill(255, 255, 255);
  ellipse(355, 200, 30);

  fill(255, 255, 255);
  rect(340, 200, 30);
}

function startScreen() {
  background(0, 0, 0);

  push();
  fill(255, 255, 255);
  textSize(20);
  text("Click to start", 300, 300);
  text("Use up arrow key to  to land safely", 200, 100);

  pop();

  if (keyIsDown(UP_ARROW)) {
    state = "game";
  }

  //stars for background
  for (let index in starX) {
    fill(255, 255, 255, Math.abs(Math.sin(starAlpha[index])) * 255);
    ellipse(starX[index], starY[index], 3);
    starAlpha[index] = starAlpha[index] + 0.02;
  }
}

function gameScreen() {
  background(255, 255, 0);
  noStroke();
  background(0, 0, 0);

  for (let index in starX) {
    fill(255, 255, 255, Math.abs(Math.sin(starAlpha[index])) * 255);
    ellipse(starX[index], starY[index], 3);
    starAlpha[index] = starAlpha[index] + 0.02;
  }

  moon();
  spaceship(spaceshipX, spaceshipY, 0.4, keyIsDown(38));

  spaceshipY = spaceshipY + speed;
  speed = speed + acceleration;

  if (keyIsDown(38)) {
    speed = speed - 0.5;
  }
  if (keyIsDown(LEFT_ARROW)) {
    spaceshipX -= 4;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    spaceshipX += 4;
  }

  if (spaceshipY >= 200 && speed > 10) {
    speed = 1;
    acceleration = 0.2;
    state = "lose";
    //spaceshipY = 100;
  } else if (spaceshipY >= 200) {
    speed = 1;
    acceleration = 0.2;
    state = "win";
    spaceshipY = 100;
  }
}

function winScreen() {
  background(255, 0, 255);
  text("Win", 200, 100);
  restartBtn.style("display", "show");
}

function looseScreen() {
  background(255, 0, 255);
  fill(255, 255, 255);
  textSize(20);
  text("Loose", 200, 100);
  if (keyIsDown(BACKSPACE)) {
    setup();
  }
}

function draw() {
  clear();
  if (state === "start") {
    startScreen();
  } else if (state === "game") {
    gameScreen();
  } else if (state === "win") {
    winScreen();
  } else if (state === "lose") {
    looseScreen();
  }
}

function playGame() {
  startBtn.style("display", "none");
  restartBtn.style("display", "none");
  state = "game";
  isGameActive = true;
  spaceshipY = -300;
  spaceshipX = 100;
  speed = 1;
  acceleration = 0.2;
}
