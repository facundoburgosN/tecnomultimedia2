
let img2;
let cant = 1;
let miVelocidadYDireccion;
let img1;

function preload() {
  img2 = loadImage('data/rect.png');
  img1 = loadImage('data/trazo02.png');
}

function setup() {
  miVelocidadYDireccion = new Dir_y_Vel();
  createCanvas(1000, 1438);
  background(240);                   //adasdsadsaddad
  imageMode(CENTER);
  img2.mask(img1);
}

function draw() {
  miVelocidadYDireccion.calcularTodo(mouseX, mouseY);

  let velocidad = miVelocidadYDireccion.velocidad();

  if(cant <= 200 && velocidad >= 50){
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
}