function setup(){
    createCanvas(400,400)
}
function draw(){
    background(255)
    for ( let x = 0; x <= 390; x += 50){
       if (mouseIsPressed && mouseX > x && mouseX < x + 50){
        fill( 0,0,255)
       }
       else {
        fill(255)
       }

     rect(x, 0, 50, 400)
       
    }

}