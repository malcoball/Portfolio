const Objects = []
// Make generic obj
class object {
    constructor(x, y, xSpd, ySpd, angle, size, dmg, health,spr,player) {
        this.x = x,
        this.y = y,
        this.xSpd = xSpd,
        this.ySpd = ySpd,
        this.angle = angle,
        this.size = size,
        this.dmg = dmg,
        this.health = health,
        this.spr = spr,
        this.player = player,
        Objects.push(this);
    }

    draw(){ // draw state
        ctx.save();                                                         // Saves everything about the canvas
        ctx.translate(this.x,this.y);                                       // Set the rotation point to the sprite
        ctx.rotate(this.angle * Math.PI/360);                               // Rotates to this.angle
        ctx.drawImage(this.spr,-this.size/2,-this.size/2,this.size,this.size); // Draws sprite
        ctx.restore();                                                      // Resets the canvas
    }
    step(){
        if (this.player == true){// Only fires if the object is controlled by the player
            if (keypress == "w"){
                this.y -= this.ySpd;
            } else
            if (keypress == "s"){
                this.y += this.ySpd;
            }
            if (keypress == "a"){
                this.x -= this.xSpd;
            } else
            if (keypress == "d"){
                this.x += this.xSpd;
            } 
        }
    }

}

new object(20,20,2,2,0,64,1,1,sPl00,true); // Player object