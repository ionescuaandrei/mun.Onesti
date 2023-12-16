const burgerIcon = document.querySelector(".burger-icon");
const navMobile = document.querySelector(".navbar-container-mobile");

// Initially set display to "none"
navMobile.style.display = "none";

burgerIcon.addEventListener("click", () => {
  // Toggle display value between "flex" and "none"
  if (navMobile.style.display === "none") {
    navMobile.style.display = "flex";
  } else {
    navMobile.style.display = "none";
  }
});

