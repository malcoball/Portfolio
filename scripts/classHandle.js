

document.addEventListener("scroll",()=>{
// DOM elements
const btnTarget = document.querySelectorAll(".links");
    let screenBtm = window.innerHeight;
    for (i=0;i<btnTarget.length;i++){
        let btnHei = btnTarget[i].getBoundingClientRect().top;
        if (btnHei < screenBtm-64) {
            // Onscreen
            btnTarget[i].className = "links";
        } else {
            btnTarget[i].className = "links linksOff";
        }
    }
})