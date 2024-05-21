let x = 0;
let y = 0;
let size = 30;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(245);
}

function draw() {
  strokeWeight(0);
  stroke(400, 0, 0);
  fill(200, 0, 0, 50);

  if (random(1) < 0.5) {
    ellipse(x - 50, y, 40);
    circle(x - 20, y, 45);
    stroke(200, 100, 0);
  } else {
    ellipse(x, y);
  }

  x += size;
  if (x > width) {
    x = 0;
    y = y + size;
  }
}
