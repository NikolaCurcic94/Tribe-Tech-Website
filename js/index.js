import "https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js";

/**********************************Scroll Tracker*******************************/

const scrollTracker = document.querySelector(".scroll-tracker");

const scrollTrackingTimeline = new ScrollTimeline({
  source: document.scrollingElement,
  orientation: "block",
  scrollOfsets: [CSS.percent(0), CSS.percent(100)],
});

scrollTracker.animate(
  {
    transform: ["scaleX(0)", "scaleY(1)"],
  },
  {
    duration: 1,
    timeline: scrollTrackingTimeline,
  }
);

/**********************************Sections Animation*******************************/

// const observer = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     console.log(entry);
//     if (entry.isIntersecting) {
//       entry.target.classList.add("show");
//     }
//   });
// });

// const hiddenElements = document.querySelector(".hidden");
// hiddenElements.forEach((el) => observer.observe(el));

/*****************************Menu button**********************************/

const menuButton = document.querySelector(".menu__button");
const navLinks = document.querySelector(".nav__links");

menuButton.addEventListener("click", () => {
  navLinks.classList.add("nav__links--open");
});

// hamburger.addEventListener("click", () => {
//   if (!menuOpen) {
//     hamburger.classList.add("open");
//     menuOpen = true;
//     navLinks.classList.add("nav__links--open");
//   } else {
//     hamburger.classList.remove("open");
//     menuOpen = false;
//     navLinks.classList.remove("nav__links--open");
//   }
// });
