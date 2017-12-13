var x = 50;
var y = 50;

var x1 = 50;
var y1 = 50;

var hit = false;

function setup() {
  createCanvas(600, 600);
  fill(random(255), random(255), random(255));
  background(200);
  textSize(15);
  text("Hint: There are diagonal paths as well",20,580);
  textSize(32);
  text("Test the Boundaries",160,30);
}

function draw() {
  stroke(0);
  ellipse(x, y, 20);
  ellipse(x1+330,y1+370,20);
  characterMovement();
  maze();
  collision();
  
  function collision(){
  
  hit = collideCircleCircle(x, y, 20,x1+330,y1+370,20);
  if(hit===true){
    textSize(40);
    text("You Win!",200,140);
  }
    
  hit = collideLineCircle(x1 - 50, y1 + 25, x1 + 300, y1 + 25, x, y, 20);
  if(hit===true){
    x=50;
    y=50;
  }
  hit = collideLineCircle(x1 - 50, y1 - 25, x1 + 320, y1 - 25,x,y,20);
  if(hit===true){
    x=50;
    y=50;
  }
  hit = collideLineCircle(x1 + 420, y1 + 125, x1 + 300, y1 + 25,x,y,20);
  if(hit===true){
    x=50;
    y=50;
  }
  hit = collideLineCircle(x1 + 475, y1 + 110, x1 + 320, y1 - 25,x,y,20);
  if(hit===true){
    x=50;
    y=50;
  }
  hit = collideLineCircle(x1 + 420, y1 + 125, x1 + 420, y1 + 480,x,y,20);
  if(hit===true){
    x=50;
    y=50;
  }
  hit = collideLineCircle(x1 + 475, y1 + 110, x1 + 475, y1 + 530,x,y,20);
  if(hit===true){
    x=50;
    y=50;
  }
  hit = collideLineCircle(x1 + 420, y1 + 480, x1 + 200, y1 + 480,x,y,20);
  if(hit===true){
    x=50;
    y=50;
  }
  hit = collideLineCircle(x1 + 475, y1 + 530, x1 + 160, y1 + 530,x,y,20);
  if(hit===true){
    x=50;
    y=50;
  }
  hit = collideLineCircle(x1 + 200, y1 + 480, x1 + 20, y1 + 280,x,y,20);
  if(hit===true){
    x=50;
    y=50;
  }
  hit = collideLineCircle(x1 + 160, y1 + 530, x1 - 40, y1 + 300,x,y,20);
  if(hit===true){
    x=50;
    y=50;
  }
  hit = collideLineCircle(x1 + 20, y1 + 280, x1 + 20, y1 + 150,x,y,20);
  if(hit===true){
    x=50;
    y=50;
  }
  hit = collideLineCircle(x1 - 40, y1 + 300, x1 - 40, y1 + 95,x,y,20);
  if(hit===true){
    x=50;
    y=50;
  }
  hit = collideLineCircle(x1 + 20, y1 + 150, x1 + 240, y1 + 150,x,y,20);
  if(hit===true){
    x=50;
    y=50;
  }
  hit = collideLineCircle(x1 - 40, y1 + 95, x1 + 300, y1 + 95,x,y,20);
  if(hit===true){
    x=50;
    y=50;
  }
  hit = collideLineCircle(x1 + 240, y1 + 150, x1 + 240, y1 + 250,x,y,20);
  if(hit===true){
    x=50;
    y=50;
  }
  hit = collideLineCircle(x1 + 300, y1 + 95, x1 + 300, y1 + 300,x,y,20);
  if(hit===true){
    x=50;
    y=50;
  }
  hit = collideLineCircle(x1 + 240, y1 + 250, x1 + 120, y1 + 250,x,y,20);
  if(hit===true){
    x=50;
    y=50;
  }
  hit = collideLineCircle(x1 + 300, y1 + 300, x1 + 150, y1 + 300,x,y,20);
  if(hit===true){
    x=50;
    y=50;
  }
  hit = collideLineCircle(x1 + 120, y1 + 250, x1 + 50, y1 + 290,x,y,20);
  if(hit===true){
    x=50;
    y=50;
  }
  hit = collideLineCircle(x1 + 150, y1 + 300, x1 + 240, y1 + 350,x,y,20);
  if(hit===true){
    x=50;
    y=50;
  }
  hit = collideLineCircle(x1 + 50, y1 + 290, x1 + 190, y1 + 390,x,y,20);
  if(hit===true){
    x=50;
    y=50;
  }
  hit = collideLineCircle(x1 + 190, y1 + 390, x1 + 190, y1 + 450,x,y,20);
  if(hit===true){
    x=50;
    y=50;
  }
  hit = collideLineCircle(x1 + 240, y1 + 350, x1 + 240, y1 + 400,x,y,20);
  if(hit===true){
    x=50;
    y=50;
  }
  hit = collideLineCircle(x1 + 190, y1 + 450, x1 + 360, y1 + 450,x,y,20);
  if(hit===true){
    x=50;
    y=50;
  }
  hit = collideLineCircle(x1 + 240, y1 + 400, x1 + 300, y1 + 400,x,y,20);
  if(hit===true){
    x=50;
    y=50;
  }
  hit = collideLineCircle(x1 + 360, y1 + 450, x1 + 360, y1 + 350,x,y,20);
  if(hit===true){
    x=50;
    y=50;
  }
  hit = collideLineCircle(x1 + 300, y1 + 400, x1 + 300, y1 + 350,x,y,20);
  if(hit===true){
    x=50;
    y=50;
  }
  hit = collideLineCircle(x1 + 360, y1 + 350, x1 + 300, y1 + 350,x,y,20);
  if(hit===true){
    x=50;
    y=50;
  }
  
}

  function characterMovement() {
    
    if (keyIsDown(LEFT_ARROW)) {
      x = x - 3;
    }
    if (keyIsDown(RIGHT_ARROW)) {
      x = x + 3;
    }
    if (keyIsDown(UP_ARROW)) {
      y = y - 3;
    }
    if (keyIsDown(DOWN_ARROW)) {
      y = y + 3;
    }

    
  }

  function maze() {
    noStroke();

    line(x1 - 50, y1 + 25, x1 + 300, y1 + 25);
    line(x1 - 50, y1 - 25, x1 + 320, y1 - 25);

    line(x1 + 420, y1 + 125, x1 + 300, y1 + 25);
    line(x1 + 475, y1 + 110, x1 + 320, y1 - 25);

    line(x1 + 420, y1 + 125, x1 + 420, y1 + 480);
    line(x1 + 475, y1 + 110, x1 + 475, y1 + 530);

    line(x1 + 420, y1 + 480, x1 + 200, y1 + 480);
    line(x1 + 475, y1 + 530, x1 + 160, y1 + 530);

    line(x1 + 200, y1 + 480, x1 + 20, y1 + 280);
    line(x1 + 160, y1 + 530, x1 - 40, y1 + 300);

    line(x1 + 20, y1 + 280, x1 + 20, y1 + 150);
    line(x1 - 40, y1 + 300, x1 - 40, y1 + 95);

    line(x1 + 20, y1 + 150, x1 + 240, y1 + 150);
    line(x1 - 40, y1 + 95, x1 + 300, y1 + 95);

    line(x1 + 240, y1 + 150, x1 + 240, y1 + 250);
    line(x1 + 300, y1 + 95, x1 + 300, y1 + 300);

    line(x1 + 240, y1 + 250, x1 + 120, y1 + 250);
    line(x1 + 300, y1 + 300, x1 + 150, y1 + 300);

    line(x1 + 120, y1 + 250, x1 + 50, y1 + 290);
    line(x1 + 150, y1 + 300, x1 + 240, y1 + 350);

    line(x1 + 50, y1 + 290, x1 + 190, y1 + 390);

    line(x1 + 190, y1 + 390, x1 + 190, y1 + 450);
    line(x1 + 240, y1 + 350, x1 + 240, y1 + 400);

    line(x1 + 190, y1 + 450, x1 + 360, y1 + 450);
    line(x1 + 240, y1 + 400, x1 + 300, y1 + 400);

    line(x1 + 360, y1 + 450, x1 + 360, y1 + 350);
    line(x1 + 300, y1 + 400, x1 + 300, y1 + 350);

    line(x1 + 360, y1 + 350, x1 + 300, y1 + 350);
    
  }

}