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
  ellipse(370, 150, 100);

  // spaceship body rec
  fill(255, 0, 0);
  rect(320, 150, 100, 200);

  //window circle
  fill(255, 255, 255);
  ellipse(370, 200, 60);

  fill(255, 255, 255);
  rect(340, 200, 60);

  fill(0, 255, 0);
  ellipse(370, 210, 30);
}

function startScreen() {
  background(0, 0, 255);
  text("Start", 200, 100);
}

let spaceshipY = 100;
let velocity = 1;
let acceleration = 0.2;
let isGameActive = true;

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

  if (isGameActive) {
    spaceshipY = spaceshipY + velocity;
    velocity = velocity + acceleration;

    if (mouseIsPressed) {
      velocity = velocity - 0.2;
    }

    if (spaceshipY > 100) {
      isGameActive = false;
    }
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
