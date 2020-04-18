
// //"\n".charCodeAt(0);

// //A = 65 Z = 90
// //a = 97 Z = 122
// let a ={
// "31": "",      "32": " ",     "33": "!",     "34": "\"",    "35": "#",    
// "36": "$",     "37": "%",     "38": "&",     "39": "'",     "40": "(",    
// "41": ")",     "42": "*",     "43": "+",     "44": ",",     "45": "-",    
// "46": ".",     "47": "/",     "48": "0",     "49": "1",     "50": "2",    
// "51": "3",     "52": "4",     "53": "5",     "54": "6",     "55": "7",    
// "56": "8",     "57": "9",     "58": ":",     "59": ";",     "60": "<",    
// "61": "=",     "62": ">",     "63": "?",     "64": "@",     "65": "A",    
// "66": "B",     "67": "C",     "68": "D",     "69": "E",     "70": "F",    
// "71": "G",     "72": "H",     "73": "I",     "74": "J",     "75": "K",    
// "76": "L",     "77": "M",     "78": "N",     "79": "O",     "80": "P",    
// "81": "Q",     "82": "R",     "83": "S",     "84": "T",     "85": "U",    
// "86": "V",     "87": "W",     "88": "X",     "89": "Y",     "90": "Z",    
// "91": "[",     "92": "\\",    "93": "]",     "94": "^",     "95": "_",    
// "96": "`",     "97": "a",     "98": "b",     "99": "c",     "100": "d",    
// "101": "e",    "102": "f",    "103": "g",    "104": "h",    "105": "i",    
// "106": "j",    "107": "k",    "108": "l",    "109": "m",    "110": "n",    
// "111": "o",    "112": "p",    "113": "q",    "114": "r",    "115": "s",    
// "116": "t",    "117": "u",    "118": "v",    "119": "w",    "120": "x",    
// "121": "y",    "122": "z",    "123": "{",    "124": "|",    "125": "}",    
// "126": "~",    "127": ""
// };

// function flipPairs(inputs) {
//   let a = 0;
//   let result = [];
//   for (let i= 0; i<inputs.length;i++){
//     let value = inputs[i].charCodeAt(0);
//     //UPPER CASE
//     if(value >= 65 && value <= 90){
//       if(value <= 77) {
//         result[i] = String.fromCharCode(value+13); 
//       }
//       if (value > 77){
//          result[i] = String.fromCharCode(value -13); 
//       }
//     }
//     //LOWER CASE
//     else if(value >= 97 && value <= 122){
//       if(value <= 109) {
//         result[i] = String.fromCharCode(value+13); 
//       }
//       if (value > 109){
//          result[i] = String.fromCharCode(value -13); 
//       } 
//     }
//     else{
//     //everything else
//       result[i] = inputs[i];
//     }        
//   } 
//   return result.join();
// }


// var input = 'mnopqrstuvwxyzabcdeABC  s3 fghijklmnop';
// var output = flipPairs(input);
// console.log(output); 


// Given a list of non-negative integers and a target sum, find a pair of numbers that sums to the target sum.

// Example:

// var pair = findPairForSum([3, 34, 4, 12, 5, 2], 9);
// console.log(pair); // --> [4, 5]


// function findPairForSum(arr,num){
//   let result = [];
//   let found = false; 
//   // nested loops then break
//   for (let i =0; i<arr.length; i++){
//     for (let j=1; j<arr.length-1; j++){
//       if (found === false)
//       console.log(arr[i]+" "+arr[j])
//       console.log (arr[i]+arr[j]);
//       let sum = arr[i] + arr[j];
//       if (sum === num){
//         result[0] = arr[i];
//         result[1] = arr[j];
//         found = true; 
//       }
//     }
//   }

  // if sum = num then a pair has been found, push both to a result array

  // return result array
//   return result; 
// }

// var pair = findPairForSum([0, 34, 4, 12, 5, 2], 9);
// console.log(pair); // --> [4, 5]


// Is one string a rotated version of another?

// For example:
// String 1: 'hello world'
// String 2: 'orldhello w'

// If you double the string, you'll be to trivially find another string inside it using regular String methods.

// Doubled string: 'hello worldhello world'
// Search w/in it: '       orldhello w    '

// function rotatePair(str1,str2) {
//   let doubled = str1.concat(str1);
//   let location = [];
//   let count =0

