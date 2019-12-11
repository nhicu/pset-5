window.onload = function() {
    document.getElementById("hello-sample").onclick = sayHelloStaff;
    document.getElementById("rectangle-sample").onclick = drawRectangleStaff;
    document.getElementById("colored-rectangle-sample").onclick = drawColoredRectangleStaff;
    document.getElementById("triangle-sample").onclick = drawTriangleStaff;
    document.getElementById("smile-sample").onclick = drawFaceStaff;
    document.getElementById("pyramid-sample").onclick = drawPyramidStaff;

    // this is how we're connecting our buttons to our JavaScript functions. let's walk through it.
    //
    // document.getElementById("some-id")   <-- you need to give each button a unique ID
    //                                          and access it in this manner
    //
    // onclick is an event that is fired when you click something (in our case, a button).
    // when we give onclick a value, we're telling JavaScript what to do when we click the button.
    // you should set onclick equal to your function names (i.e., sayHello).
    //
    // there are six event listeners being added for the staff solutions. you'll have an
    // equivalent set of six event listeners for your solutions. the first one is done for you.

    document.getElementById("hello").onclick = sayHello;
    document.getElementById("rectangle").onclick = drawRectangle;
    document.getElementById("colored-rectangle").onclick = drawColoredRectangle;
}

/*
 * Exercise 1.
 */

const sayHello = function() {
    let canvas = document.getElementById('student-canvas-1');
    let ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, 1024, 128);
        let message = prompt("Message: ");
    while (message.length > 50){
      alert("Your message is too long. Keep it under 50 characters.");
      message = prompt("Message: ");
    }
    ctx.font = '48px sans-serif';
    ctx.strokeText(message, 30, 70, 994);
};

/*
 * Exercise 2.
 */

const drawRectangle = function() {
  let canvas = document.getElementById('student-canvas-2');
  let ctx = canvas.getContext('2d');
   ctx.clearRect(0, 0, 1024, 512);
    let width = 0;
    let height = 0;
    let x = 0;
    let y = 0;

while{
  width = prompt("Width: ")
  height = prompt("Height: ")
  x = prompt("X: ")
  y = prompt("Y: ")
  if (width == null || height == null || x == null || y == null) {
    break;
  }
    if( isNaN(width) || width < 1 || width >1024){
      alert("Your width must be between 1 and 1024.")
    }if(isNaN(height)|| height < 1 || height > 512){
      alert("Your height must be between 1 and 512.")
    }if(isNaN(x) || x < 1 || x > 1024){
      alert("Your x-coordinate is invalid.")
    }if(isNaN(y) || y < 1 || y > 512){
      alert("Your y-coordinate is invalid.")
    }if(Number.isNaN(width) ||Number.isNaN(height) || Number.isNaN(x) || Number.isNaN(y)) {
        alert("One of your values is not a number.")
    }if(width + x > 1024 || height + y > 512){
        alert("Your rectangle won't fit on the canvas.")
    }if(width > 1024 && width < 1 && height > 512 && height < 1 && x < 1 && x > 1024 && y < 1 && y > 512 && isNaN(width) && isNaN(height) && isNaN(x) && isNaN(y)){
  ctx.strokeRect(x, y, width, height);
}
}
}
};

/*
 * Exercise 3.
 */

const drawColoredRectangle = function() {
    var color = prompt("Color: ");
    const canvas = document.getElementById('student-canvas-3');
    const ctx = canvas.getContext('2d');
    if (color == "Black" || color== "black" || color== "Blue" || color== "blue" || color== "Green" || color== "green" || color== "Orange" || color== "orange" || color== "Purple" || color== "purple" || color== "Red" || color == "red" || color== "Yellow" || color== "yellow") {
        ctx.fillStyle = color;
        ctx.fillRect(10, 10, 100, 50);
        }
    else{
      alert(color + " is not a supported color.")
    }

};

/*
 * Exercise 4.
 */

const drawTriangle = function() {
    let short = Number(prompt("Side 1: "));
    let other = Number(prompt("Side 2: "));
    let long = Number(prompt("Side 3: "));
    let hypot = Math.max(short, other, long)
    let height = Math.min (sbort, other, long)
    let base = Math.sqrt(hypot*hypot - height*height)
    let canvas = document.getElementById('student-canvas-4');
    let ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  while (((height*height) != (hypotenuse*hypotenuse) - (base*base)) || height > 512 || height < 1 || base > 1024 || base < 1 || hypotenuse < 1 || isNaN(side1) || isNaN(side2) || isNaN(side3)) {

    if (side1 == 0 && side2 == 0 && side3 == 0) {
      break;
    }

    if (isNaN(side1) || isNaN(side2) || isNaN(side3)) {
      alert("One of your sides is not a number.");
    } else if (base > 1024 || height > 512 || hypotenuse > 1144) {
      alert("Your triangle won't fit on the canvas.");
    } else if ((hypotenuse*hypotenuse) != (height*height) + (base*base) || base == 0 || height == 0 || hypotenuse == 0  || side1 + side2 + side3 - hypotenuse - height != base) {
      alert("That's not a valid right triangle.");
    }

    side1 = Number(prompt("Side 1: "));
    side2 = Number(prompt("Side 2: "));
    side3 = Number(prompt("Side 3: "));

  }

  if (((height*height) == (hypotenuse*hypotenuse) - (base*base)) && base <= 1024 && height <= 512 && hypotenuse <= 1144 && height > 0 && base > 0 && hypotenuse > 0) {
    ctx.beginPath();
    ctx.moveTo(25, 25);
    ctx.lineTo(25, height + 25);
    ctx.lineTo(base + 25, height + 25);
    ctx.closePath();
    ctx.stroke();
  }
};

/*
 * Exercise 5.
 */

const drawFace = function() {
    // write your exercise 4 code here
};

/*
 * Exercise 6 (extra credit).
 */

const drawPyramid = function() {
    // write your exercise 5 code here
};
