var logostr = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx0000000xxxxxxxx\
xxx44444xxxxxx44444xxxx44444444444xxxxxx04444xxxxxxx444444444xxxxxxxxx44444xxxxxx44444xxx444444444xxxxxxxxxxxxxx0000000000xxxxxx\
xxx00000xxxxxx20000xxxx00000000000xxxxxx20000xxxxxxx0000000000004xxxxx00000xxxxxx00000xxx0000000000000xxxxxxxxxx07777777700xxxxx\
xxx00000xxxxxx20000xxxx00000000000xxxxxx00000xxxxxxx0000000000000xxxxx00000xxxxxx00000xxx00000000000000xxxxxxxx0777777777700xxxx\
xxx00000xxxxxx20000xxxx00000000000xxxxxx00000xxxxxxx00000000000000xxxx00000xxxxxx00000xxx00000000000000xxxxxxxx0760007777770xxxx\
xxx00000xxxxxx20000xxxx00000000000xxxxx0000000xxxxxx00000000000000xxxx00000xxxxxx00000xxx000000000000000xxxxxx06000000077770xxxx\
xxx00000xxxxxx20000xxxx0000xxxxxxxxxxxx4000000xxxxxx0000xxxxxx00000xxx00000xxxxxx00000xxx00000xxxxx00000xxxxxx00000000077770xxxx\
xxx00000xxxxxx20000xxxx0000xxxxxxxxxxxx0000000xxxxxx0000xxxxxx00000xxx00000xxxxxx00000xxx00000xxxxx00000xxxxxx00077000077770xxxx\
xxx00000xxxxxx20000xxxx0000xxxxxxxxxxxx0000000xxxxxx0000xxxxxx00000xxx00000xxxxxx00000xxx00000xxxxx00000xxxxxx40077000057770xxxx\
xxx00000xxxxxx20000xxxx0000xxxxxxxxxxxx00000000xxxxx0000xxxxxx00000xxx00000xxxxxx00000xxx00000xxxxx00000xxxxxx00777007777770xxxx\
xxx00000xxxxxx20000xxxx0000xxxxxxxxxxxx00000000xxxxx0000xxxxxx00000xxx00000xxxxxx00000xxx00000xxxxx00000xxxxx007777077777770xxxx\
xxx00000xxxxxx20000xxxx0000xxxxxxxxxxx400000000xxxxx0000xxxxxx00000xxx00000xxxxxx00000xxx00000xxxxx00000xxxx0077770777777770xxxx\
xxx00000xxxxxx20000xxxx0000xxxxxxxxxxx000000000xxxxx0000xxxxxx00000xxx00000xxxxxx00000xxx00000xxxxx00000xxx00777776777779770xxxx\
xxx00000xxxxxx20000xxxx0000xxxxxxxxxxx0000000002xxxx0000xxxxxx00000xxx00000xxxxxx00000xxx00000xxxxx00000xx007777777777770770xxxx\
xxx00000xxxxxx20000xxxx0000xxxxxxxxxxx0000000000xxxx0000xxxxxx00000xxx00000xxxxxx00000xxx00000xxxxx00000x0166777777777771770xxxx\
xxx00000xxxxxx20000xxxx0000xxxxxxxxxxx0000000000xxxx0000xxxxxx00000xxx00000xxxxxx00000xxx00000xxxxx00000x0000000777777779770xxxx\
xxx0000000000000000xxxx00000000004xxx00000x00000xxxx0000xxxxxx00000xxx00000xxxxxx00000xxx00000xxxxx00000x0000000077770777770xxxx\
xxx0000000000000000xxxx00000000004xxx00000x00000xxxx0000xxxxxx00000xxx00000xxxxxx00000xxx00000xxxxx00000xx000000777770757770xxxx\
xxx0000000000000000xxxx00000000004xxx0000xxx00002xxx0000xxxxxx00000xxx00000xxxxxx00000xxx00000xxxxx00000xxx07777777776707770xxxx\
xxx0000000000000000xxxx00000000004xxx0000xxx00000xxx0000xxxxxx00000xxx00000xxxxxx00000xxx000000000000000xxx06911777707707770xxxx\
xxx00000xxxxxx20000xxxx0000xxxxxxxxxx0000xxx20000xxx0000xxxxxx00000xxx00000xxxxxx00000xxx00000000000000xxxx07777777707700770xxxx\
xxx00000xxxxxx20000xxxx0000xxxxxxxxx00000xxxx0000xxx0000xxxxxx00000xxx00000xxxxxx00000xxx00000000000000xxxx00000777707760002xxxx\
xxx00000xxxxxx20000xxxx0000xxxxxxxxx00000xxxx00004xx0000xxxxxx00000xxx00000xxxxxx00000xxx0000000000000xxxxx007777770007700xxxxxx\
xxx00000xxxxxx20000xxxx0000xxxxxxxxx0000xxxxx00000xx0000xxxxxx00000xxx00000xxxxxx00000xxx00000000000xxxxxxx077777770007700xxxxxx\
xxx00000xxxxxx20000xxxx0000xxxxxxxxx0000xxxxx00000xx0000xxxxxx00000xxx00000xxxxxx00000xxx00000xxxxxxxxxxxx0777777760007770xxxxxx\
xxx00000xxxxxx20000xxxx0000xxxxxxxx00000xxxxx00000xx0000xxxxxx00000xxx00000xxxxxx00000xxx00000xxxxxxxxxxxx0777777700001770xxxxxx\
xxx00000xxxxxx20000xxxx0000xxxxxxxx00000xxxxxx0000xx0000xxxxxx00000xxx00000xxxxxx00000xxx00000xxxxxxxxxxxx57777777000777702xxxxx\
xxx00000xxxxxx20000xxxx0000xxxxxxxx00000xxxxxx00002x0000xxxxxx00000xxx00000xxxxxx00000xxx00000xxxxxxxxxxx077777770077777000xxxxx\
xxx00000xxxxxx20000xxxx0000xxxxxxxx0000xxxxxxx00000x0000xxxxxx00000xxx00000xxxxxx00000xxx00000xxxxxxxxxxx077777777777006770xxxxx\
xxx00000xxxxxx20000xxxx0000xxxxxxxx0000xxxxxxx00000x0000xxxxxx00000xxx00000xxxxxx00000xxx00000xxxxxxxxxxx077777777700007770xxxxx\
xxx00000xxxxxx20000xxxx0000xxxxxxx00000xxxxxxx00000x0000xxxxxx00000xxx00000xxxxxx00000xxx00000xxxxxxxxxx20000006700007777700xxxx\
xxx00000xxxxxx20000xxxx0000xxxxxxx00000xxxxxxxx0000x0000xxxxxx00000xxx200000xxxx000000xxx00000xxxxxxxxxxxxxx000000000777777702xx\
xxx00000xxxxxx20000xxxx0000000000000000xxxxxxxx00000000000000000000xxxx00000000000000xxxx00000xxxxxxxxxxxxxx0000000077777777700x\
xxx00000xxxxxx20000xxxx0000000000000002xxxxxxxx0000000000000000000xxxxx00000000000000xxxx00000xxxxxxxxxxxxx200000000777777777700\
xxx00000xxxxxx20000xxxx000000000000000xxxxxxxxx0000000000000000000xxxxxx000000000000xxxxx00000xxxxxxxxxxxx0000000007777777777770\
xxx00000xxxxxx20000xxxx000000000000000xxxxxxxxx20000000000000000xxxxxxxxx0000000000xxxxxx00000xxxxxxxxxx000000000007777777777770\
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx000000000000000000000000";



