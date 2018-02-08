var song;
var button;

function preload(){
    song=loadSound("sound/laurynhill-doowop.mp3")
}

function setup(){
    createCanvas(600,400);
    background(0);
    
    button=createButton("Play")
    button.mousePressed(togglePlaying);
    button.position(20, height-10),
    song.play();
}

function draw(){
    
}

function togglePlaying(){
    
}