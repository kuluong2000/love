let position = document.body.getBoundingClientRect();
let widthBody = position.width;
let height = position.height;
const btnFail = document.querySelector(".love-fail");
btnFail.addEventListener("mouseenter", () => {
  btnFail.style.left = `${Math.random() * widthBody - 100}px`;
  btnFail.style.top = `${Math.random() * height - 100}px`;
  //   btnFail.style.left = `${Math.random() * widthBody}px`;
  //   btnFail.style.left = `${Math.random() * widthBody}px`;
});
