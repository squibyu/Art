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
    // Create the canvas
    createCanvas(1300, 732);
  
    // Set background to black
    background(0);
  
    // Set width of the lines
    strokeWeight(6);
  
    // Set color mode to hue-saturation-brightness (HSB)
    // Set screen reader accessible description
    describe('A blank canvas where the user draws by dragging the mouse');
  }
  
  function mouseDragged() {
    // Set the color based on the mouse position, and draw a line
    // from the previous position to the current position
    colorMode(RGB);
    let lineHue = mouseX - mouseY;
    stroke('rgb(243,243,139)');
    // line(pmouseX, pmouseY, mouseX, mouseY);
    // line(630 - pmouseX, pmouseY,630 - mouseX, mouseY);
    push();
    translate(mouseX, mouseY);
    noStroke();
    fill(500,500,500);
    circle(0,0,6);
    pop();
    
    push();
    translate(630 - mouseX, mouseY);
    noStroke();
    fill(500,500,500);
    circle(0,0,6);
    pop();
  }
  
  function draw(){
    colorMode(RGB);
    push();
    translate(mouseX, mouseY);
    noStroke();
    fill(500,500,500);
    circle(0,0,6);
    pop();
  }