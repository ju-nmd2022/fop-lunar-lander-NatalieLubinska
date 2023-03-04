function setup() {
  createCanvas(900, 600);
  window.addEventListener("keydown", moveUp);
}

function moveUp(event) {
  if (event.code === "ArrowUp") {
    spaceshipY -= 150; // Move the spaceship
  }
}

//stars
push();

let starX = [];
let starY = [];
let starAlpha = [];

for (let i = 0; i < 400; i++) {
  const x = Math.floor(Math.random() * width);
  const y = Math.floor(Math.random() * height);
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
  background(0, 0, 255);
  text("Start", 200, 100);
}

let spaceshipY = -300;
let velocity = 0.3;
let acceleration = 0.1;
let isGameActive = true;
acceleration = 0.1;

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
  spaceship(100, spaceshipY);

  spaceshipY = spaceshipY + velocity;
  velocity = velocity + acceleration;

  if (spaceshipY >= 200) {
    velocity = 0;
  } else {
    spaceshipY = spaceshipY + velocity;
    velocity = velocity + acceleration;
  }
}

function resultScreen() {
  background(255, 0, 255);
  text("Result", 200, 100);
}

let state = "start";

function draw() {
  if (state === "start") {
    startScreen();
  } else if (state === "game") {
    gameScreen();
  } else if (state === "result") {
    resultScreen();
  }
}

function mouseClicked() {
  if (state === "start") {
    state = "game";
  }
}
