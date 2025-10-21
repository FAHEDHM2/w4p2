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

      
      if (((x / 50) + (y / 50)) % 2 == 0) {
        fill(0);    
      } else {
        fill(255);  
      }

     
      rect(x, y, 50, 50);

      
      y += 50;
    }


    x += 50;
  }
}
