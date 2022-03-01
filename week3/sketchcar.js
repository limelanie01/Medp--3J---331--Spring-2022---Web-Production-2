function setup() {
  createCanvas(800, 400);
  // If we put it all in the setup loop, it only draws once
  noStroke()
  //CAR
  fill('red')
  rect(100, 170, 150, 35)
  rect(120, 120, 90, 50)
  rect(250, 170, 30, 10)
  rect(250, 180, 40, 25)
  rect(70, 177, 30, 20)
  triangle(280, 170, 280, 180, 290, 180)
  triangle(120,120,100,170,120,170)
  triangle(210,170,210,120,250,170)

  // WHEELS
  fill('gray')
  circle(220, 210, 30)
  circle(130, 210, 30)
}

function draw() {

}