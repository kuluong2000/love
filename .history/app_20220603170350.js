const btn = document.querySelector(".button");
const input = document.querySelector(".input");
// input.addEventListener("keyup", (e) => {
//   if (input.value.length > 3) {
//   }
// });

if (input.value && input.value.length > 3) {
  console.log(123);
  input.addEventListener("keyup", () => {
    console.log(123);
  });
}
