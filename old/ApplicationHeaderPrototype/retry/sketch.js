var logoStr = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx0000000xxxxxxxx\
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

var logoWidth = 128;
var logoHeight = 37;//headup 37 bluebyte = 35
var logoCounter = 0;
var logoPixelDestinationX = [];
var logoPixelDestinationY = [];
var logoPixelPosX = [];
var logoPixelPosY = [];
var logoPixelColor = [];
var logoPixelSize = 0.5;
var logoScaleDivider = 240;
var logoScaleFactor = 1;

var logoPixelInPosCount = 0;
var logoUpdatePixels = true;
var logoPixelDist = 1.25;//0.8;
var scrollPosY=0;


//draw a spinning box with width, height and depth 200
function setup() {
  createCanvas(windowWidth,windowHeight, WEBGL);
  //Logo
  logoPixelSize = windowWidth/logoScaleDivider;
  var i=0;
  logoCounter = 0;
  for(var iY=0; iY < logoHeight; iY++){
    for(var iX=0; iX < logoWidth; iX++){
      i++;
      if(logoStr.charAt(i) != "x"){
        logoPixelDestinationX.push(iX*logoPixelSize);
        logoPixelDestinationY.push(iY*logoPixelSize);
        logoPixelPosX.push(random(-width*2,width*2));
        logoPixelPosY.push(random(-height*2,height*2));
        logoPixelColor.push(logoStr.charAt(i));
        logoCounter ++;
      }
    }
  }
  var fov = 60 / 180 * PI;
  var cameraZ = height / 2.0 / tan(fov / 2.0);
  perspective(60 / 180 * PI, width / height, cameraZ * 0.1, cameraZ * 10);
}
var camY = 0;
function draw() {
  background(200);
  camera(-40, 0,camY, 0, 0, 0, 0, 1, 0);

  plane(120, 120);



//  orbitControl();
  for(var j = 0; j<logoCounter; j++){
    push();
    translate(logoPixelPosX[j],logoPixelDestinationY[j]);
    box(logoPixelSize,logoPixelSize,logoPixelSize);
    pop();
    //translate(-logoPixelDestinationX[j],-logoPixelDestinationY[j]);

    //pixelMovement
    if(logoUpdatePixels){
      if(abs(logoPixelPosX[j]-logoPixelDestinationX[j]) <= 2)
      {
        logoPixelPosX[j] = logoPixelDestinationX[j];
      }
      else
      {
        var velX;
        if(logoPixelPosX[j]<logoPixelDestinationX[j]){
          velX = 2;
        }
        else {
          velX = -2;
        }
        logoPixelPosX[j] += velX*abs(logoPixelPosX[j]-logoPixelDestinationX[j])*0.125 * random(0.125,0.25);
      }
      if(abs(logoPixelPosY[j]-logoPixelDestinationY[j]) <= 2)
      {
        logoPixelPosY[j] = logoPixelDestinationY[j];
      }
      else
      {
        var velY;
        if(logoPixelPosY[j]<logoPixelDestinationY[j]){
          velY = 2;
        }
        else {
          velY = -2;
        }
        logoPixelPosY[j] += velY*abs(logoPixelPosY[j]-logoPixelDestinationY[j])*0.125 * random(0.125,0.25);
      }
      if(abs(logoPixelPosX[j]-logoPixelDestinationX[j]) <= 2 && abs(logoPixelPosY[j]-logoPixelDestinationY[j]) <= 2)
      {
        logoPixelInPosCount++;
      }
    }
  }
}
function mouseWheel(event){
 camY-=event.delta;
}
