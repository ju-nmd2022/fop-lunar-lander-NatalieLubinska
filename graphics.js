function spaceship(spaceshipX, spaceshipY) {
  const {
    fillStyle,
    strokeStyle,
    translate,
    beginPath,
    arc,
    moveTo,
    lineTo,
    closePath,
    fill,
    stroke,
  } = canvas.getContext("2d");

  // Spaceship body
  fillStyle = "#eaeaea";
  strokeStyle = "#2c3e50";
  beginPath();
  moveTo(330, 150);
  arc(355, 150, 25, Math.PI, 0);
  lineTo(380, 150);
  lineTo(380, 250);
  arc(355, 250, 25, 0, Math.PI);
  lineTo(330, 250);
  lineTo(330, 150);
  closePath();
  fill();
  stroke();

  // Window
  fillStyle = "#2c3e50";
  beginPath();
  arc(355, 195, 20, 0, 2 * Math.PI);
  closePath();
  fill();

  // Window frame
  strokeStyle = "#eaeaea";
  beginPath();
  arc(355, 195, 22, 0, 2 * Math.PI);
  closePath();
  stroke();

  // Engine base
  fillStyle = "#2c3e50";
  beginPath();
  rect(330, 250, 50, 30);
  closePath();
  fill();

  // Engine flame
  fillStyle = "#f1c40f";
  beginPath();
  moveTo(355, 280);
  lineTo(340, 295);
  lineTo(350, 295);
  lineTo(355, 280);
  lineTo(360, 295);
  lineTo(370, 295);
  lineTo(355, 280);
  closePath();
  fill();

  translate(x, y);
}

function draw() {
  background(255, 255, 255);
  spaceship(x, y);
}
