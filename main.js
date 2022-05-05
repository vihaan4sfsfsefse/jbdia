function setup() {
    canvas=createCanvas(600,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide(); 

    poseNet = ml5.poseNet(video,modelloaded);
    poseNet.on('pose', gotresult);
}
function draw() {
    image(video,0,0,600,500);
}
var sound = "";
leftWristx=0;
leftWristy=0;
rightWristx=0;
rightWristy=0;
function preload() {
    sound = loadSound("music.mp3");
}
 
function play() {
    sound.play();
    sound.setVolume(1);
    sound.rate(1);
}

function modelloaded() {
    console.log("Model is loaded")
}

function gotresult(results) {
if (results.length > 0)
{
    console.log(results);
leftWristx=results[0].pose.leftWrist.x;
leftWristy=results[0].pose.leftWrist.y;
console.log("leftWristx = " + leftWristx + ", leftWristy= " + leftWristy);

rightWristx=results[0].pose.rightWrist.x;
rightWristy=results[0].pose.rightWrist.y;
console.log("rightWristx = " + rightWristx + ", rightWristy= " + rightWristy);
}
}