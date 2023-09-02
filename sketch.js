var arqueiro, arqueiroImg, arqueiroGif
var bullet, bulletImg, bulletGroup
var obstaculos,obstaculosImg,obstaculosGroup
var contador = 0
var live= 4
function preload (){
    obstaculosImg=loadImage("download.png")
    bulletImg=loadImage("Untitled-removebg-preview.png")
    arqueiroImg=loadImage("sprite_00.png")
    arqueiroGif=loadAnimation("sprite_00.png","sprite_01.png","sprite_02.png","sprite_03.png","sprite_04.png","sprite_05.png","sprite_06.png","sprite_07.png","sprite_08.png","sprite_09.png","sprite_10.png","sprite_11.png","sprite_12.png","sprite_13.png","sprite_14.png","sprite_15.png","sprite_16.png","sprite_17.png","sprite_18.png","sprite_19.png","sprite_20.png","sprite_21.png","sprite_22.png","sprite_23.png","sprite_24.png","sprite_25.png","sprite_26.png","sprite_27.png")
}
function setup (){

    createCanvas(1600,800)
    arqueiro=createSprite(1200,height/2,50,50)
    arqueiro.addImage("Img",arqueiroImg)
    arqueiro.addAnimation("Gif",arqueiroGif)
    obstaculosGroup = createGroup();   

    //bulletGroup=createGroup()
}
function draw()
{ 
    background("white")
    console.log(contador)
    contador=contador+1
    textSize(24); // Set the text size
    fill(0); // Set the text color to black
    text(`Live: ${live}`, 20, 50);

    if (frameCount % 80 === 0 && live>0) {
        drawobstaculos();
    }
    if(keyIsDown(32))
    {
      console.log("entrei")
      contador = 0
      arqueiro.changeAnimation("Gif",arqueiroGif) 
      bullet= createSprite(arqueiro.x, arqueiro.y, 50,20)
      bullet.addImage(bulletImg)
      bullet.scale=0.12
      bullet.velocityX= -7

    }
       //for i 
    if (contador > 70) 
    {
        arqueiro.changeImage("Img",arqueiroImg)
    } 

  

 
    drawSprites()
    
}
 
function drawobstaculos(){
    obstaculos = createSprite(800,random(20,780),40,40);
    obstaculos.addImage(obstaculosImg);
    obstaculos.scale = 0.6;
    obstaculos.velocityX = 8;
    obstaculos.lifetime = 400;
    obstaculosGroup.add(obstaculos);
}

  

  


