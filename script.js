const cursor = new MouseFollower({
  container: ".container",
  speed: 0.6,
});

const thumbnailDiv = document.querySelector(".project-image");
const overlayDiv = document.querySelector(".overlay");

document.addEventListener("keydown", (e) => {
  if (e.key === "F12" || (e.ctrlKey && e.shiftKey && e.key === "C")) {
    e.preventDefault();
  }
});

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

// let box = document.querySelector("#one");

// document.querySelector("#one").addEventListener("click", function () {
//   document.querySelector("#one").style.transform = "scale(2)";
//   document.querySelector("#one").style.transform =
//     "translate(-50%,-50%) scale(1.5)";
// });

// document.querySelector("#two").addEventListener("click", function () {
//   document.querySelector("#two").style.transform = "scale(2)";
//   document.querySelector("#two").style.transform =
//     "translate(-50%,-50%) scale(1.5)";
// });

// document.querySelector("#three").addEventListener("click", function () {
//   document.querySelector("#three").style.transform = "scale(2)";
//   document.querySelector("#three").style.transform =
//     "translate(-50%,-50%) scale(1.5)";
// });

// document.querySelector("#four").addEventListener("click", function () {
//   document.querySelector("#four").style.transform = "scale(2)";
//   document.querySelector("#four").style.transform =
//     "translate(-50%,-50%) scale(1.5)";
// });

// document.querySelector("#five").addEventListener("click", function () {
//   document.querySelector("#five").style.transform = "scale(2)";
//   document.querySelector("#five").style.transform =
//     "translate(-50%,-50%) scale(1.5)";
// });

// var f = true;
// let images = document.querySelectorAll(".images-container img");
// images.forEach(function (val) {
//   val.addEventListener("click", function () {
//     // val.style.transform = "translate(20%,-10%) scale(1.3)";
//     // console.log("shdj");
//   });
// });

ScrollTrigger.addEventListener("refresh", () => scroller.update());

ScrollTrigger.refresh();
