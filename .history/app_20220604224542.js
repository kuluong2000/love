let position = document.body.getBoundingClientRect();
let widthBody = position.width;
let height = position.height;
let btnSuccess = document.querySelector(".love-success");
const btnFail = document.querySelector(".love-fail");
const btnSize = btnFail.offsetWidth;
const box = document.querySelector(".box");
btnFail.addEventListener("mouseenter", () => {
  btnFail.style.left = `${Math.random() * widthBody}px`;

  btnFail.style.top = `${Math.random() * height}px`;
  //   btnFail.style.left = `${Math.random() * widthBody}px`;
  //   btnFail.style.left = `${Math.random() * widthBody}px`;
});
btnSuccess.addEventListener("click", () => {
  box.classList.add("open");
});
