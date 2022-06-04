const btn = document.querySelector(".button");
const input = document.querySelector(".input");
// input.addEventListener("keyup", (e) => {
//   if (input.value.length > 3) {
//   }
// });

input.addEventListener("keyup", (e) => {
  if (input.value && input.value.length > 3) {
    e.removeEventListener("keyup");
  }
});
