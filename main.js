canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
nasa_imagea=["crying baby.jpg","head in cam2.png","mars.jpg","mars-rover-cartoon.jpg"];
random_number=Math.floor(Math.random()*4);
backgroundImage=nasa_imagea[random_number];
roverimage="mars-rover-cartoon.jpg";
roverWidth=150;
roverHeight=140;
roverX=20;
roverY=50;
rover1Width=150;
rover1Height=140;
rover1X=100;
rover1Y=200;
function addais(){
    backgroundimgtag=new Image();
    backgroundimgtag.onload=uploadimage;
    backgroundimgtag.src=backgroundImage;
    roverimgtag=new Image();
    roverimgtag.onload=uploadrover;
    roverimgtag.src=roverimage;
    rover1imgtag=new Image();
    rover1imgtag.onload=uploadrover1;
    rover1imgtag.src=roverimage;
}
function uploadimage(){
    ctx.drawImage(backgroundimgtag,0,0,canvas.width,canvas.height);
}
function uploadrover(){
    ctx.drawImage(roverimgtag,roverX,roverY,roverWidth,roverHeight);
}
function uploadrover1(){
    ctx.drawImage(rover1imgtag,rover1X,rover1Y,rover1Width,rover1Height);
}
window.addEventListener("keydown",mykeydown);
function mykeydown(e){
keypress=e.keyCode;
if(keypress=='38'){
    rover_up();
    
}
if(keypress=='40'){
    rover_down();
    
}
if(keypress=='37'){
    rover_left();
    
}
if(keypress=='39'){
    rover_right();
    
}



if(keypress=='87'){
    rover1_up();
    
}
if(keypress=='83'){
    rover1_down();
    
}
if(keypress=='65'){
    rover1_left();
    
}
if(keypress=='68'){
    rover1_right();
    
}
if(rover1X>700){
    document.getElementById("eu").innerHTML="rover 2 won sjsn";
}
if(roverX>700){
    document.getElementById("eu").innerHTML="rover 111111111111111111111111111111111 won sjcvndmcjk%&%^sn";
}
}

function rover_up(){
    if(roverY>=0){
        roverY=roverY-50;
        uploadimage();
        uploadrover();
        uploadrover1();
    }
}
function rover_down(){
    if(roverY<=500){
        roverY=roverY+50;
        uploadimage();
        uploadrover();
        uploadrover1();
    }
}
function rover_left(){
    if(roverX>=0){
        roverX=roverX-50;
        uploadimage();
        uploadrover();
        uploadrover1();
    }
}
function rover_right(){
    if(roverX<=700){
        roverX=roverX+50;
        uploadimage();
        uploadrover();
        uploadrover1();
    }
}
function rover1_up(){
    if(rover1Y>=0){
        rover1Y=rover1Y-50;
        uploadimage();
        uploadrover1();
        uploadrover();
    }
}
function rover1_down(){
    if(rover1Y<=500){
        rover1Y=rover1Y+50;
        uploadimage();
        uploadrover1();
        uploadrover();
    }
}
function rover1_left(){
    if(rover1X>=0){
        rover1X=rover1X-50;
        uploadimage();
        uploadrover1();
        uploadrover();
    }
}
function rover1_right(){
    if(rover1X<=700){
        rover1X=rover1X+50;
        uploadimage();
        uploadrover1();
        uploadrover();
    }
}