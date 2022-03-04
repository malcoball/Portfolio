const cellSize = 64;

const BlockMap = {
    grid : [],
    width :  Math.ceil(canvas.width / cellSize),
    height : Math.ceil(canvas.height / cellSize),
    outCol : "#144e14",
    filCol : "#008000",
    draw(fill){
        // Just shows the grid
        ctx.beginPath();

        // Setup color
        ctx.fillStyle = this.filCol;
        ctx.strokeStyle = this.outCol;

        for (i=0;i<this.grid.length;i++){
            // Outline
            for (j=0;j<this.grid[i].length;j++){
                ctx.rect(cellSize*i,cellSize*j,cellSize*(i+1),cellSize*(j+1));
                // If there's something inside
                // if (this.grid[i].length > 0) {
                //     ctx.fillRect(cellSize*i,0,cellSize,cellSize);
                // }
        }
            
        }
        ctx.stroke();
    },
    makeGrid(){
        // Make 1d array, then covert to 2d
        for (i=0;i<this.width;i++){
            this.grid.push([]);
            for(j=0;j<this.height;j++){
                this.grid[i].push([]);
            }
        }
        

    }
}

BlockMap.makeGrid();