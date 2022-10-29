function createCanvas() {
    createCanvas(250,200);
}

function setup() {
  canvas = createCanvas(640, 480);
  canvas.position(110, 250);
  video = createCapture(VIDEO);
  video.hide();

}


function take_snapshot(){    
  save('student_name.png');
}

function  circle() {
    circle(30, 30, 20);
    describe('white circle with black outline in mid of gray canvas');
    circle(30, 30, 15)
}

function rect() {
    rect(30, 20, 55, 55, 20);
    describe('white rect with black outline and round edges in mid-right of canvas');
    rect(30, 20, 32, 15)
}



