let img;

function preload() {
  img = loadImage('data/1.jpg');
}

function setup() {
  createCanvas(400, 400);
  imageMode(CENTER);
}

function draw() {
  background(220);
  image(img, 200, 200,300,300);
}
