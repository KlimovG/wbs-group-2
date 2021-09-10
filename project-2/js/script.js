// Alert on share button
const shareButton = document.querySelectorAll('.section__share-btn');

shareButton.forEach(btn => btn.addEventListener("click", () => alert(window.location.href)))

const menuContainer = document.querySelector(".header__nav"),
  header = document.querySelector('.header'),
  closeBtn = document.querySelector(".header__close"),
  openBtn = document.querySelector(".header__open"),
  menuOpen = () => {
    openBtn.addEventListener("click", () => {
      menuContainer.classList.add("active")
      header.classList.add('active')
    })
  },
  menuClose = () => {
    closeBtn.addEventListener("click", () => {
      menuContainer.classList.remove("active")
      header.classList.remove('active')
    })
  };

menuClose();
menuOpen();