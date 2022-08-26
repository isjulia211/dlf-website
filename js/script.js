// Swiper js
var swiper = new Swiper(".slide-content", {
  slidesPerView: 5,
  spaceBetween: 25,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 3,
    },
    950: {
      slidesPerView: 5,
    },
  },
});

//Nav open and close
const body = document.querySelector("body"),
  navMenu = body.querySelector(".menu-content");
const menuBtn = document.querySelector(".menu-btn");
let menuOpen = false;
menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    menuOpen = true;
    console.log(navMenu);
    navMenu.classList.add("open");
    body.style.overflowY = "hidden";
  } else {
    menuBtn.classList.remove("open");
    menuOpen = false;
    navMenu.classList.remove("open");
    body.style.overflowY = "scroll";
  }
});

// Change header bg color
window.addEventListener("scroll", () => {
  const scrollY = window.pageYOffset;

  if (scrollY > 5) {
    document.querySelector("header").classList.add("header-active");
  } else {
    document.querySelector("header").classList.remove("header-active");
  }

  // Scroll up button
  const scrollUpBtn = document.querySelector(".scrollUp-btn");

  if (scrollY > 250) {
    scrollUpBtn.classList.add("scrollUpBtn-active");
  } else {
    scrollUpBtn.classList.remove("scrollUpBtn-active");
  }

  // Nav link indicator

  const sections = document.querySelectorAll("section[id]");
  sections.forEach((section) => {
    const sectionHeight = section.offsetHeight,
      sectionTop = section.offsetTop - 100;

    let navId = document.querySelector(
      `.menu-content a[href='#${section.id}']`
    );
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      navId.classList.add("active-navlink");
    } else {
      navId.classList.remove("active-navlink");
    }

    navId.addEventListener("click", () => {
      navMenu.classList.remove("open");
      body.style.overflowY = "scroll";
    });
  });
});

// Scroll Reveal Animation
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
});

sr.reveal(
  `.section-title, .section-subtitle, .section-description, .brand-image, .tesitmonial, .newsletter 
.logo-content, .newsletter-inputBox, .newsletter-mediaIcon, .footer-content, .footer-links`,
  { interval: 100 }
);

sr.reveal(`.about-imageContent, .menu-items`, { origin: "left" });
sr.reveal(`.about-details, .time-table`, { origin: "right" });
