function targetTerdekat(arr) {
    // you can only write your code here!
    var x =[];
    var o = [];
    for(i = 0; i < arr.length-1; i++){
      if(arr[i] === 'o'){
     o.push(i)

    } else if(arr[i] === 'x'){
     x.push(i)

    }
    }

    if(x.length === 0){
      return 0
    } else if(x[0] < o[0]){
      x.sort(function(a, b){return b - a});
      return  Math.abs(x[0] - o[0]) 
    } else if (x[0] > o[0])
       x.sort(function(a, b){return a - b});
      return  Math.abs(x[0] - o[0]) 

}
  
  // TEST CASES
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2