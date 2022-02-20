//Set up the canvas
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
function setupCanSize(hei){
    canvas.height = hei;
    canvas.width = Math.floor(hei / 0.75);
}
setupCanSize(700);