let btn_one = document.getElementById("btn_one");
const result = document.getElementById("result");
const M = ["", "M", "MM", "MMM"];
const C = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
const X = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
const I = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];

btn_one.addEventListener("click", () => {
  const num = parseInt(document.getElementById("number").value);
  if (!isNaN(num) && num >= 1 && num <= 3999) {
    const roman =
      M[Math.floor(num / 1000)] +
      C[Math.floor((num % 1000) / 100)] +
      X[Math.floor((num % 100) / 10)] +
      I[num % 10];
    result.textContent = roman;
  } else {
    result.textContent = "Please enter a valid number between 1 and 3999.";
  }
});
