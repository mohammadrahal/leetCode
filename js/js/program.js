// at this program i made a loop to sort the array assending order
// to desasse order if(array[j] < array[j +1] )

const array = ["e", "d", "c", "b", "a"];
for (let i = 0; i <= array.length; i++) {
  for (let j = 0; j < array.length - 1; j++) {
    if (array[j] > array[j + 1]) {
        // to swap the array data i used temp
      let temp = array[j];
      array[j] = array[j + 1];
      array[j + 1] = temp;
    }
  }
}

console.log(array);
