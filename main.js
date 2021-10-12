rightwristX=0;
leftwristX=0;
difference=0;
function setup(){
    video = createCapture(VIDEO);
    video.size(450,400);
    canvas=createCanvas(450,450);
    canvas.position(560,120);
    poseNet= ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        rightwristX=results[0].pose.rightWrist.x;
        leftwristX=results[0].pose.leftWrist.x;
        console.log("Right Wrist X = "+rightwristX+ "Left Wrist X = "+leftwristX);
        difference=floor(leftwristX-rightwristX);
        console.log("Difference between wrists is = "+difference);

    }
}
function draw(){
    background("#6F7377");
    document.getElementById("size").innerHTML=difference;
    textSize(difference);
    fill('#42DC11');
    text("Benji",20,100);
}
function modelLoaded(){
console.log('PoseNet is Initialized!');
}
