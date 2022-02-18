// Generate a button grid based on window size
const target = document.querySelector("#projects");
const title = "<h1>Projects</h1>";
const btnNames = [
    "Game","Virtual Keyboard","Weather App","Dynamic Landing","Twitter Clone",
    "Content Management","Image Gallery","Alarm Clock","Tab Generator","Dynamic to-do list"
];
let screenSize = breakPoints(); // How wide the screen is

function resetTarget(){
    target.innerHTML = title;
}
function breakPoints(){ 
    // How long the rows should be
    let wid = window.innerWidth;
    if (wid >= 1200){
        return 5;
    } else 
    if (wid >= 992){
        return 4;
    } else 
    if (wid >= 768){
        return 3;
    } else
    if (wid >= 576){
        return 2;
    } else {
        return 1;
    }
}

function makeButtons(){
    target.innerHTML = "";
    var len = btnNames.length;
    var wid = breakPoints(); // How many buttons per row/ should take the screen width and decide. Not sure how this looks yet
    var hei = Math.ceil(len / wid); // Rows
    var out = "<h1>Projects</h1>";
    var int = -1;
    for (i=0;i<hei;i++){ // New Row
            out += "<div class='links'>";
            for(j=0;j<wid;j++){ // Items on row
                int ++;
                if (btnNames[int] != undefined){
                    out += `<button class="linkBtn">${btnNames[int]}</button>`;
                    if ((j != wid-1) && (int != len-1)){
                        out += "<span class='vr'></span>";
                    }
                } else j = wid; // Finish the loop
            }
            out += "</div>";
        }
        target.innerHTML += out;
}


function refresh(){
    resetTarget();
    makeButtons();
}
window.addEventListener("resize",()=>{
    let temp = breakPoints();
    if (temp != screenSize){ // At a different break point
        screenSize = temp;
        makeButtons();
    }
})
document.querySelector("button").addEventListener("click",()=>{
    refresh();
})
refresh();