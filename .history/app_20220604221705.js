let position = document.body.getBoundingClientRect();
let widthBody = position.width;
let height = position.height;
const btnFail = document.querySelector(".love-fail");
btnFail.addEventListener("mouseenter", () => {
  btnFail.style = "left:10px";
});
