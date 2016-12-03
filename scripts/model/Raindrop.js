// This file might look confusing, but it's just mostly Javascript's syntax on creating something that functions like an Object. (Yes, with the function keyword)

function Raindrop() {
  this.x = random(windowWidth);
  this.y = random(0 - windowHeight * 2, 0 - windowHeight / 2);
  this.z = random(0, 100);

  this.lineLength = random(50, 100) + (300 - map(this.z, 0, 100, 100, 300));
  this.opacity = map(this.z, 0, 100, 0.01, 0.5);
  this.speed = map(this.z, 0, 100, 1, 25);

  this.tick = function () {
    this.y = this.y + this.speed;

    if (this.y > windowHeight + 100) {
      this.x = random(windowWidth);
      this.y = random(0 - windowHeight * 2, 0 - windowHeight / 2);
      this.z = random(0, 100);
    }
  };

  this.draw = function () {
    strokeWeight(3);
    stroke('rgba(143, 209, 192, ' + this.opacity + ')');
    line(this.x, this.y, this.x, this.y + this.lineLength);
  };
}
