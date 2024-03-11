
/*
Asynchronous:
    Functions running in parallel with other functions are called asynchronous
A good example is JavaScript setTimeout().

*/

let element1 = "Azhar Ali";
function myDisplayer(element1) {
    console.log(element1)
  }
  
  function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
  }
  
  myCalculator(5, 5, myDisplayer);
  
  