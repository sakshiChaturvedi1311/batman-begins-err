const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var max =100;
var thunderCount = 0;
var drop = [];
var man, thunder;

function preload(){

  th1=loadImage("1.png");  
  th2=loadImage("2.png");  
  th3=loadImage("3.png");  
  th4=loadImage("4.png");  
    
}

function setup(){
    createCanvas(600,780);

    engine = Engine.create();
	world = engine.world;
    
   

    if(frameCount%150===0){

        for(var i=0; i<max; i++){
   
           drop.push(new Drops(random(0,400),random(0,400)));
       
        }
    }

    man=new Umb(); 
    Engine.run(engine);
    
}

function draw(){
    background(0);

  

    var rand = Math.round(random(1,4));
    if(frameCount%80===0){

        thunderCount= frameCount;

        thunder= createSprite(random(10,490),random(7,20),10,10);
        switch(rand){
            case 1:thunder.addImage(th1);
            break;
            case 2:thunder.addImage(th2);
            break;
            case 3:thunder.addImage(th3);
            break;
            case 4:thunder.addImage(th4);
            break;
            default:break;
        }

        thunder.scale=random(0.3,0.6);

    }
    if(thunderCount + 10 === frameCount && thunder){
        thunder.destroy();
    }

    man.display(); 

    for (var i=0;i<max;i++){
        drop[i].display();
        drop[i].changePosition();
    }
    
   // thunder.display();
   drawSprites();
   
}   