var yPos = 0;
var pixels;
var counter = 0;
var numberOfLineBreaks;
var pixelX = [];
var pixelY = [];
var pX = [];
var pY = [];
var pVelX = [];
var pVelY = [];
var pixelC = [];
var pixelSize = 8;
function preload(){

}
function setup() {
  createCanvas(windowWidth,windowHeight);
  frameRate(30);

    var i=0;
    counter = 0;
    for(var iY=0; iY < 37; iY++){
      for(var iX=0; iX < 128; iX++){
        i++;
        if(logostr.charAt(i) != "x"){
          pixelX.push(iX*pixelSize);
          pixelY.push(iY*pixelSize);
          pX.push(random(-width*2,width*2));
          pY.push(random(-height*2,height*2));
          pixelC.push(logostr.charAt(i));
          counter ++;
        }
      }
    }
}
var readyCounter = 0;
var updateP = true;
var pixelDist = 1.25;//0.8;
var headPosY=0;
function draw() {
 // draw() loops forever, until stopped
  translate(windowWidth/2-128*pixelSize*0.5,windowHeight/4);
  background(204);
  yPos = yPos - 1;
  if (yPos < 0) {
    yPos = height;
  }
  line(0, yPos, width, yPos);
  textSize(32);
  text(windowWidth,windowWidth-128,windowHeight-32,800,800);
  readyCounter =0;
  for(var j = 0; j<counter; j++){
    //color
    switch (pixelC[j]) {
      case "1":
        fill(color('DimGrey'));
        break;
      case "6":
        fill(color('grey'));
        break;
      case "7":
        fill(color('white'));
        break;
      case "9":
        fill(color('DarkGray'));
        break;
      default:
        fill(color(0,0,0));
        break;

    }
    noStroke();
    //ellipse(pX[j],pY[j],pixelSize*pixelDist);
    rect(pX[j]-pixelSize*0.5,pY[j]-pixelSize*0.5,pixelSize*pixelDist,pixelSize*pixelDist);
    if(updateP){
      if(abs(pX[j]-pixelX[j]) <= 2)
      {
        pX[j] = pixelX[j];
      }
      else
      {
        var velX;
        if(pX[j]<pixelX[j]){
          velX = 2;
        }
        else {
          velX = -2;
        }
        pX[j] += velX*abs(pX[j]-pixelX[j])*0.125 * random(0.125,0.25);
      }
      if(abs(pY[j]-pixelY[j]) <= 2)
      {
        pY[j] = pixelY[j];
      }
      else
      {
        var velY;
        if(pY[j]<pixelY[j]){
          velY = 2;
        }
        else {
          velY = -2;
        }
        pY[j] += velY*abs(pY[j]-pixelY[j])*0.125 * random(0.125,0.25);
      }
      if(abs(pX[j]-pixelX[j]) <= 2 && abs(pY[j]-pixelY[j]) <= 2)
      {
        readyCounter++;
      }
    }
    else{
      //pixelDist = 0.5 + (sin(frameCount / 2) * 2);
    }
  }
  if(readyCounter >= counter){
    updateP = false;
  }
  //stroke(0);
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  for(var j=0; j<counter; j++){
    var oldPosX = pixelX[j];
    var oldPosY = pixelY[j];
    oldPosX = oldPosX / pixelSize;
    oldPosY = oldPosY / pixelSize;
    pixelX[j] = oldPosX * (windowWidth/240);
    pixelY[j] = oldPosY * (windowWidth/240);
  }
  pixelSize = windowWidth/240;
  updateP = true;
}

function mouseWheel(event) {
  //move the square according to the vertical scroll amount
  //headPosY -= event.delta * 0.125;
  for(var j=0; j<counter; j++){
    pixelY[j]-= event.delta;
  }
  updateP = true;
  //uncomment to block page scrolling
  //return false;
}
