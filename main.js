noseX=0;
noseY=0;
difference= 0;
rightWristX = 0;
leftWristX = 0;



function setup() {
    video =  createCapture(VIDEO);
    video.size(500,500);
    video.position(50, 100);
    
    canvas= createCanvas(500,500);
    canvas.position(550, 113);  

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log('PuseANaat HOya Work kara');
}

function draw()
{
    background('#5df0e1');
      fill('#d8f547');
      textSize(difference);
      stroke('#c9ff96');
      text('Sike This is just a prototype!')

}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX ="+ noseX +" noseY = "+ noseY);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);

        console.log("leftWristX = "+leftWristX + "rightWristx = "+rightWristX+ "difference = "+difference)
    }
}

