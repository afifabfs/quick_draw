function preload() {


}

function setup() {
    canvas = createCanvas(550, 550);
    canvas.position(560, 120);

    video = createCapture(VIDEO);
    video.size(550, 500);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    background('#cbabf5');


}

function modelLoaded() {
    console.log('posenet is working!');
}

function gotPoses(results) {
    if (results.lenght > 0) {
        console.log(results);

    }
}