
var page1,page2,page3,page4;

var image1,image2,image3,image4;

var currentImage = 0

function preload(){
  image1 = loadImage("assets/story1.jpg");
  image2 = loadImage("assets/story2.jpg");
  image3 = loadImage("assets/story3.jpg");
  image4 = loadImage("assets/story4.jpg");
}


function setup(){
  createCanvas(500,500);

  page1 = createButton("Page 1");
  page1.position(10,400);
  page1.mousePressed(function(){

      currentImage = 1;

    });

    page2 = createButton("Page 2");
    page2.position(100,400);
    page2.mousePressed(function(){

      currentImage = 2;

    });

    page3 = createButton("Page 3");
    page3.position(190,400);
    page3.mousePressed(function(){

      currentImage = 3;

    });

    page4 = createButton("Page 4");
    page4.position(280,400);
    page4.mousePressed(function(){

      currentImage = 4;

    });
}

    function draw(){
    background(255);

    if(currentImage == 1){
      image(image1,0,0, width=500, length=500);
      text("There was a mystical mountain", 10, 10, fill(255));
    }
        else if(currentImage == 2){
          image(image2,0,0,width=500, length=500);
          text("And one day, a terrible storm overtook it, making it impossible to travel", 10, 10, fill(255));
        }
          else if(currentImage == 3){
            image(image3,0,0,width=500, length=500);
            //rect(0,0,350,20);
            text("a passing storm mage would ultimately cast a spell", 10, 10);
          }
            else if(currentImage == 4){
              image(image4,0,0,width=500, length=500);
              text("thus, returning the mountain back to its former state", 10, 10, fill(255));
            }
                else{
                  text("Click on the buttons below to read the story", 10, 250, fill(0));
                }

    }
