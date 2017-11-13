var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles" ];

function addElementToBeginningOfArray(array, element){
  var empty = []
for ( var i = 0; i < array.length; i ++){
  empty.push(element);
  empty.push(array[i]);
}
  return empty;
}
function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element)
  return array;
}
function addElementToEndOfArray(array, element){
  var empty = []
for ( var i = 0; i < array.length; i ++){

  empty.push(array[i]);
  empty.push(element);
}
  return empty;
}
function destructivelyAddElementToEndOfArray(array, element){
  arrar.push(element);
  return array;
}

