const btn = document.querySelector(".button");
const input = document.querySelector(".input");
console.log(btn, input);
btn.addEventListener("click", () => {
  if (input.value.length > 10) {
    console.log(123);
  }
});
