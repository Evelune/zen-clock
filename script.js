const ele = document.querySelector(".clock p");
const btn = document.querySelector("#button");
setInterval(() => {
  const date = new Date();
  const inject = date.toLocaleTimeString("en-IN", {
    timeZone: "Asia/Kolkata",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });
  ele.innerHTML = inject;
}, 1000);



// To check and set the button text based on fullScreenElement Status
btn.addEventListener("click",()=>{
    if(document.fullscreenElement){
        document.exitFullscreen();
        btn.innerHTML = "View Fullscreen"
    }
    else{
        document.documentElement.requestFullscreen();
        btn.innerHTML = "Exit Fullscreen"
    }
})

// Here fullscreenchange is the Event activity whenever the fullscreenchange state change, this eventlisten run
document.addEventListener("fullscreenchange",()=>{
    btn.innerText = document.fullscreenElement? "Exit Fullscreen" : "View Fullscreen";
});






