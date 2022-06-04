const btn = document.querySelector(".button");
const input = document.querySelector(".input");
console.log(btn, input);
input.addEventListener("keyup", () => {
  if (input.value.length > 10) {
    input.onKeyup = null;
  }
});
