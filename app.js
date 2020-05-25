const hamburger = document.querySelector(".hamburger");
const navList = document.querySelector(".nav-list");
const navItems = document.querySelectorAll(".nav-items");
const header = document.querySelector("header");

// The burger menu
// hamburger.addEventListener("click", () => {
//   navList.classList.toggle("open");
// });

// The nav header
window.addEventListener("scroll", function () {
  let windowPosition = window.scrollY > 0;
  header.classList.toggle("scrolling-active", windowPosition);
});

//Main Landing text
const mainLanding = document.querySelectorAll("#main-land-text path");

for (let i = 0; i < mainLanding.length; i++) {
  console.log(`Letter ${i} is ${mainLanding[i].getTotalLength()}`);
}

// Parallax
function parallax(element, distance, speed) {
  const item = document.querySelector(element);

  item.style.transform = `translateY(${distance * speed}px)`;
}

window.addEventListener("scroll", function () {
  parallax("section.landing", window.scrollY, 1);
});

// Climbing Page, image transitions
let controller;
let detailScene;

function detailAnimation() {
  controller = new ScrollMagic.Controller();
  const slides = document.querySelectorAll(".detail-slide");
  slides.forEach((slide, index, slides) => {
    const slideTl = gsap.timeline({ defaults: { duration: 1 } });
    let nextSlide = slides.length - 1 === index ? "end" : slides[index + 1];
    const nextImg = nextSlide.querySelector("img");
    const nextVid = nextSlide.querySelector("video");
    slideTl.fromTo(slide, { opacity: 1 }, { opacity: 0 });
    slideTl.fromTo(nextSlide, { opacity: 0 }, { opacity: 1 }, "-=1");
    slideTl.fromTo(nextImg, { x: "50%" }, { x: "0%" });
    slideTl.fromTo(nextVid, { x: "50%" }, { x: "0%" });
    //Scene
    detailScene = new ScrollMagic.Scene({
      triggerElement: slide,
      duration: "100%",
      triggerHook: 0,
    })
      .setPin(slide, { pushFollowers: false })
      .setTween(slideTl)
      // .addIndicators({
      //   colorStart: "white",
      //   colorTrigger: "white",
      //   name: "detailScene"
      // })
      .addTo(controller);
  });
}

detailAnimation();

// Painting Page, the lightbox
