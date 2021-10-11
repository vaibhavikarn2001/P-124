function setup(){
    video=createCapture(VIDEO);
    video.size(520,500);
    canvas=createCanvas(550,400);
    canvas.position(560,340);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);

}
function modelLoaded(){
    console.log('Posenet Is initialised.');
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
    }
}
function draw(){
    canvas.background('#f06969');
}