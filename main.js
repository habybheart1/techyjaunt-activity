const menu = document.getElementById("nav-menu");
const toggleButton = document.querySelector(".menu-toggle");
const toggleIcon = toggleButton.querySelector("i");
const menuItem = document.querySelectorAll("#nav-menu a");
function toggleMenu() {
  menu.classList.toggle("show");
  const expanded = menu.classList.contains("show");
  toggleIcon.classList.toggle("fa-times", expanded);
  toggleIcon.className = expanded ? "fas fa-times" : "fas fa-bars";
}
