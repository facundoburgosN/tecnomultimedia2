function printData(){
  push();
  //
  let textString = 'amplitud: ' + amp + '\numbral: ' + amp_min;
  fill(255);
  noStroke();
  rect(0,0,width,100);
  fill(0);
  stroke (0);
  textFont(font);
  textSize(30);
  text(textString, 10, 30);
  //
  pop();
}