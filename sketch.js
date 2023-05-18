
//https://youtu.be/mz7j_4N8XuY

let arreglo = [];
let rect = [];
let cant = 0;
let miVelocidadYDireccion;
let gestor;

//-------COLORES-------
let celeste = 0;
let azul = 0;
let gris = 0;
let amarillo = 0;
let rosa = 0;

function preload() {

  //-------CARGA DE TRAZOS Y RECTANGULOS-------
  for (let i = 0; i < 12; i++){
    let nombre = "data/trazo"+nf( i , 2 )+".png";
    arreglo[i] = loadImage(nombre);
    rect.push (loadImage('data/rect.png'));
  }

}

function setup() {

  createCanvas(600, 800);
  background(240);                 
  imageMode(CENTER);

  //-------DIRECCION Y INTERACCION-------
  miVelocidadYDireccion = new Dir_y_Vel();
  gestor = new GestorDeInteracion();

  //-------APLICACION DE MASCARA A LOS RECTANGULOS-------
  for (let i = 0; i < 12; i++){
    rect[i].mask (arreglo[i]);
  }

}

function draw() {

  //-------DIRECCION Y INTERACCION-------
  miVelocidadYDireccion.calcularTodo(mouseX, mouseY);
  let velocidad = miVelocidadYDireccion.velocidad();
  gestor.actualizar();
  
  //-------APLICACION DE MASCARA A LOS RECTANGULOS-------
  let trazoRandom = rect[int(random(rect.length))];

  if(cant <= 250){

    // CAMBIAR PARA NO SEA COMLETAMENTE ALEATORIO
    let x = random(75,width-75); 
    let y = random(75,height-75);

    //-------USAR COLOR CELESTE-------
    if((mouseX > 0 && mouseX < 600 && mouseY > 266 && mouseY < 533) && celeste <= 100 && velocidad > 5 && velocidad > 5){//-------------------celeste
      tint(52,168,215);

      if (frameCount%5 == 0){
        image(trazoRandom,x,y);
        cant = cant + 1;
        celeste++;
      }

    //-------USAR COLOR AZUL-------
    } else if((mouseX > 0 && mouseX < 300 && mouseY > 0 && mouseY < 266) && azul <= 75 && velocidad > 10){//-------------azul
      gestor.reset();
      tint(0,71,123); 

      if (frameCount%5 == 0){
        image(trazoRandom,x,y);
        cant = cant + 1;
        azul++;
      }

    //-------USAR COLOR GRIS-------
    }else if((mouseX > 300 && mouseX < 600 && mouseY > 0 && mouseY < 266) && gris <= 25 && velocidad > 10){//--------------gris
      gestor.reset();
      tint(143,169,186);

      if (frameCount%5 == 0){
        image(trazoRandom,x,y);
        cant = cant + 1;
        gris++;
      }

    //-------USAR COLOR AMARILLO-------
    }else if((mouseX > 0 && mouseX < 300 && mouseY > 533 && mouseY < 800) && amarillo <= 10 && velocidad > 10){//--------------amarillo
      gestor.reset();
      tint(252,233,104);

      if (frameCount%5 == 0){
        image(trazoRandom,x,y);
        cant = cant + 1;
        amarillo++;
      }

    //-------USAR COLOR ROSA-------
    }else if((mouseX > 300 && mouseX < 600 && mouseY > 533 && mouseY < 800) && rosa <= 10 && velocidad > 10){//--------------rosa
      gestor.reset();
      tint(244,53,170);

      if (frameCount%5 == 0){
        image(trazoRandom,x,y);
        cant = cant + 1;
        rosa++;
      }
    }
    
  }
}