var car, wall;
var speed, weight;



function setup() {
  createCanvas(1400,400);

  speed=random(55, 90);
  weight=random(400, 1500);

  car = createSprite(50, 200, 20, 20);

  wall = createSprite(1200, 200, 60, height/2);
}

function draw() {
  background(0,0,0);
  
  wall.shapecolor = "white";

  car.velocityX = speed;

  if(wall.x - car.x < car.width/2 + wall.height/3)
  {
    car.velocityX = 0;

    var deformation = 0.5* weight* speed* speed/22509;

    if(deformation>180)
    {
      car.shapeColor = color(255, 0, 0);
    }

    if(deformation < 180 && deformation>100)
    {
      car.shapeColor = color(230, 230, 0);
    }
    if(deformation<100)
    {
      car.shapeColor = color(0, 255, 0);
    }
  }

  drawSprites();
}

// algoritm for making two things collide
// 1. create two sprites
// 2. make one sprite moving 
// 3. if the object.x - object1.x < (object.width + object1.width) / 2 shows the collision between two objects
// 4. if the object1.x - object.x < (object.width + object1.width) / 2 shows the collision between two objects
// 5. if the object.y - object1.y < (object.height + object1.height) / 2 shows the collision between two objects
// 5. if the object1.y - object.y < (object.height + object1.height) / 2 shows the collision between two objects