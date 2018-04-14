//var HeartFull
//var HeartEmpty
//var damage
var fr = (5) //starting fps
var clr
var score = (0) //Score starts at 0
var background1y = 0


function preload() {
  bg1 = loadImage('assets/AnnoyingBackground.png')
  bg2 = loadImage('assets/AnnoyingBackground.png')
  ship = loadImage('assets/ship.png')
  win = loadImage('assets/win.png')
// Old assets I was going to use
  // SwordLeft = loadImage('assets/SwordLeft.png');
  // SwordRight = loadImage('assets/SwordRight.png');
  // SwordDown = loadImage('assets/SwordDown.png');
  // HeartEmpty = loadImage('assets/HeartEmpty.png');
  // HeartFull = loadImage('assets/HeartFull.png');
}

function setup() {
  //Create canvas
  createCanvas(150,100)
  textSize(5);
  textSize(8);
  image(bg1, 0, 0);



  //Setting the background to slowly change colours

  frameRate(fr)

}

function draw() {
  background1y = background1y -= fr;
  background(255 - (frameCount/2), 255 - (frameCount), 185 - (frameCount*2));
image(bg1, 0, background1y);
if (background1y >= 139) {
  image(bg2, 0, (background1y+239));
}
image(ship, 68, (fr*2)-30)
    //Code from older idea which had life involved
  // image(HeartFull, 130, 0);
  // image(HeartFull, 120, 0);
  // image(HeartFull, 110, 0);
  //trying to make damage replace hearts with empty ones
  //text(frameCount, 100, 10);
//  text(score, 10, 10);

  frameRate(fr);

  //scoreboard screen which triggers after certain frame count
  if (frameCount >= 150) { //change to 200
    background(255 - (frameCount/2), 255 - (frameCount), 185 - (frameCount*2));
     image(win,0,0);
     text('You scored:', 45, 51);
     text(score, 90,51);
  }

  // if (keyIsDown(LEFT_ARROW)) {

  //
  // frameRate(fr += 1)
  //}

    //originally tried to get code to add +1 when a key was pressed but this kept going infinite
  // if (keyIsPressed == true) {
  //   score += 1    <--- culprit of infinite values
  // }

}
//120, 80, 50 < colours for background

//Used keyReleased instead of keyIsPressed because it actually worked
//Function registers each key press to increase the frame rate and add 1 to score
function keyReleased(LEFT_ARROW) {
  if (frameCount <= 150) { //change to 200
    score += 1
    fr+=1
  } else {
    score += 0
  }
}
