var windowHeight = document.documentElement.clientHeight;
var windowWidth = document.documentElement.clientWidth;

var raindrops = [];
var NUM_OF_RAINDROPS = 200;

// Setup is ran when the script is first ran: similar to an initializer.
function setup() {
  createCanvas(windowWidth, windowHeight);
  for (var i = 0; i < NUM_OF_RAINDROPS; i++) {
    raindrops[i] = new Raindrop();
  }
}

// Draw is ran on every tick.
function draw() {
  background(0, 24, 72);
  for (var i = 0; i < NUM_OF_RAINDROPS; i++) {
    // This will call the functions that we defined within the Raindrop object.
    raindrops[i].tick();
    raindrops[i].draw();
  }
}

// WindowResized is an event that fires when the window is resized.
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
