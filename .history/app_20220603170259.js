const btn = document.querySelector(".button");
const input = document.querySelector(".input");
console.log(btn, input);
// input.addEventListener("keyup", (e) => {
//   if (input.value.length > 3) {
//   }
// });

if (input.values.length > 3) {
  input.addEventListener("keyup", () => {
    console.log(123);
  });
}
