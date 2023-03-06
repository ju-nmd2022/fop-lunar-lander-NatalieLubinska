let isGameActive = true;
let state = "start";
let spaceshipY = -300;
let spaceshipX = 100;
let speed = 1;
let acceleration = 0.2;

const canvasW = 600;
const canvasH = 600;

//setup for game
function setup() {
  createCanvas(canvasW, canvasH);
  frameRate(30);
  state = "game";
  isGameActive = true;
  spaceshipY = -300;
  spaceshipX = 100;
  speed = 1;
  acceleration = 0.2;
}
//setup for start page
function setup2() {
  createCanvas(canvasW, canvasH);
  frameRate(30);
  state = "start";
  isGameActive = true;
  spaceshipY = -300;
  spaceshipX = 100;
  speed = 1;
  acceleration = 0.2;
}

//stars
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
//moon
function moon() {
  fill(65, 65, 65);
  ellipse(400, 600, 200);
}
//spaceship
function spaceship(x, y) {
  noStroke();
  translate(x - 300, y);

  // spaceship body top
  fill(255, 0, 0);
  ellipse(355, 150, 50);

  // spaceship body rec
  fill(255, 0, 0);
  rect(330, 150, 50, 100);

  // window circle
  fill(0, 191, 255);
  ellipse(355, 170, 30);

  // window highlight
  fill(255);
  ellipse(355, 165, 10, 5);

  // left wing
  fill(255, 0, 0);
  triangle(330, 180, 330, 250, 285, 215);
  fill(255, 102, 102);
  triangle(325, 185, 325, 245, 280, 210);

  // right wing
  fill(255, 0, 0);
  triangle(380, 180, 380, 250, 425, 215);
  fill(255, 102, 102);
  triangle(385, 185, 385, 245, 430, 210);

  // engine
  fill(255, 153, 0);
  ellipse(355, 250, 60, 30);

  // engine details
  fill(255, 102, 0);
  ellipse(355, 250, 45, 20);
  ellipse(355, 250, 30, 10);

  push();

  // my friend helped me to create this motion fire

  fill(255, 102, 0);
  for (let i = 0; i < 50; i++) {
    let xOff = random(-10, 10);
    let yOff = random(-20, 0);
    let d = dist(xOff, yOff, 0, 0);
    let alpha = map(d, 0, 20, 255, 0);
    fill(255, 102, 0, alpha);
    ellipse(355 + xOff, 280 + yOff, 20, 40);
  }

  pop();
}
//startscreen
function startScreen() {
  background(0, 0, 0);

  push();
  fill(255, 255, 255);
  textSize(40);
  text("Lunar Lander Game", 100, 100);
  textSize(20);
  text("Click on backspace to start", 100, 400);
  text("Use the arrow keys to land safely", 100, 450);

  pop();

  if (keyIsDown(BACKSPACE)) {
    state = "game";
  }

  //stars for background
  for (let index in starX) {
    fill(255, 255, 255, Math.abs(Math.sin(starAlpha[index])) * 255);
    ellipse(starX[index], starY[index], 3);
    starAlpha[index] = starAlpha[index] + 0.02;
  }
}
//gamescreen
function gameScreen() {
  background(255, 255, 0);
  noStroke();
  background(0, 0, 0);
  //stars
  for (let index in starX) {
    fill(255, 255, 255, Math.abs(Math.sin(starAlpha[index])) * 255);
    ellipse(starX[index], starY[index], 3);
    starAlpha[index] = starAlpha[index] + 0.02;
  }
  push();
  //text
  fill(255, 255, 255);
  textSize(20);
  text("Land on the moon using the arrows", 100, 100);
  pop();

  //moon
  moon();
  //spaceship
  spaceship(spaceshipX, spaceshipY, 0.4, keyIsDown(38));

  spaceshipY = spaceshipY + speed;
  speed = speed + acceleration;

  //moving the spaceship
  if (keyIsDown(38)) {
    speed = speed - 0.5;
  }
  if (keyIsDown(LEFT_ARROW)) {
    spaceshipX -= 4;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    spaceshipX += 4;
  }
  //cridentials for win & lose
  if (spaceshipY >= 300 && speed > 8) {
    speed = 1;
    acceleration = 0.2;
    state = "lose";
    spaceshipY = 100;
  } else if (spaceshipY >= 300 && spaceshipX >= 300 && spaceshipX <= 500) {
    speed = 1;
    acceleration = 0.2;
    state = "win";
    spaceshipY = 100;
  }
}
//winscreen
function winScreen() {
  background(0, 0, 0);
  //stars for background
  push();
  for (let index in starX) {
    fill(255, 255, 255, Math.abs(Math.sin(starAlpha[index])) * 255);
    ellipse(starX[index], starY[index], 3);
    starAlpha[index] = starAlpha[index] + 0.02;
  }
  pop();

  textSize(40);
  text("You won!", 100, 100);
  textSize(20);
  fill(255, 255, 255);

  text("Click on backspace to play again", 100, 400);
  text("Click on left arrow to go back to startscreen", 100, 450);

  //setup to restart game
  if (keyIsDown(BACKSPACE)) {
    setup();
  }
  if (keyIsDown(LEFT_ARROW)) {
    setup2();
  }
}
//losescreen
function looseScreen() {
  background(0, 0, 0);
  //stars for background
  push();
  for (let index in starX) {
    fill(255, 255, 255, Math.abs(Math.sin(starAlpha[index])) * 255);
    ellipse(starX[index], starY[index], 3);
    starAlpha[index] = starAlpha[index] + 0.02;
  }
  pop();
  fill(255, 255, 255);
  textSize(40);
  text("You crashed!", 100, 100);
  textSize(20);
  text("Click on backspace to play again", 100, 400);
  text("Click on left arrow to go back to startscreen", 100, 450);

  //setup to restart game
  if (keyIsDown(BACKSPACE)) {
    setup();
  }
  if (keyIsDown(LEFT_ARROW)) {
    setup2();
  }
}
//states
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
  state = "game";
  isGameActive = true;
  spaceshipY = -300;
  spaceshipX = 100;
  speed = 1;
  acceleration = 0.2;
}
