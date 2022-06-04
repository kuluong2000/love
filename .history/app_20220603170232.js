const btn = document.querySelector(".button");
const input = document.querySelector(".input");
console.log(btn, input);
// input.addEventListener("keyup", (e) => {
//   if (input.value.length > 3) {
//   }
// });

if (input.value.length > 3) {
  input.addEventListener("input", () => {
    return false;
  });
}
