import "https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js";

/**********************************Scroll Tracker*******************************/

const scrollTracker = document.querySelector(".scroll-tracker");

const scrollTrackingTimeline = new ScrollTimeline({
  source: document.scrollingElement,
  orientation: "block",
  scrollOfsers: [CSS.percent(0), CSS.percent(100)],
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

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

const hiddenElements = document.querySelector(".hidden");
hiddenElements.forEach((el) => observer.observe(el));
