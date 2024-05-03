const btn = document.getElementById("btn");
const result = document.getElementById("res");

btn.addEventListener("click", (e) => {
  // take te number from user 
  const number = parseInt(document.getElementById("input_num").value);
  // to store the number in the array then print it 
  let array = "";
  // the basic loop to print all the numbers 
  for (let i = 1; i < number; i++) {
    // to make the space and tree shape
    for (let j = 0; j < number - i; j++) {
      array += "";
    }

    // to make the stars shape
    for (let k = 0; k < i * 2 - 1; k++) {
      array += '*';
    }
    // console.log(i)
    // to enter a new line every time 
    array += '\n';
  }
// print the out put
  result.innerText = array;
});
