//Requirement 3 a.
revWords1 = (s) => {
  let input = s.split(" ");
  let result = "";
  for (i = 0; i < input.length; i++) {
    addition = "";
    x = input[i].length;
    for (ii = 0; ii < x; ii++) {
      addition += input[i].charAt(x - ii - 1);
    }
    result += addition + " ";
  }
  return result;
}

console.log(revWords1("Web App Dev"));
console.log(revWords1("Delta Echo"));

//Requirement 3 b.
/*
I could not figure out how to use the Array.forEach method to achieve the desired result.
*/

//Requirement 3 c.
revWords3 = (s) => {
  input = s.split(" ");
  result = "";
  for (const i of input) {
    x = i.length;
    addition = "";
    for (ii = 0; ii < x; ii++) {
      addition = addition + i.charAt(x - ii - 1);
    }
    result += addition + " ";
  }
  return result;
}
console.log(revWords3("Web App Dev"));
console.log(revWords3("Delta Echo"));
