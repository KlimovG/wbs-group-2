// Alert on share button
const shareButton = document.querySelectorAll('.section__share-btn');

shareButton.forEach(btn => btn.addEventListener("click", () => alert(window.location.href)))


//Adaptive menu
const menuContainer = document.querySelector(".header__nav"),
  header = document.querySelector('.header'),
  closeBtn = document.querySelector(".header__close"),
  openBtn = document.querySelector(".header__open"),
  menuOpen = () => {
    menuContainer.classList.add("active")
    header.classList.add('active')
  },
  menuClose = () => {
    menuContainer.classList.remove("active")
    header.classList.remove('active')
  };


openBtn.addEventListener("click", () => menuOpen());
closeBtn.addEventListener("click", () => menuClose());
header.addEventListener("click", (e) => {
  const targetClass = e.target.className;
  if (targetClass == "header active") {
    menuClose();
  }
})