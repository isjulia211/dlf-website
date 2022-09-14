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
