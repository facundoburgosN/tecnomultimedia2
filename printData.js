function printData(){
    push();
    //
    let textString = 'amplitud:' + amp*1000 + '\namp_min:' + amp_min;
    let bbox = font.textBounds(textString, 5, 30, 31);
    fill(255);
    noStroke();
    rect(bbox.x, bbox.y, bbox.w, bbox.h*2);
    fill(0);
    stroke (0);
    textFont(font);
    textSize(30);
    text(textString, 10, 30);
    //
    pop();
}