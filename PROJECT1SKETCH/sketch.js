var C1 = 255;
var C2 = 255;
var C3 = 255;
var C4 = 255;
var C5 = 255;
var C6 = 255;
var C7 = 255;
var R1 = 255;
var L1 = 255;



function setup() {
  createCanvas(windowWidth, windowHeight);

  input = createInput();
  input.position(20, 65);
  input.size(100, 10);
}

function draw() {
  var mult = 5;
  translate(width/4, 0);
  noStroke();

//square fills
  fill(L1, C1, R1);
  ellipse(25 * mult, 25 * mult, 20 * mult, 20 * mult);
  fill(L1, C2, R1);
  ellipse(50 * mult, 25 * mult, 20 * mult, 20 * mult);
  fill(L1, C3, R1);
  ellipse(75 * mult, 25 * mult, 20 * mult, 20 * mult);
  fill(L1, C4, R1);
  ellipse(100 * mult, 25 * mult, 20 * mult, 20 * mult);
  fill(L1, C2, R1);
  ellipse(25 * mult, 50 * mult, 20 * mult, 20 * mult);
  fill(L1, C3, R1);
  ellipse(50 * mult, 50 * mult, 20 * mult, 20 * mult);
  fill(L1, C4, R1);
  ellipse(75 * mult, 50 * mult, 20 * mult, 20 * mult);
  fill(L1, C5, R1);
  ellipse(100 * mult, 50 * mult, 20 * mult, 20 * mult);
  fill(L1, C3, R1);
  ellipse(25 * mult, 75 * mult, 20 * mult, 20 * mult);
  fill(L1, C4, R1);
  ellipse(50 * mult, 75 * mult, 20 * mult, 20 * mult);
  fill(L1, C5, R1);
  ellipse(75 * mult, 75 * mult, 20 * mult, 20 * mult);
  fill(L1, C6, R1);
  ellipse(100 * mult, 75 * mult, 20 * mult, 20 * mult);
  fill(L1, C4, R1);
  ellipse(25 * mult, 100 * mult, 20 * mult, 20 * mult);
  fill(L1, C5, R1);
  ellipse(50 * mult, 100 * mult, 20 * mult, 20 * mult);
  fill(L1, C6, R1);
  ellipse(75 * mult, 100 * mult, 20 * mult, 20 * mult);
  fill(L1, C7, R1);
  ellipse(100 * mult, 100 * mult, 20 * mult, 20 * mult);
}

function textInput() {
  var name = input.value();
  words.html('+text+');
  input.value('');
}

//middle row square appear
function keyTyped() {
  if (key === 'a') {
    C1 = 235;
  } else if (key === 's') {
    C2 = 225;
  } else if (key === 'd') {
    C3 = 202;
  } else if (key === 'f') {
    C4 = 174;
  } else if (key === 'j') {
    C5 = 139;
  } else if (key === 'k') {
    C6 = 101;
  } else if (key === 'l') {
    C7 = 58;
}

//pink reset
  if (key  === 'y') {
    C1 = 255;
    C2 = 255;
    C3 = 255;
    C4 = 255;
    C5 = 255;
    C6 = 255;
    C7 = 255;

  }

//RGB right hand change
  if (key === 'g') {
    R1 = 200;
  } else if (key === 'p') {
    R1 = 255;
  } else if (key === 'i') {
    R1 = 100;
  }

//RGB left hand change
  if (key === 'q') {
    L1 = 200;
  } else if (key === 'e') {
    L1 = 255;
  } else if (key === 't') {
    L1 = 100;
  }

//RGB 0s
  if (key === 'w') {
    R1 = 0;
  } else if (key === 'e') {
    L1 = 0;
  } else if (key === 'r') {
    C1 = 0;
  } else if (key === 'u') {
    C2 = 0;
  } else if (key === 'o') {
    C3 = 0;
  } else if (key === 'c') {
    C4 = 0;
  } else if (key === 'v') {
    C5 = 0;
  } else if (key === 'b') {
    C6 = 0;
  } else if (key === 'n') {
    C7 = 0;
  }

//RGB random & total reset

  if (key === 'z') {
    R1 = random(255);
  } else if (key ==='x') {
    L1 = random(255);
  } else if (key === 'b') {
    R1 = 255;
    L1 = 255;
    C1 = 255;
    C2 = 255;
    C3 = 255;
    C4 = 255;
    C5 = 255;
    C6 = 255;
    C7 = 255;
  }

}
