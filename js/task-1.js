const categories = document.getElementById("categories");
const items = categories.querySelectorAll(".item");
console.log(`Number of categories is ${items.length}`);
items.forEach((item) => {
  const hText = item.querySelector("h2").textContent;
  const elementCounter = item.querySelectorAll("ul li").length;
  console.log(
    `Categories ${hText} has a number of elements equal to ${elementCounter}`
  );
});
