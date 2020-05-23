const hamburgerMenu = document.querySelector(".hamburger-menu");
const mainNav = document.querySelector(".main-nav");

hamburgerMenu.addEventListener("click", function () {
  mainNav.classList.toggle("open");
});

gsap.fromTo(".hero-clipped", { scaleX: 0 }, { duration: 1, scaleX: 1 });
gsap.fromTo(
  ".logo",
  { x: -200, opacity: 0 },
  { duration: 1, delay: 0.5, x: 0, opacity: 1 }
);

gsap.fromTo(
  ".hamburger-menu",
  { x: 200, opacity: 0 },
  { duration: 1, delay: 0.8, x: 0, opacity: 1 }
);

gsap.fromTo(
  ".hero-textbox",
  { yPercent: 40, opacity: 0 },
  { duration: 1, delay: 1.3, yPercent: -50, opacity: 1 }
);
