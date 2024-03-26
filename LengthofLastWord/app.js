// console.log("hello world")

var lengthOfLastWord = function (s) {
    let length = 0;
  
    for (let i = 0; i < s.length - 1 ; i++) {
      if (s[i] !== '') {
        if (i === 0 || s[i - 1] === ' ') {
         length = 1;
        } else {
         length += 1;
        }
      }
    }
     return length;
  };


console.log(lengthOfLastWord(" fly me   to   the moon "))  