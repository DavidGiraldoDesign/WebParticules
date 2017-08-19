var planets;

var canvas;

function windowResized() {
	console.log('resized');
	resizeCanvas(windowWidth, windowHeight);
}

function setup() {
	canvas = createCanvas(windowWidth, windowHeight);
	canvas.position(0,0);
	canvas.style('z-index', '-1');
	var p = new Bola(mouseX, mouseY);
	planets = [p];
}


function draw() {
	background(255, 135, 153);
	if (planets.length > 0) {
		for (var i = 0; i < planets.length; i++) {
			planets[i].move();
			planets[i].display();
		}
	}
}

function mousePressed() {
	planets.push(new Bola(mouseX, mouseY));
}

// Bola class
function Bola(x, y) {
	this.x = x;
	this.y = y;
	this.diameter = random(10, 30);
	this.speed = 1;

	this.move = function () {
		this.x += random(-this.speed, this.speed);
		this.y += random(-this.speed, this.speed);
	};

	this.display = function () {
		noStroke();
		ellipse(this.x, this.y, this.diameter, this.diameter);
	};
}
