var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, item){
  var newArray = array;
  newArray.unshift(item);
  return newArray;
}