const hamburger = document.querySelector(".hamburger");
const navItems = document.querySelector(".navbar-items");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navItems.classList.toggle("active");
});

document.querySelectorAll(".navlink").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navItems.classList.remove("active");
  })
);