var mini
var loose



function preload(){

  mini=loadSound("COFFIN DANCE MEME SONGTony Igy - ASTRONOMIA (Remix).mp3")

  loose=loadSound("ON MY WAY x FADED [Mashup] - Alan Walker, Farruko, Sabrina Carpenter.mp3")
  
  
}

function setup() {
 
  createCanvas(500,500)
  
  
}

function draw() {
 background("white")
  coffin=createSprite(250,250,250,40);
  
  if((touches.length > 0)&&mousePressedOver(coffin)){
    mini.play();}
    
    MYWAY=createSprite(250,300,250,40);
  
  if((touches.length > 0)&&mousePressedOver(MYWAY)){
    loose.play();
    
    
  }
  
  
  drawSprites();
}