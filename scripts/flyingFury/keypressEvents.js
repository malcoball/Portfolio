let keypress = [
    null, // up
    null, // down
    null, // left 
    null, // right
    null, // gun
    null, // rocket
];
function getKey(){
    let int;
    switch(e.key){
        case "w" :      int = 0; break;
        case "s" :      int = 1; break;
        case "a" :      int = 2; break;
        case "d" :      int = 3; break;
        case "space" :  int = 4; break;
        case "lShift" : int = 5; break;
        default: console.log(e.key)
    }
    return int;
}
document.addEventListener("keypress",(e)=>{
    int = getKey();
    console.log(int);
})
document.addEventListener("keyup",()=>{
    keypress = [];
})

function show(){
    document.querySelector("h1").innerHTML = `${keypress}`;
    console.log(keypress);
    requestAnimationFrame(show);
}
show();