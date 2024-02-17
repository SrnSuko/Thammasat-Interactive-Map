const menu = document.getElementById("menu");

menu.addEventListener("mouseover", (event) => {
  const menuItem = event.target.closest(".menu-item");
  if (menuItem) {
    const index = Array.from(menu.querySelectorAll(".menu-item")).indexOf(menuItem);
    if (index !== -1) {
      menu.dataset.activeIndex = index;
    }
  }
});
