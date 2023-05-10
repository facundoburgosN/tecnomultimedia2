
let img2;
let cant = 1;
let miVelocidadYDireccion;
let img1;
let gestor;

function preload() {
  img2 = loadImage('data/rect.png');
  img1 = loadImage('data/trazo03.png');
}

function setup() {
  miVelocidadYDireccion = new Dir_y_Vel();
  gestor = new GestorDeInteracion();
  createCanvas(600, 800);
  background(240);                 
  imageMode(CENTER);
  img2.mask(img1);
}

function draw() {
  miVelocidadYDireccion.calcularTodo(mouseX, mouseY);

  let velocidad = miVelocidadYDireccion.velocidad();
  let direccionX = miVelocidadYDireccion.direccionX();
  let direccionY = miVelocidadYDireccion.direccionY();

  gestor.actualizar();

  if(cant <= 250){
    let x = random(75,width-75);
    let y = random(75,height-75);
    if((cant > 0 && cant <= 100) && (velocidad >= 30 && velocidad <= 50)){//-------------------celeste
      tint(52,168,215); 
      image(img2,x,y);
      cant = cant + 1;
    } else if(cant > 100 && cant <= 175 && (velocidad >= 30 && velocidad <= 50)){//-------------azul
      tint(0,71,123); 
      image(img2,x,y);
      cant = cant + 1;
    }else if(cant > 175 && cant <= 200 && (velocidad >= 30 && velocidad <= 50)){//--------------gris
      tint(143,169,186);
      image(img2,x,y);
      cant = cant + 1;
    }else if(cant > 200 && cant <= 225 && (velocidad >= 30 && velocidad <= 50)){//--------------amarillo
      tint(252,233,104);
      image(img2,x,y);
      cant = cant + 1;
    }else if(cant > 225 && cant <= 250 && (velocidad >= 30 && velocidad <= 50)){//--------------rosa
      tint(244,53,170);
      image(img2,x,y);
      cant = cant + 1;
    }
  }
}