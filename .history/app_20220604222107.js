let position = document.body.getBoundingClientRect();
let widthBody = position.width;
let height = position.height;

const btnFail = document.querySelector(".love-fail");
console.log(btnFail.offsetWidth);
btnFail.addEventListener("mouseenter", () => {
  btnFail.style.left = `${Math.random() * widthBody - btnFail.offsetWidth}px`;
  btnFail.style.top = `${Math.random() * height - 10}px`;
  //   btnFail.style.left = `${Math.random() * widthBody}px`;
  //   btnFail.style.left = `${Math.random() * widthBody}px`;
});
