function draw(){
    // Clear previous frame
    ctx.clearRect(0,0,canvas.width,canvas.height);

    // Draw the amount of instances 
    const target = document.querySelector("#hiScore");
    target.innerHTML = `<h5>${Objects.length}</h5><ul>`;

    // Main events
    BlockMap.draw();
    Objects.forEach(object => object.draw());
    Objects.forEach(object => object.step());
    Objects = Objects.filter(object => !object.destroy); // Deletes instances


    requestAnimationFrame(draw); // Recursion
}
draw();