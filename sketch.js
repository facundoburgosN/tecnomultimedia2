
let img2;
let cant = 0;
let miVelocidadYDireccion;
let img1;
let gestor;
let cantColores = [];

let celeste = 0;
let azul = 0;
let gris = 0;
let amarillo = 0;
let rosa = 0;

function preload() {
  img2 = loadImage('data/rect.png');
  img1 = loadImage('data/trazo00.png');
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
  gestor.actualizar();

  if(cant <= 250){

    let x = random(75,width-75); 
    // CAMBIAR PARA NO SEA COMLETAMENTE ALEATORIO
    let y = random(75,height-75);

    if((mouseX > 0 && mouseX < 600 && mouseY > 266 && mouseY < 533) && celeste <= 100 && velocidad > 5 && velocidad > 5){//-------------------celeste
      tint(52,168,215); 

      if (frameCount%5 == 0){
        image(img2,x,y);
        cant = cant + 1;
        celeste++;
      }

    } else if((mouseX > 0 && mouseX < 300 && mouseY > 0 && mouseY < 266) && azul <= 75 && velocidad > 10){//-------------azul
      gestor.reset();
      tint(0,71,123); 

      if (frameCount%5 == 0){
        image(img2,x,y);
        cant = cant + 1;
        azul++;
      }

    }else if((mouseX > 300 && mouseX < 600 && mouseY > 0 && mouseY < 266) && gris <= 25 && velocidad > 10){//--------------gris
      gestor.reset();
      tint(143,169,186);

      if (frameCount%5 == 0){
        image(img2,x,y);
        cant = cant + 1;
        gris++;
      }

    }else if((mouseX > 0 && mouseX < 300 && mouseY > 533 && mouseY < 800) && amarillo <= 10 && velocidad > 10){//--------------amarillo
      gestor.reset();
      tint(252,233,104);

      if (frameCount%5 == 0){
        image(img2,x,y);
        cant = cant + 1;
        amarillo++;
      }

    }else if((mouseX > 300 && mouseX < 600 && mouseY > 533 && mouseY < 800) && rosa <= 10 && velocidad > 10){//--------------rosa
      gestor.reset();
      tint(244,53,170);

      if (frameCount%5 == 0){
        image(img2,x,y);
        cant = cant + 1;
        rosa++;
      }
    }
  }
}