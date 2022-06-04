const btn = document.querySelector(".button");
const input = document.querySelector(".input");
console.log(btn, input);
input.addEventListener("onchange", () => {
  console.log(1);
});
