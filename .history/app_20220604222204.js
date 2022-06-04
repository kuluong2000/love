let position = document.body.getBoundingClientRect();
let widthBody = position.width;
let height = position.height;

const btnFail = document.querySelector(".love-fail");
const btnSize = btnFail.offsetWidth;
btnFail.addEventListener("mouseenter", () => {
  btnFail.style.left = `${Math.random() * widthBody - btnSize}px`;
  btnFail.style.top = `${Math.random() * height}px`;
  //   btnFail.style.left = `${Math.random() * widthBody}px`;
  //   btnFail.style.left = `${Math.random() * widthBody}px`;
});
