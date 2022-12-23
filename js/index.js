/**********************************Scroll Tracker*******************************/

// const scrollTracker = document.querySelector(".scroll-tracker");

// const scrollTrackingTimeline = new ScrollTimeline({
//   source: document.scrollingElement,
//   orientation: "block",
//   scrollOfsets: [CSS.percent(0), CSS.percent(100)],
// });

// scrollTracker.animate(
//   {
//     transform: ["scaleX(0)", "scaleY(1)"],
//   },
//   {
//     duration: 1,
//     timeline: scrollTrackingTimeline,
//   }
// );

/*****************************Menu button**********************************/

document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector(".menu__button");
  const closeButton = document.querySelector(".close__button");
  const navLinks = document.querySelector(".nav__links");
  const navLink = document.querySelectorAll(".nav__link");
  const aboutLink = document.querySelector(".about__link");

  menuButton.addEventListener("click", () => {
    navLinks.classList.add("nav__links--open");
    closeButton.classList.remove("invisible");
    menuButton.classList.add("invisible");
    //console.log(document.querySelectorAll(".nav__link"));
    document.querySelectorAll(".nav__link").forEach((element) => {
      element.classList.remove("hidden");
      element.classList.add("visible");
    });
  });

  closeButton.addEventListener("click", () => {
    navLinks.classList.remove("nav__links--open");
    closeButton.classList.add("invisible");
    menuButton.classList.remove("invisible");
    document.querySelectorAll(".nav__link").forEach((element) => {
      element.classList.remove("visible");
      element.classList.add("hidden");
    });
    // navLink.classList.remove("visible");
    // navLink.classList.add("hidden");
  });

  aboutLink.addEventListener("click", () => {
    navLinks.classList.remove("nav__links--open");
    closeButton.classList.add("invisible");
    menuButton.classList.remove("invisible");
  });
});
