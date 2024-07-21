let cursor = new MouseFollower({
  container: ".container",
  speed: 0.6,
});

// For disabling inspect starts
document.addEventListener('contextmenu', (e)=>{
  e.preventDefault();
})

document.addEventListener("keydown", (e) => {
  if (e.key === "F12" || (e.ctrlKey && e.shiftKey && e.key === "C")) {
    e.preventDefault();
  }
});
// For disabling inspect ends

// For cursor control in differnt screens starts
function initializeCubertoCursor() {
  if (window.innerWidth < 600) {
    if (cursor) {
      cursor.destroy();
      cursor = null;  // Reset cursor to null to indicate it has been destroyed
    }
  } else {
    if (!cursor) {
      cursor = new MouseFollower({
        container: ".container",
        speed: 0.6,
      });
    }
  }
}

initializeCubertoCursor();

// Listen for window resize to enable/disable Cuberto cursor accordingly
window.addEventListener('resize', initializeCubertoCursor);

// For cursor control in differnt screens starts ends

gsap.registerPlugin("ScrollTrigger");
const scroller = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
});

gsap.registerPlugin(ScrollTrigger);

scroller.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length
      ? scroller.scrollTo(value, 0, 0)
      : scroller.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      left: 0,
      top: 0,
      width: window.innerWidth,
      height: window.innerHeight,
    };
  },
});

ScrollTrigger.create({
  trigger: "#secondpage",
  scroller: "#main",
  start: "top+=80% 15%",
  end: "bottom-=10% 10%",
  animation: gsap.to("#photuin", { backgroundSize: "120%" }),
  scrub: 2,
});

ScrollTrigger.create({
  trigger: "#secondpage",
  scroller: "#main",
  start: "top+=90% 10%",
  end: "bottom-=40% 50%",
  animation: gsap.to("#secondpara", { scale: "1.5" }),
  scrub: 2,
});

// cursor customization starts
document.querySelector("#o").addEventListener("mouseover", function () {
  document.querySelector("#o").style.transform = "scale(2)";
  cursor.hide();
});

document.querySelector("#o").addEventListener("mouseout", function () {
  document.querySelector("#o").style.transform = "scale(1)";
  cursor.show();
});

document
  .querySelector("#resume-head")
  .addEventListener("mouseover", function () {
    document.querySelector("#resume-head").style.opacity = "0";
    cursor.setText("Download Resume");
  });

document
  .querySelector("#resume-head")
  .addEventListener("mouseout", function () {
    document.querySelector("#resume-head").style.opacity = "1";
    cursor.removeText();
  });

document.querySelector("#github").addEventListener("mouseover", function () {
  document.querySelector("#github").style.opacity = "0";
  cursor.setText("Visit me");
});

document.querySelector("#github").addEventListener("mouseout", function () {
  document.querySelector("#github").style.opacity = "1";
  cursor.removeText();
});
// cursor customization ends


// project overlay starts
const image = document.querySelectorAll(".image");

image.forEach((elem) => {
  const thumbnail = elem.querySelector(".project-image");
  const overlay = elem.querySelector(".overlay");

  thumbnail.addEventListener("mouseover", function () {
    cursor.setText("About me");
  });

  thumbnail.addEventListener("mouseout", function () {
    cursor.removeText();
  });

  overlay.addEventListener("mouseover", function () {
    cursor.setText('Close me');
  });

  thumbnail.addEventListener("click", function () {
    overlay.classList.remove("display");
  });

  overlay.addEventListener("click", function () {
    overlay.classList.add("display");
  });
});
// project overlay ends

// menu visibility starts
document.querySelector(".menu").addEventListener('click',function(){
  document.querySelector(".menu-box").style.display="initial";
})

document.querySelector(".menu-close").addEventListener('click',function(){
  document.querySelector(".menu-box").style.display="none";
})

// menu visibility end


ScrollTrigger.addEventListener("refresh", () => scroller.update());

ScrollTrigger.refresh();
