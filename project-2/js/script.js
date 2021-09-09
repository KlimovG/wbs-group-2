// Alert on share button
const shareButton = document.querySelectorAll('.section__share-btn');

shareButton.forEach(btn => btn.addEventListener("click", () => alert(window.location.href)))