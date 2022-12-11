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
//     if (entry.isIntersecting) {
//       entry.target.classList.add("show");
//     }
//   });
// });

// const hiddenElements = document.querySelector(".hidden");
// hiddenElements.forEach((el) => observer.observe(el));

const animatedSection = document.querySelector(".hidden");

const animatedSectionTimeline = new ScrollTimeline({
  scrollOfsets: [
    { target: animatedSection, edge: "end", threshold: "1" },
    { target: animatedSection, edge: "start", threshold: "1" },
  ],
});

scrollTracker.animate(
  {
    opacity: 1,
    filter: blur(0),
  },
  {
    duration: 1,
    timeline: animatedSectionTimeline,
  }
);
