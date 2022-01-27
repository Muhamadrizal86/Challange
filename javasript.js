// Expected Result = true
// Direction : need to check if each of array value has value less than 91
const array1 = [1, 29, 88, 37, 22, '90'];

function result(array1) {
  for (const element of array1) {
  if(element<91){
  result = true
  }
  else{
    result = false
  }
  console.log(result);
  
}
}

console.log(result(array1));