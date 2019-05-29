function sortIqbal(arr){
  var n = arr.length-1
  for(i = 0; i < n; i++){
      for(j = 0; j < n; j++){
          if(arr[j] > arr[j+1]){
              var tampung = arr[j]
              arr[j] = arr[j+1]
              arr[j+1] = tampung
          }
      }
    
  }
  return arr
}

function groupAnimals(animals) {
  // you can only write your code here!
sortIqbal(animals)
var arr2D = [];
for(var i = 0; i < animals.length;i++){

var firstWordAnimal = animals[i][0]
var arr1D = [];
  for(var j = i; j < animals.length; j++){
    if(firstWordAnimal === animals[j][0]){
      
      arr1D.push(animals[j])
      animals.splice(j, 1)
      j--
      i=-1
  }
}

    arr2D.push(arr1D)
}
  return arr2D

}




// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]

