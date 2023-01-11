/**********************************Scroll Tracker*******************************/

document.addEventListener("DOMContentLoaded", function () {
  const progressBarInner = document.querySelector(".scroll-bar-inner");

  window.addEventListener("scroll", function () {
    let h = document.documentElement;

    let st = h.scrollTop || document.body.scrollTop;
    let sh = h.scrollHeight || document.body.scrollHeight;

    let percent = (st / (sh - h.clientHeight)) * 100;
    let roundedPercent = Math.round(percent);

    progressBarInner.style.width = percent + "%";
    progressBarInner.innerHTML = roundedPercent + "%";
  });
});

/*****************************Menu button**********************************/

document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector(".menu__button");
  const closeButton = document.querySelector(".close__button");
  const navLinks = document.querySelector(".nav__links--outer");
  //const navLink = document.querySelectorAll(".nav__link");
  const aboutLink = document.querySelector(".about__link");

  menuButton.addEventListener("click", () => {
    navLinks.classList.add("nav__links--outer--open");
    closeButton.classList.remove("invisible");
    menuButton.classList.add("invisible");
    //console.log(document.querySelectorAll(".nav__link"));
    document.querySelectorAll(".nav__link--outer").forEach((element) => {
      element.classList.remove("hidden");
      element.classList.add("visible");
    });
  });

  closeButton.addEventListener("click", () => {
    navLinks.classList.remove("nav__links--outer--open");
    closeButton.classList.add("invisible");
    menuButton.classList.remove("invisible");
    document.querySelectorAll(".nav__link--outer").forEach((element) => {
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

/*****************************Active link**********************************/

let curentLocation = location.href;
let activeLink = document.getElementsByClassName("inner-link");
let dot = activeLink.nextElementSibling;
let activeLinkLenght = activeLink.length;

for (let i = 0; i < activeLinkLenght; i++) {
  if (activeLink[i].href === curentLocation) {
    console.log(activeLink[i].dot);
    activeLink[i].dot.classList = "active-dot--current";
  }
}
