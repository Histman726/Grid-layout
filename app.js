let menu = document.querySelector("nav ul")
let hamburger = document.querySelector(".mobile")

hamburger.addEventListener("click", function() {
  menu.classList.toggle("show")
})