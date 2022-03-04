// Generate a button grid based on window size
const target = document.querySelector("#projects");
const title = "<h1>Projects</h1>";
const btnNames = [
    "Flying Fury JS","Alarm Clock","Tab Generator","Bootstrap Site","Dynamic to-do list","Virtual Keyboard","Weather App","Dynamic Landing"
    ,"Twitter Clone","Content Management","Image Gallery"];
    
let screenSize = breakPoints(); // How wide the screen is

function btnClass(name){
    switch(name){
        case "Flying Fury JS":
        case "Alarm Clock":
        case "Tab Generator":
        case "Dynamic to-do list":
            return " btnProg"; // in progress

        default: return " btnNone"; // no progress
    }
}

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
    let className = "";
    for (i=0;i<hei;i++){ // New Row
            out += "<div class='links'>";
            for(j=0;j<wid;j++){ // Items on row
                int ++;
                if (btnNames[int] != undefined){
                    className = btnClass(btnNames[int]);

                    out += `<button class="linkBtn ${className}">${btnNames[int]}</button>`;
                    if ((j != wid-1) && (int != len-1)){
                        out += "<span class='vr'></span>";
                    }
                } else j = wid; // Finish the loop
            }
            out += "</div>";
        }
        target.innerHTML += out;
}

function addLink(){
    const domTarget = document.querySelectorAll("button");
    for (i=0;i<10;i++){
        let tar = domTarget[i];
        tar.addEventListener("click",()=>{
            switch(tar.innerHTML){
                case "Flying Fury JS": window.location.href="flyingFury.html"; break;
                case "Dynamic to-do list": window.location.href="https://malcoball.github.io/todoList/"; break;
                case "Alarm Clock": window.location.href="https://malcoball.github.io/alarmClock/"; break;
                case "Tab Generator": window.location.href="https://malcoball.github.io/tabGenerator/"; break;
                default : alert("button not set!"); break;
            }
        })
    }
}



function refresh(){
    resetTarget();
    makeButtons();
    addLink();
}
window.addEventListener("resize",()=>{
    let temp = breakPoints();
    if (temp != screenSize){ // At a different break point
        screenSize = temp;
        makeButtons();
    }
})
refresh();