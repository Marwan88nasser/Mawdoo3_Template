// create sticky navbar
let navbar = document.querySelector(".main-nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > navbar.offsetHeight - 40) {
    navbar.classList.add("sticky-nav");
  } else {
    navbar.classList.remove("sticky-nav");
  }
});


// scroll to top btn 
const upBtn = document.getElementById("up-btn");
window.addEventListener("scroll", () => window.scrollY >= 300 ? upBtn.classList.add("show") : upBtn.classList.remove("show"));
upBtn.addEventListener("click", () => window.scrollTo({ top: 0, left: 0, behavior: "smooth" }))