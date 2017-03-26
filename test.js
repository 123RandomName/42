function setup() {
	createCanvas(1000,600);
	background(255);
	}

function draw(){}

function mousePrssed(){
	linrColor=(0);
}

function mouseDragged(){
	strokeWeight(7);
	stroke(0);
	line(pmouseX,pmouseY,mouseX,mouseY);
}