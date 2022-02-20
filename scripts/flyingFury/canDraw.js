/*

let sprites = [];
const plane = new Image();
plane.src = "Images/FF/pSpr1.png";


class Sprite {
    constructor(){
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 20 + 50;
        this.xSpd = Math.random() * 3 + 1;
        this.ySpd = Math.random() * 3 + 1;
        this.angle = Math.random() * 360;
        this.spin = Math.random() < 0.5 ? -1 : 1;
    }
    make(){
        sprites.push(this);
    }
    draw(){
        // draw state
        ctx.save();                                                         // Saves everything about the canvas
        ctx.translate(this.x,this.y);                                       // Set the rotation point to the sprite
        ctx.rotate(this.angle * Math.PI/360);                               // Rotates to this.angle
        ctx.drawImage(plane,-this.size/2,-this.size/2,this.size,this.size); // Draws sprite
        ctx.restore();                                                      // Resets the canvas

    }
    update(){
        // behaviour state
        this.x += this.xSpd;
        this.y += this.ySpd;
    }
}

new Sprite().make();

function animate(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    for (i=0;i<sprites.length;i++){
        sprites[i].draw();
        sprites[i].update();  
    }
    requestAnimationFrame(animate); // Recursion basically
}

animate();
*/


function draw(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    for(i=0;i<Objects.length;i++){
        Objects[i].draw();
        Objects[i].step();
    }
    requestAnimationFrame(draw); // Recursion
}
draw();