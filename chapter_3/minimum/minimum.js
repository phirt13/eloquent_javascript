(function() {

  var findMinimum = function(num1, num2) {
    if(num1 > num2) {
      return num2;
    } else if(num1 < num2) {
      return num1;
    } else {
      return 'equal';
    }
  };

  console.log(findMinimum(0, 10));
  console.log(findMinimum(0, -10));
  console.log(findMinimum(1, 1));
}());
