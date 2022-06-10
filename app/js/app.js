document.addEventListener("DOMContentLoaded", function () {
  const burgerBtn = document.querySelector("#burgerBtn");
  const navHeader = document.querySelector("#navHeader");
  burgerBtn.addEventListener("click", (evt) => {
    evt.preventDefault();
    burgerBtn.classList.toggle("burger--active");

    navHeader.classList.toggle("nav--active");
  });

  const navLinks = document.querySelectorAll(".nav__link");
  navLinks.forEach((navLink) => {
    navLink.addEventListener("click", () => {
      burgerBtn.classList.remove("burger--active");
      navHeader.classList.remove("nav--active");
    });
  });
});
