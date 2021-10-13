img = "";
noseX = 0;
noseY = 0;
MarioX = 325;
MarioY = 325;

function preload() {
	img = loadImage("mario05.png");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240 , 336);
    canvas.parent('canvas');
	instializeInSetup(mario);

	video = createCapture(VIDEO);
	video.size(600 , 300);
	video.parent('canvas');

	poseNet = ml5.poseNet(video , modelLoaded);
	poseNet.on('pose' , gotPoses);
}

function draw() {
	background("#D3D3D3");

	if(noseX < 300){
		MarioX = MarioX - 1;
	}

	if(noseX > 300){
		MarioX = MarioX + 1;
	}

	if(MarioY < 150){
		MarioY = MarioY - 1;
	}
	image(img , MarioX , MarioY , 40 , 70);
}

function modelLoaded(){
	console.log("Model Loaded!");
}

function gotPoses(results){
	if(results.length > 0){
		noseX = results[0].pose.nose.x;
	    noseY = results[0].pose.nose.y;
	    console.log("noseX = " + noseX + " noseY = " + noseY);
	}
}






