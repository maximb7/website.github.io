  function setup() {
    // Create the canvas and attach it to the container
    const canvas = createCanvas(500, 500, WEBGL);
    canvas.parent('sketch-container'); // Attach the canvas to the correct container
    angleMode(DEGREES)
    //sets the mode
  }
  
  function draw() {
    background(40)
    //sets background colour
    rotateX(60)
    //rotates the X axis
  
    noFill()
    //makes sure the object isnt filled with a colour
    stroke(random(100,225),random(0,0),random(100,225))
    //sets the stroke colour
  
  
    for (var i = 0; i < 20; i++) {
    //loop
  
      rotate(frameCount / 20)
      //makes object continously rotate
  
      beginShape()
      //begins recording vertices for a shape
      for (var j = 0; j < 360; j += 90){
      //loop
        var rad = i * 10
        var a = rad * cos(j)
        var b = rad * sin(j)
        var c = sin(frameCount * 2  + i * 5) * 100
        vertex(a, b, c)
        //specifys coordinates
      }
      endShape(CLOSE)
      //stops recording vertices for a shape
    }
  
  }



