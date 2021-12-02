const hamburgerMenu = document.querySelector(".hamburger");
const links = document.querySelector(".links");
const sectionLinks = document.querySelectorAll(".seclink");

hamburgerMenu.addEventListener("click", () => {
  hamburgerMenu.classList.toggle("active");
  //   console.log(106);
});

sectionLinks.forEach((n) =>
  n.addEventListener("click", () => {
    hamburgerMenu.classList.remove("active");
    links.classList.remove("active");
  })
);
