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
    document.getElementById("triangle").onclick = drawTriangle;
    document.getElementById("smile").onclick = drawFace;
    document.getElementById("pyramid").onclick = drawPyramid;
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
   const canvas = document.getElementById('student-canvas-2');
   const ctx = canvas.getContext('2d');
   ctx.clearRect(0, 0, canvas.width, canvas.height);

   var width = 0;
   var height = 0;
   var x = 0;
   var y = 0;
   do {
     var width = Number(prompt("Width: "));
     var height = Number(prompt("Height: "));
     var x = Number(prompt("X: "));
     var y = Number(prompt("Y: "));
     if (width == null || height == null || x == null || y == null) {
       break;
     }if (width > 1024 || width < 1) {
       alert("Your width must be between 1 and 1024.")
     } else if (height > 512 || height < 1) {
       alert("Your height must be between 1 and 512.")
     }else if (x < 1 || x > 1024) {
       alert("Your x-coordinate must be between 1 and 1024.")
     } else if (y < 1 || y > 512) {
       alert("Your y-coordinate must be between 1 and 512.")
     } else if (isNaN(width) || isNaN(height) || isNaN(x) || isNaN(y)) {
       alert("One of your values is not a number.")
     }else if (Number(width) + Number(x) > 1024 || Number(height) + Number(y) > 512) {
       alert("Your rectangle won't fit on the canvas.")
     }
   } while (width > 1024 || width < 1 || height > 512 || height < 1 || x < 1 || x > 1024 || y < 1 || y > 512 || isNaN(width) || isNaN(height) || isNaN(x) || isNaN(y) || Number(width) + Number(x) > 1024 || Number(height) + Number(y) > 512)

   if (!(width == null) && !(height == null) && !(x == null) && !(y == null)) {
     ctx.beginPath();
     ctx.rect(x, y, width, height);
     ctx.closePath();
     ctx.stroke();
   }
 };

/*
 * Exercise 3.
 */

 const drawColoredRectangle = function() {
   const canvas = document.getElementById('student-canvas-3');
   const ctx = canvas.getContext('2d');
   ctx.clearRect(0, 0, canvas.width, canvas.height);

   do {
     var color = (prompt("Color: "))
     if (color == null) {
       break;
     }
     color = String(color)
     var color_setup = color.toUpperCase()
     if (color_setup != "GREEN" && color_setup != "BLACK" && color_setup != "BLUE" && color_setup != "ORANGE" && color_setup != "PURPLE" && color_setup != "RED" && color_setup != "YELLOW") {
       alert(color + " is not a supported color.")
     }
   } while (color_setup != "GREEN" && color_setup != "BLACK" && color_setup != "BLUE" && color_setup != "ORANGE" && color_setup != "PURPLE" && color_setup != "RED" && color_setup != "YELLOW")

   if (color != null) {
     ctx.fillStyle = color_setup;
     ctx.fillRect(10, 10, 100, 50);
   }
 };


/*
 * Exercise 4.
 */

const drawTriangle = function() {
  const canvas = document.getElementById('student-canvas-4');
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, 1024, 512);

    var short = Number(prompt("Side 1: "));
    var other = Number(prompt("Side 2: "));
    var long = Number(prompt("Side 3: "));

  while ( isNaN(short) || short > 1024 || short < 1 || isNaN(other) ||  other > 1024 || other< 1 || isNaN(long) || long > 1024 || long< 1){

      if (short == null || other == null || long == null) {
        ctx.clearRect(0, 0, 1024, 512);
        return;
      }if (isNaN(short) || isNaN(other) || isNaN(long)){
        alert("One of your sides is not a number.")
      } else {
        alert("One of your sides is invalid.")
      }
    short = prompt("Side 1: ");
    other = prompt("Side 2: ");
    long = prompt("Side 3: ");
  }

      var hypot = Math.max(short, other, long)
      var height = Math.min (short, other, long)
      var base = Math.sqrt(hypot*hypot - height*height)


  if ( base > 1024 || height > 512 || hypot > 1144 ){
    alert("Your triangle won't fit on the canvas")
  }if (((height*height) == (hypot*hypot) - (base*base)) && base <= 1024 && height <= 512 && hypot <= 1144 && height > 0 && base > 0 && hypot > 0) {
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
  const canvas = document.getElementById('student-canvas-5');
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, 1024, 512);

  var face = prompt("Radius: ");
  while (face < 32 || face > (512 / 2) || isNaN(face)) {

    if (face == null) {
    break;
  }if (isNaN(face)) {
    alert("Your radius is not a number.");
  }face = Number(face);

  if (face < 32) {
    alert("Your radius must be at least 32.");
  }if (face > (512 / 2)) {
    alert("Your smiley face won't fit on canvas.");
  }
  face = prompt("Radius: ");
}face = Number(face);
let eyes = Number(face * 0.15);
let mouth = Number(face * 0.7);

ctx.beginPath();
ctx.arc(512, 256, face, 0, 2 * Math.PI);
ctx.closePath();
ctx.stroke();

ctx.beginPath();
ctx.arc(512, 256, mouth, 0, Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.arc((face * 0.4) + 512, 256 - (face * 0.4), eyes, 0, 2 * Math.PI);
ctx.closePath();
ctx.stroke();

ctx.beginPath();
ctx.arc(512 - (face * 0.4), 256 - (face * 0.4), eyes, 0, 2 * Math.PI);
ctx.closePath();
ctx.stroke();

};

/*
 * Exercise 6 (extra credit).
 */
 const drawPyramid = function() {
     const canvas = document.getElementById("student-canvas-6");
     const ctx = canvas.getContext("2d");
     ctx.clearRect(0, 0, canvas.width, canvas.height);
     let side;
     let endLoop = false;

     while (endLoop === false) {
         side = window.prompt("Side:");
         if (side === null) {
             endLoop = true;
         }else if (Number.isNaN(Number(side))) {
             window.alert("Your block size is not a number.");
         }else if (Number(side) < 1) {
             window.alert("Your block size must be at least 1.");
         }else if (side > 100) {
             window.alert("Your pyramid won't fit on the canvas.");
         }else {
             endLoop = true;
         }
     }

     let startingPoint = 10;
     let y = canvas.height - 10 - Number(side);

     for (let i = 5; i > 0; i--) {
         let x = startingPoint;
         for (let j = i; j > 0; j--) {
             ctx.strokeRect(x, y, Number(side), Number(side));
             x += Number(side);
         }
         startingPoint += Number(side) / 2;
         y -= Number(side);
     }
 };
