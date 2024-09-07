var canvas;

function windowResized () {
 resizeCanvas(windowWidth, windowHeight);
}

function setup() {
canvas = createCanvas(windowWidth, windowHeight);
canvas.position(0,0);
canvas.style('position', 'fixed');
canvas.style('z-index', '-10');
// add more here
}

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
    angleMode(DEGREES);
    strokeWeight(0.8);
    stroke(300,300,300);
    fill('rgb(15,1,1)');
  }
  
  function draw() {
    rotateX(frameCount*0.5);
    rotateY(frameCount*0.5);
    rotateZ(frameCount*0.5);
    background('rgb(15,1,1)');
  
    // Call every frame to adjust camera based on mouse/touch
    orbitControl();
  
    // Rotate rings in a half circle to create a sphere of cubes
    for (let zAngle = 0; zAngle < 180; zAngle += 30) {
      // Rotate cubes in a full circle to create a ring of cubes
      for (let xAngle = 0; xAngle < 360; xAngle += 30) {
        push();
  
        // Rotate from center of sphere
        rotateZ(zAngle);
        rotateX(xAngle);
  
        // Then translate down 400 units
        translate(0, 500, 0);
        sphere();
        pop();
      }
    }
  }