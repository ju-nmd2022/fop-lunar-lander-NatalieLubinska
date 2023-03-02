function moon() {
  fill(255, 255, 255);
  ellipse(400, 700, 700, 600);
}

moon();

function spaceship() {
  noStroke();

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

spaceship();
