const btn = document.querySelector(".button");
const input = document.querySelector(".input");
console.log(btn, input);
input.addEventListener("input", () => {
  if (input.length > 10) {
    console.log(123);
  }
});
