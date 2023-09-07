const counterValue = document.getElementById("counterValue");
const inc = document.getElementById("increment");
const dec = document.getElementById("decrement");

inc.addEventListener("click", function (evt) {
  let val = counterValue.textContent;
  counterValue.innerHTML = parseInt(val) + 1;
});

dec.addEventListener("click", function (evt) {
  let val = counterValue.textContent;
  counterValue.innerHTML = parseInt(val) - 1;
});
