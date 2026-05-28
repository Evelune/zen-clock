const ele = document.querySelector(".clock p");
const btn = document.querySelector("#viewScreen");
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
btn.addEventListener("click", () => {
  if (document.fullscreenElement) {
    document.exitFullscreen();
    btn.innerHTML = "View Fullscreen";
  } else {
    document.documentElement.requestFullscreen();
    btn.innerHTML = "Exit Fullscreen";
  }
});

// Here fullscreenchange is the Event activity whenever the fullscreenchange state change, this eventlisten run
document.addEventListener("fullscreenchange", () => {
  ((btn.innerText = document.fullscreenElement
    ? "Exit Fullscreen"
    : "View Fullscreen"),
    (btn.style.opacity = "1"),
    (theme.style.opacity = "1"));
});

let timer;
function resetTimer() {
  if (document.fullscreenElement) {
    clearTimeout(timer);

    // show button while moving
    btn.style.opacity = "1";
    theme.style.opacity = "1";

    timer = setTimeout(() => {
      btn.style.opacity = "0";
      theme.style.opacity = "0";
    }, 3000);
  }
}

// detect cursor movement
document.addEventListener("mousemove", resetTimer);

// initialize timer
resetTimer();

// Now let's add the theme change option which consist of dark, and system theme
const theme = document.querySelector("#theme");
theme.addEventListener("change", () => {
  setTheme(theme.value);
});
function setTheme(value) {
  if (value === "darkTheme") {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }
}
