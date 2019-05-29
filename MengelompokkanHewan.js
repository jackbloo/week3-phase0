
function groupAnimals(animals) {
    // you can only write your code here!
animals.sort()
var arr2D = [];
var firstWordAnimal = animals[0][0]
var arr1D = [];
for(var i = 0; i < animals.length;i++){
  if(firstWordAnimal === animals[i][0]){
        arr1D.push(animals[i])
  } else {
    arr2D.push(arr1D)
    arr1D = [];
    firstWordAnimal = animals[i][0]
    arr1D.push(animals[i])
  } if (i === animals.length-1){
    arr2D.push(arr1D)
  }
}
      return arr2D
  }


  function groupAnimals(animals) {
    // you can only write your code here!
animals.sort(function(a,b){return a>b})
var arr2D = [];
for(var i = 0; i < animals.length;i++){
  var firstWordAnimal = animals[i][0]
  var arr1D = [];
  for(var j = 0;j < animals.length; j++){
  if(firstWordAnimal === animals[j][0]){
        arr1D.push(animals[j])
        j= j-1

  }
  }

      arr2D.push(arr1D)
}
    arr2D.splice(0,1)
    arr2D.splice(2,1)
    arr2D.splice(3,1)
    return arr2D


  }



  
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]

