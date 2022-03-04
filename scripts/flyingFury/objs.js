let Objects = []
// Make generic obj
class object {
    constructor(x, y, xSpd, ySpd,Spd, angle, size, dmg, health,spr,type) {
        this.x = x
        this.y = y
        this.xSpd = xSpd
        this.ySpd = ySpd
        this.Spd = Spd // Max speed
        this.angle = angle
        this.size = size
        this.dmg = dmg
        this.health = health
        this.spr = spr
        this.type = type
        this.instance = Objects.length
        Objects.push(this)
        this.destroy = false // When true, gets deleted new frame
        this.gridY = 0;
        this.gridX = 0;
    }

    draw(){ // draw state
        ctx.save();                                                         // Saves everything about the canvas
        ctx.translate(this.x,this.y);                                       // Set the rotation point to the sprite
        ctx.rotate(this.angle * Math.PI/360);                               // Rotates to this.angle
        ctx.drawImage(this.spr,-this.size/2,-this.size/2,this.size,this.size); // Draws sprite
        ctx.restore();                                                      // Resets the canvas
    }
    step(){
       switch(this.type){
            case "player": 
                // Accel
                if (keypress[0] == true){ // Up
                    if (this.ySpd > -this.Spd){
                        this.ySpd --;
                    }
                } else 
                if (keypress[1] == true){ // Dwn
                    if (this.ySpd < this.Spd){
                        this.ySpd ++;
                    }
                }
                if (keypress[2] == true){ // Up
                    if (this.xSpd > -this.Spd){
                        this.xSpd --;
                    }
                } else 
                if (keypress[3] == true){ // Dwn
                    if (this.xSpd < this.Spd){
                        this.xSpd ++;
                    }
                }

                // Deccel
                if (keypress[0] == false){
                    if (this.ySpd < 0){
                        this.ySpd ++;
                    }
                }
                if (keypress[1] == false){
                    if (this.ySpd > 0){
                        this.ySpd --;
                    }
                }
                if (keypress[2] == false){
                    if (this.xSpd < 0){
                        this.xSpd ++;
                    }
                }
                if (keypress[3] == false){
                    if (this.xSpd > 0){
                        this.xSpd --;
                    }
                }
                if (keypress[4] == true){
                    makeObj("bullet1",this.x,this.y);
                }
            break;
            case "bullet": 
                if ((this.x > canvas.width) || (this.x < 0) || (this.y < 0) || (this.y > canvas.height)){
                    // Destroy the object once offscreen
                    this.destroy = true;
                }
            break;
            case "enemy1":
                //this.xSpd = -this.Spd;
            break;
        }
       
        // Actually move the object
        if (this.xSpd != 0){
            this.x += this.xSpd;

            // Check if grid is different
            let temp = Math.floor(this.x/cellSize);
            if (temp != this.gridX){
                // Remove from global grid
                BlockMap.grid[this.gridX] = BlockMap.grid[this.gridX].filter(object => this.instance)
                // Add to global grid
                this.gridX = temp;
                BlockMap.grid[this.gridX].push(this.instance);
            }
        }
        if (this.ySpd != 0){
            this.y += this.ySpd;
        }
    }
    }
makeObj("player");
makeObj("enemy1");
function makeObj(obj,x,y){
    switch(obj){
        case "player" : new object(32,canvas.height/2,0,0,6,0,64,1,4,sPl00,"player"); break; // Player
        case "enemy1" : new object(canvas.width-64,canvas.height/2,0,0,6,0,64,1,1,sEn00,"enemy1"); break; // Enemy
        case "bullet1": new object(x,y,10,0,10,0,8,1,1,sBl00,"bullet"); break; // Player bullet
    }
}

function gridLoc(coord){
    return Math.floor(coord/cellSize);
}