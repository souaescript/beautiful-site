// Occasional “tear” bursts for extra glitch chaos
const el = document.querySelector(".glitch");
let armed = false;

function burst() {
  if (armed) return;
  armed = true;

  el.style.animation = "tear1 0.9s steps(2,end) 1";
  el.querySelector("span").style.animation = "tear2 0.9s steps(2,end) 1";
  el.style.filter = "saturate(1.8) contrast(1.15)";

  setTimeout(() => {
    el.style.animation = "";
    el.querySelector("span").style.animation = "";
    el.style.filter = "saturate(1.4)";
    armed = false;
  }, 950);
}

// Random bursts every ~1–4 seconds
(function loop(){
  const t = 1000 + Math.random() * 3000;
  setTimeout(() => { burst(); loop(); }, t);
})();

// Click/tap to trigger a burst
window.addEventListener("pointerdown", burst, { passive: true });
