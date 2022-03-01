function setup() {
    createCanvas(900, 400);
}
 // If we put it all in the setup loop, it only draws once
 //PIE BASE

function draw() {
    if (mouseIsPressed) {
        background('#eed49c');
        fill('pink');
        // circle (center X, center Y, diameter)
        rect(mouseX, mouseY, 200, 100);
        fill('white');
        // line (starting X, starting Y, ending X, ending Y)
        rect(mouseX, mouseY+40, 200, 20);
        // PIE TOP
        fill('pink');
        triangle(mouseX,mouseY, mouseX+200,mouseY, mouseX+150, mouseY-30);
        // TOPPING
        fill('red');
        circle(mouseX+130,mouseY-23,30);
    }
}