var mic;
function setup() {
 createCanvas (800, 600);
 
 mic = new p5.AudioIn ();
 mic.start();
}

function draw() {
  background (0);
  var volume = map (mic.getLevel(), 0, 1, 0, height);
  console.log (volume);
  
  fill (100,0,255)
  ellipse (width/2, height/2, volume, volume); 
}

function mousePressed () {
  
}