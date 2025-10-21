function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);
  stroke(0);

  let x = 0;
  while (x < 400) {
    let y = 0;
    while (y < 400) {

      const inside =
        mouseIsPressed &&
        mouseX >= x && mouseX < x + 50 &&
        mouseY >= y && mouseY < y + 50;

      fill(inside ? color(0, 0, 255) : 255);
      rect(x, y, 50, 50);

      y += 50;
    }
    x += 50;
  }
}



    
