const Objects = []
// Make generic obj
class object {
    constructor(x, y, xSpd, ySpd,Spd, angle, size, dmg, health,spr,player) {
        this.x = x,
        this.y = y,
        this.xSpd = xSpd,
        this.ySpd = ySpd,
        this.Spd = Spd, // Max speed
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
            // Acceleration
            if (keypress[0] == true){ // Up
                if (this.ySpd > -this.Spd){
                    this.ySpd --;
                }
            } else
            if (keypress[1] == true){ // Down
                if (this.ySpd < this.Spd){
                    this.ySpd ++;
                }
            }
            if (keypress[2] == true){ // Left
                if (this.xSpd > -this.Spd){
                    this.xSpd --;
                }
            } else
            if (keypress[3] == true){ // Right
                if (this.xSpd < this.Spd){
                    this.xSpd ++;
                }
            } 

            // Decceleration
            if (keypress[0] == false) { // Up
                if (this.ySpd < 0){
                    this.ySpd ++;
                } 
            }

            if (keypress[1] == false){ // Down
                if (this.ySpd > 0){
                    this.ySpd --;
                }
            }

            if (keypress[2] == false) { // Up
                if (this.xSpd < 0){
                    this.xSpd ++;
                } 
            }

            if (keypress[3] == false){ // Down
                if (this.xSpd > 0){
                    this.xSpd --;
                }
            }
            if (this.y > canvas.height+64) this.y = -32;
            if (this.y < -64) this.y = canvas.height+32;
            this.x += this.xSpd;
            this.y += this.ySpd;
        }
    }

}


new object(20,20,0,0,6,0,64,1,1,sPl00,true); // Player object