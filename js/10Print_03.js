let x=0;
let y=0;
let size=30;

 function setup() {
   createCanvas(windowWidth, windowHeight);
   background(222);
  
   
 }

function draw() {
  strokeWeight(2);
  stroke (0,0,10)
fill (0,0,20,20)

  
  
  if(random(1) < 2.5){ 
    ellipse(x-50,y,40)
     circle(x-20, y, 40);
    stroke(0,100,0);
    } else { 
      ellipse(x,y);
      
    
        }
  
  x +=size;
  if(x > width){ 
    x= 0;
    y = y + size;
  }
  
}
