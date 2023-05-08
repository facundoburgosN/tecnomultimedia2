
let img;
let cant = 1;

function preload() {
  img = loadImage('data/trazo02.png');
}

function setup() {
  createCanvas(1000, 1438);
  background(240);
  imageMode(CENTER);
}

function draw() {
  if(cant <= 200){
    let x = random(150,width-150);
    let y = random(150,height-150);
    if( random(100) < 50){//-------------------celeste
      tint(52,168,215); 
    } else if(random(100) < 20){//-------------azul
      tint(0,71,123); 
    }else if(random(100) < 10){//--------------gris
      tint(143,169,186);
    }else if(random(100) < 10){//--------------amarillo
      tint(252,233,104);
    }else if(random(100) < 10){//--------------rosa
      tint(244,53,104);
    }
    image(img,x,y);
    cant = cant + 1;
 }
}