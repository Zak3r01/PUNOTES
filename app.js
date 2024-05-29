const likeButtons = document.querySelectorAll(".like-btn");

likeButtons.forEach((button) => {
  button.addEventListener("click", function () {
    alert("Note Liked!");
  });
});
function toggleMenu() {
  var menu = document.querySelector(".menu");
  var menuToggle = document.querySelector(".menu-toggle");
  menu.classList.toggle("active");
  if (menu.classList.contains("active")) {
    menuToggle.textContent = "✕";
  } else {
    menuToggle.textContent = "☰";
  }
}
