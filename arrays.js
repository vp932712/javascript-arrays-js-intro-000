var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles" ];

function addElementToBeginningOfArray(array, element){
  var empty = []
for ( var i = 0; i < array.length; i ++){
  empty.push(array[i]);
}
  return empty;
}
function destructivelyAddElementToBeginningOfArray(array, element){
  arrya.unshift(element)
  return array;
}


