//Set up the canvas
const canvas = document.querySelector("#topCan");
const ctx = canvas.getContext("2d");

//Window variables, only on startup
let wid = document.body.scrollWidth; 
let hei = window.innerHeight;
let cirNum = 20; // Amount

let play = true; // Used to stop the loop when not on screen

// Colors
const DGreen    = "rgb(0,68,0)";
const Green     = "rgb(0,128,0)";
const LGreen    = "rgb(0,200,0)";
const DBlue     = "rgb(0,0,68)";
const Blue      = "rgb(0,0,128)";
const LBlue     = "rgb(0,0,200)";
const DRed      = "rgb(68,0,0)";
const Red       = "rgb(128,0,0)";
const LRed      = "rgb(200,0,0)";
const DPurple   = "rgb(80,24,64)";
const Purple    = "rgb(150,48,150)";
const LPurple   = "rgb(212,56,212)";

// shape objects
const Rad = 6;
let circles = [];
class Circle {
    constructor(x, y, col) {
        this.x = x;
        this.y = y;
        this.col = col;
        this.rad = Rad;
        this.xSpd = random(8)-4;
        this.ySpd = random(8)-4;
        switch(col){
            case Green : this.dCol = DGreen; break;
            case Blue  : this.dCol = DBlue; break;
            case Red   : this.dCol = DRed; break;
            case Purple: this.dCol = DPurple; break;
            case Green : this.dCol = DGreen; break;
        }
        circles.push(this);
    }
}

function random(int){
    return Math.floor(Math.random()*int);
}

function motion(){
    var push = Rad; // Used for precise collision 
    for(i=0;i<circles.length;i++){
        var obj = circles[i];
        if ((obj.x < Math.abs(obj.xSpd)+push) || (obj.x > (wid-obj.xSpd-push))) {
            obj.xSpd *= -1;
        }
        if ((obj.y < Math.abs(obj.ySpd)+push) || (obj.y > (hei-obj.ySpd-push))) {
            obj.ySpd *= -1;
        }
        obj.x += obj.xSpd;
        obj.y += obj.ySpd;
    }
}


function makeCircles(){
    //var num = Math.floor(Math.random()*10)+5;
    var cols = [Green,Blue,Red,Purple]
    for (i=0;i<cirNum;i++){
        var chose = random(cols.length);
        var col ;
        col = cols[chose];
        let temp = new Circle(getLoc("x"),getLoc("y"),col);
    }
}
function getLoc(axis){
    // Gets the range for x and y (stays inside the canvas)
    if (axis == "x"){
        var num = wid;
    } else {
        var num = hei;
    }

    return Math.floor(Math.random()*num);
}

function setCanSize(){
    var tempX = wid; var tempY = hei; // stores the dimensions of the last window size
    wid = document.body.scrollWidth; 
    hei = window.innerHeight;
    canvas.height = hei; canvas.width = wid;
    var xDif = wid/tempX; var yDif = hei/tempY; // Ratio between old and new dimensions
    // Applies the ratio to the circles so they are "in the same place"
    if (circles.length > 0){ // Doesn't seem to work without this, not sure why though
        for(i=0;i<circles.length;i++){
            circles[i].x *= xDif;
            circles[i].y *= yDif;
        }
    }
}
function drawCircle(obj){
    ctx.beginPath();
    ctx.arc(obj.x,obj.y,obj.rad,0,2* Math.PI);
    ctx.fillStyle = obj.col;
    ctx.fill();
    ctx.strokeStyle = obj.dCol;
    ctx.stroke();
}
function drawCircles(){
    for(i=0;i<circles.length;i++){
        drawCircle(circles[i]);
    }
}
function drawLine(obj1,obj2){
    ctx.beginPath();
    ctx.moveTo(obj1.x,obj1.y);
    ctx.lineTo(obj2.x,obj2.y);
    ctx.strokeStyle = "rgba(0,0,0,0.25)";
    ctx.stroke();
}
function drawLines(){
    if (circles.length > 0){
        for(i=0;i<cirNum;i++){
            if (i == cirNum-1) {
                drawLine(circles[i],circles[0]);
            } else {
                drawLine(circles[i],circles[i+1]);
            }
        }
    }
}
function drawTo(){
    // Main draw function
    ctx.clearRect(0,0,wid,hei);
    drawLines();
    drawCircles();
}

setCanSize();
makeCircles();
drawTo();

window.addEventListener("resize",function(event){
    setCanSize();
    drawTo();
},true);

window.addEventListener("scroll",function(event){
    var scrollHei = window.scrollY;
    if (scrollHei < 920) play = true;
    else play = false;
})

//Draw to

setInterval(()=>{
    if (play == true){
    drawTo();
    motion();
    }
},1000/30);



function debugging(){
    //Debugging
    console.log(circles[4].x);
}
