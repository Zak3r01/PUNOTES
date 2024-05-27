const likeButtons = document.querySelectorAll(".like-btn");

likeButtons.forEach((button) => {
  button.addEventListener("click", function () {
    alert("Note Liked!");
  });
});
function toggleMenu() {
  var menu = document.querySelector(".menu");
  menu.classList.toggle("active");
}
