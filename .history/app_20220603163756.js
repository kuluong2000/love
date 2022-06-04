const btn = document.querySelector(".button");
const input = document.querySelector(".input");
console.log(btn, input);
input.addEventListener("input", () => {
  if (input.value.length > 10) {
    input.keyup = null;
    console.log(123);
  }
});
