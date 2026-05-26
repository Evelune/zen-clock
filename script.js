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

btn.addEventListener("click", () => {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
    btn.innerText = "Exit Fullscreen";
  } else {
    document.exitFullscreen();
    btn.innerText = "View Fullscreen";
  }
});

document.addEventListener("fullscreenchange", () => {
  btn.innerText = document.fullscreenElement
    ? "Exit Fullscreen"
    : "View Fullscreen";
});
