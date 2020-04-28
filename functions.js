//Project 2 part case(Step 3 part A)

function revWords1(sentence){
wordarray = sentence.split(" ");
newsentence = "";
for (i = 0; i < wordarray.length; i++){
  newword = "";
  x = wordarray[i].length;
for(j = 0; j < x; j++){
newword = newword + wordarray[i].charAt(x-j-1);

}

newsentence = newsentence + newword +" ";
}

return newsentence;

}

revWords1("Web App Dev");

//Project 2 part(Step 3 part b)

function revWords2(sentence){
function reverseword(item,index,array){
  newword = "";
for(i = 0; i < item.length; i++){

newword = newword + item.charAt(item.length-1-i);
}

array[index] = newword;
}

sentence = sentence.split(" ");
sentence.forEach(reverseword);

return sentence;

}

revWords2("Hello World");

//Project 2 part(Step 3 part c)
revWords3 = (sentence) => {
wordarray = sentence.split(" ");
newsentence = "";
for (const z of wordarray){
  x = z.length;
  newword = "";
for (j = 0; j < x; j++){
newword = newword+ z.charAt(x-j-1);

}

newsentence = newsentence + newword + " ";
}



return newsentence;

}
revWords3("Delta Echo");

//functions.js XC
containDuplicates = (sentence) => {
wordarray = sentence.split(" ");
newsentence = "";
for (const z of wordarray){
  x = z.length;
  newword = "";
for(j = 0; j < x; j++){
newword = newword+ z.charAt(x-j-1);

}

newsentence = newsentence + newword + " ";
}

return newsentence;

}
containDuplicates("Hello World");
