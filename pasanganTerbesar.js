function pasanganTerbesar(num) {
    // you can only write your code here!
    var couple = [];
    var num1 = num.toString();
    for(i = 0; i < num1.length; i++){
    var couple1 = '';
    couple1 = num1[i] + num1[i+1]
    couple.push(couple1);

    }

   couple.sort(function(a,b){return a < b});
   var couple3 = parseInt(couple[0]);
   return couple3
  }
  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99