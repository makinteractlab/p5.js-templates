function setup ()
{
  createCanvas (800, 600);
}

function draw()
{
  background(100);
  fill(255);
  rectMode(CENTER);
  rect(mouseX, mouseY, 50, 50);
}
