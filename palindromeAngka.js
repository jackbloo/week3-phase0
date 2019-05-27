function angkaPalindrome(num) {
    // you can only write your code here!
while(true){
  num++;
  var num1 = num.toString();
        var reversedNum = num1.split('').reverse().join('');
        if(num1 === reversedNum){
          return parseInt(num1);
        }

}
      
}  

   
  
  // TEST CASES
  console.log(angkaPalindrome(8)); // 9
  console.log(angkaPalindrome(10)); // 11
  console.log(angkaPalindrome(117)); // 121
  console.log(angkaPalindrome(175)); // 181
  console.log(angkaPalindrome(1000)); // 1001