const toggleButton = document.getElementsByClassName("open")[0];
const navBarLinks = document.getElementsByClassName("navlist")[0];

toggleButton.addEventListener("click", () => {
  navBarLinks.classList.toggle("active");
});