//   for (let i=0; i<doubled.length; i++){
//     for (let j=0; j<str2.length; j++){
//       if(str2[i]===doubled[j]){
//         count ++ ;
//        // console.log(count) 
//       }
//     }
//   }
//   if (count === str2.length){
//     return true; 
//     //console.log ('true');
//   }else {
//     return false; 
//    // console.log ('false');
//   }


// }

// rotatePair('abcd','bcda');


// Binary search is a technique for very rapidly searching a sorted collection by cutting the search space in half at every pass.

// Given a sorted array, such as this:
// [1, 3, 16, 22, 31, 33, 34]

// You can search for the value 31, as follows:

// 1) Pick the midpoint: 22.
// 2) The value is higher than 22, so now consider only the right half of the previous array:
// [...31, 33, 34]
// 3) Pick the midpoint: 33
// 4) The value is lower than 33, so now consider only the left half of the previous array:
// [...31...]
// 5) Pick the midpoint: 31
// 6) You've hit the value.
// 7) Return the index of the value.

// Notes:
// * If you don't find the value, you can return null.
// * If at any point you calculate the index of the midpoint and get a fractional number, just round it down ("floor" it).

// function binarySearch(arr,a){
//   let l = 0;
//   let r = arr.length-1; 
 
//   while(l<=r){
//     let mid = Math.floor((l+r)/2); 
//     if (arr[mid]===a) {
//         return true;
//       }
//     if (arr[mid]>a){
//       // value is on the left
//       r = mid-1; 
//     }
//     if (arr[mid]<a){
//       //value is on the right
//       l = mid+1;
//     }
//   }
//   return false; 
// }

// let answer = binarySearch([1,4,4,6,7,8,9], 9);
// console.log(answer);
// answer = binarySearch([1,4,4,6,7,8,9], 1);
// console.log(answer);
// answer = binarySearch([1,4,4,6,7,8,9], 6);
// console.log(answer);
// answer = binarySearch([1,4,4,6,7,8,9], 5);
// console.log(answer);


// Skeleton


// // FUNCTION DEFINITION(S)
// function average(n){
//   let avg = sums(n)/n.length; 
//   console.log(avg);
//   return avg; 
// }

// function sums(numbers) {
//   // returns the sum of an array of numbers
//   let sum = 0; 
//     for (let i = 0; i<numbers.length; i++){
//       sum += numbers[i];
//   } console.log(sum);
//   return sum;
// }

// function assertEqual (a,b){
//   if (a===b) return console.log('true');
//     else return console.log('false')
    
// }

// // ASSERTION FUNCTION(S) TO BE USED
// assertEqual(average([1,2]), 1.5)// TESTS CASES
// assertEqual(average([1,2]), 1.6)// TESTS CASES

// Skeleton

// // FUNCTION DEFINITION(S)
// function isIsogram(text) {
//   // add each char to a set
//   let check = new Set(); 
//   // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
//   // note: a set drops dup values
//   for (let i=0; i<text.length; i++){
//     check.add(text[i].toLowerCase());
//   }
//   if(check.size === text.length) return true; 
//   // thus, to see if all the chars were unique,
//   // check length of text and the size of the set
//   return false;
// }

// isIsogram('sdf')
// // ASSERTION FUNCTION(S) TO BE USED


// function getElementsAfter(array, n) {
//   // your code here
//   abc = array.slice(n+1);
//   console.log(array)
//   return abc; 
// }

// getElementsAfter(['a','b','c','d','e'],2);

// abc = 'sdk'
// console.log (abc.charAt(2))


// function removeFromBackOfNew(arr) {
//   // your code here
//   let abc = arr.slice(1,2);
//   console.log(abc)
//   return abc;
// }

// removeFromBackOfNew([1,2,3])


// function getIndexOf(char, str) {
//   // your code here
//   console.log(str.indexOf(char))
//   var i=0;
//   for (i; i < str.length ; i++){
//     if (str[i] === char){
//       return i;
//     }
  
//   }return -1; 
// }

// getIndexOf('c','abc'); 


function binarySearch(arr, v){
  let l = 0;
  let r = arr.length -1; 

  while (l<=r){
    let mid = Math.floor((r+l)/2);
    if (arr[mid]===v) {
      console.log(mid);
      return mid;
    }
    if(arr[mid]>v){
      // value is on the left
      r = mid -1; 
    }
    if (arr[mid]<v){
      //value is on the right
      l = mid+1; 
    }
  }return -1; 
}

binarySearch([1,2,3], 4)
binarySearch([1,2,3], 1)
binarySearch([1,2,3], 2)
binarySearch([1,2,3], 3)
