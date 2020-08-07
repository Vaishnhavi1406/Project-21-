var thickness, wall;
var bullet, speed, weight; 

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  speed = random(50,90);
  weight = random(400, 1500); 
  thickness = createSprite(50, 200, 50, 50);  
  wall = createSprite(1200, 200, thickness, height/2); 
  thickness = random(22, 83);
  bullet = createSprite(50, 200, 50, 50); 
  weight = random(30,52); 
  speed = random(30, 52); 
  thickness. velocityX = speed; 
}

function draw() {
  background(255,255,255);  
  if (wall.x-thickness.x < (thickness.width+wall.width)/2)
  {
   thickness.velocityX = 0; 
   var deformation = 0.5 * weight * speed * speed/22509; 

   if (deformation>100) 
   {
      thickness . shapeColor = color(255, 0, 0); 
   }
   if (deformation<100 && deformation>100)
   {
     thickness . shapeColor = color(230, 230, 0); 
   }
   if (deformation < 100) 
   {
      thickness . shapeColor = color(0, 255, 0); 
   }
  }
  if (hasCollided(bullet, wall)) 
  {
    bullet . velocityX = 0; 
    var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness); 
    
    if (damage>10) 
    {
      wall . shapeColor = color (255,0,0); 
    }
  } 

  if (damage < 10) 
  {
    wall.shapeColor = color(0, 255, 0); 
  }

  drawSprites();
}

function hasCollided (Lbullet, Lwall) 
{
 bulletRightEdge = bullet.x + bullet.width; 
 wallLeftEdge = wall.x; 
 if (bulletRightEdge>=wallLeftEdge) 
 {
   return ture; 
 }
   return false; 
}