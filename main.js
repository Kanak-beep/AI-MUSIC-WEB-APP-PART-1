function setup() {
    canvas = createCanvas(400, 400);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(400, 400);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);

    poseNet.on('pose', gotPose);
}

function modelLoaded() {
    console.log('PoseNet is initialized')
}

function draw() {
    image(video, 0, 0, 400, 400);
    background('#D291BC');
}