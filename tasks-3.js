1. https://www.codewars.com/kata/geometry-basics-circle-circumference-in-2d/train/javascript

function circleCircumference(circle) {
  return 2 * Math.PI * circle.radius;   
}

2. https://www.codewars.com/kata/training-js-number-13-number-object-and-its-properties/train/javascript

function whatNumberIsIt(n){
 if (n == Number.MAX_VALUE) {
    return "Input number is Number.MAX_VALUE"; }
 if (n == Number.MIN_VALUE) {
    return "Input number is Number.MIN_VALUE";}  
 if (Number.isNaN(n)) {
    return 'Input number is Number.NaN';}
 if (n == Number.NEGATIVE_INFINITY) {
    return "Input number is Number.NEGATIVE_INFINITY";}
 if (n == Number.POSITIVE_INFINITY) {
    return "Input number is Number.POSITIVE_INFINITY";
  } else {  
    return "Input number is "+ n;}
}

    OR

function whatNumberIsIt(n){
  return (n == Number.MAX_VALUE ? "Input number is Number.MAX_VALUE" : n == Number.MIN_VALUE ? "Input number is Number.MIN_VALUE" :
  Number.isNaN(n) ?  'Input number is Number.NaN' : n == Number.NEGATIVE_INFINITY ? "Input number is Number.NEGATIVE_INFINITY" :
  n == Number.POSITIVE_INFINITY ? "Input number is Number.POSITIVE_INFINITY" : "Input number is "+ n);
}

3. https://www.codewars.com/kata/training-js-number-12-loop-statement-for-dot-in-and-for-dot-of/train/javascript

function giveMeFive(obj){
let five=[];
  for (let key in obj) {
    if (key.length==5) five.push(key);
      if (obj[key].length==5) five.push(obj[key]);
  }
  return five;
}

4. https://www.codewars.com/kata/understanding-closures-the-basics/train/javascript

function buildFun(n){
 let search = [];
  for (let i = 0; i< n; i++){
    search.push(function(){
      return i;
    });
  }
    return search;
}
