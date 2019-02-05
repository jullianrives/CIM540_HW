var eyeOffset= 20;
var eyeSize= 20;
var backgroundColor= "white";


function setup() {
  // put setup code here
    createCanvas(500,500);


}

function draw() {
  // put drawing code here
  background(backgroundColor);


  ////////////DRAWING THE HEAD////////////////
    ellipse(210, 210, 110, 110);
    // ellipse function to draw a circle; (x,y,W,H) = x centerpoint coordinate,y centerpoint coordinate,Width,Height
    // this ellipse will serve as the head of our character
    line(210,265,210,265+200);
    // body; (x1,y1,x2,y2)
    line(210,310,210-100,310+50);
    // arm left; (x1,y1,x2,y2)
    line(210,310,210+100,310+50);
    // arm right; (x1,y1,x2,y2)
    line(210,465,210-100,465+50);
    // leg left; (x1,y1,x2,y2)
    line(210,465,210+100,465+50);
    // leg right; (x1,y1,x2,y2)
    ellipse(210-eyeOffset, 210-10, eyeSize, eyeSize);
    // ellipse function to draw a circle; (x,y,W,H) = x centerpoint coordinate,y centerpoint coordinate,Width,Height
    // this ellipse will serve as the left eye of the head of our character
    ellipse(210+eyeOffset, 210-10, eyeSize, eyeSize);
    // ellipse function to draw a circle; (x,y,W,H) = x centerpoint coordinate,y centerpoint coordinate,Width,Height
    // this ellipse will serve as the right eye of the head of our character
    angleMode(DEGREES);
    arc(210,210+20,20,20,0,180);
    //smile portion of face
    //(start x,start y,width size of ellipse,height size of ellipse,start location in degrees, end location in degrees)
    //for arcs-- East location on circle is 0 degrees, South is 90, West is 180, North is 270, and back to East for 360

}

//end bracket of draw function loop


/////////////////////////////////////////
//post draw loop commands----------------
/////////////////////////////////////////

function mousePressed(){
  backgroundColor="blue";
}
console.log("Click-blue");
//mousePressed is a built in function for jsp5
//sets BGcolor to blue on click

function mouseReleased(){
  backgroundColor="White";
}
console.log("Click-Release-White");
//sets BGcolor back to white on click-release
