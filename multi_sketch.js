// Multi-sketch example

// sketch1
let sketch1 = new p5( p => {

  p.setup = () => {
    p.createCanvas($("#one").width(), $("#one").height());
  };

  p.draw = () => {
    p.background(100);
    p.fill(255);
    p.rectMode(p.CENTER);
    p.rect(p.mouseX, p.mouseY, 50, 50);

  };
}, 'one');

// sketch2
let sketch2 = new p5( p => {

  p.setup = () => {
    p.createCanvas($("#two").width(), $("#two").height());
  };

  p.draw = () => {
    p.background(255,0,0);
    p.fill(255);
    p.ellipse(p.mouseX, p.mouseY, 50, 50);
  };
}, 'two');