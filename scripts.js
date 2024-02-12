function scrollToTarget(target) {
  const element = document.querySelector(target);
  if (element) {
    window.scrollTo({
      top: element.offsetTop,
      behavior: "smooth",
    });
  }
}

const menuItems = document.querySelectorAll(".link-menu");
menuItems.forEach((item) => {
  item.addEventListener("click", function (event) {
    event.preventDefault(); 
    const target = this.getAttribute("href"); 
    scrollToTarget(target); 
  });
});
