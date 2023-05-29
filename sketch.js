
let img2;
let cant = 1;
let miVelocidadYDireccion;
let img1;
//-------------Imprimir datos
let font;
let IMPRIMIR = true;
//-------------Mic
let mic;
let amp; //----variable para cargar la amplitud de la señal de entrada 
let amp_min = 0.02;
let haySonido = false;

function preload() {
  font = loadFont('data/Regular.otf');
  img2 = loadImage('data/rect.png');
  img1 = loadImage('data/trazo02.png');
}

function setup() {
  miVelocidadYDireccion = new Dir_y_Vel();
  createCanvas(1000, 1438);
  background(240);
  imageMode(CENTER);
  img2.mask(img1);
  // Mic
  mic = new p5.AudioIn();
  mic.start();
  userStartAudio();
}

function draw() {
  miVelocidadYDireccion.calcularTodo(mouseX, mouseY);

  let velocidad = miVelocidadYDireccion.velocidad();
  amp = mic.getLevel(); //---------------------Mic
  haySonido = amp > amp_min;
  if(cant <= 200 && velocidad >= 50 && haySonido){
    let x = random(150,width-150);
    let y = random(150,height-150);
    if( random(100) < 45){//-------------------celeste
      tint(52,168,215); 
    } else if(random(100) < 25){//-------------azul
      tint(0,71,123); 
    }else if(random(100) < 10){//--------------gris
      tint(143,169,186);
    }else if(random(100) < 10){//--------------amarillo
      tint(252,233,104);
    }else if(random(100) < 10){//--------------rosa
      tint(244,53,170);
    }
    image(img2,x,y);
    cant = cant + 1;
    }
  if(IMPRIMIR){
      printData();
 }
 function windowResized() {
  resize(windowWidth,windowHeight);
 }
}