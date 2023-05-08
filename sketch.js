let img;

function preload() {
  img = loadImage('data/1.jpg');
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  image(img, 0, 0,400,400);
}
