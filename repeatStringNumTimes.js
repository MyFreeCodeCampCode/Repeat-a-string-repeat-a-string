function repeatStringNumTimes(str, num) {
  var myString = "";
  
  for (i = 0; i < num; i++)
    myString += str;
  
  return myString;
}

repeatStringNumTimes("abc", 3);
