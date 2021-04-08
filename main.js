function preload() {

}

function setup() {
  canvas = createCanvas(640, 480);
  canvas.position(150, 150);
  video = createCapture(VIDEO);
  video.hide();

}

function draw() {
  image(video, 160, 90, 350, 300);

  fill(255, 0, 0);
  stroke(189, 68, 243);
  circle(50, 50, 80);
  circle(50, 430, 80);
  circle(590, 50, 80);
  circle(590, 430, 80);
  fill(189, 68, 243);
  stroke(187, 08, 255);
  rect(90, 40, 460, 20);
  rect(90, 420, 460, 20);
  rect(40, 90, 20, 300);
  rect(580, 90, 20, 300);
}

function take_snapshot(){    
  save('my_photo.png');
}
