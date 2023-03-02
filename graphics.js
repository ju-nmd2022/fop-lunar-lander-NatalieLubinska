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

function startScreen() {
  background(0, 0, 255);
  text("Start", 200, 100);
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
  } else if (state === "game") {
    state = "result";
  } else if (state === "result") {
    state = "game";
  }
}
