const textInput = document.querySelector(".text");
const output = document.querySelector(".output");

textInput.addEventListener("name-input", (event) => {
  output.textContent = event.currentTarget.value;
});
