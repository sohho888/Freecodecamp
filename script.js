///// Iterate with JavaScript While Loops. Item-1

const myArray = [];

let i = 5;

while (i >= 0) {
    myArray.push(i);
    console.log(i)
    i--;
}



///// Iterate with JavaScript While Loops. Item-2

const myArray = [];

for (let i = 1; i <= 5; i++) {
  myArray.push(i);
}

console.log(myArray);


///// Iterate with JavaScript While Loops. Item-3
  const myArray = [];

  for (let i = 0; i < 10; i=i+2) {
    myArray.push(i);
  }
  
  console.log(myArray);


//////Push the odd numbers from 1 through 9 to myArray using a for loop.

const myArray = [];

for (let i = 1; i <= 9; i+=2) {
  if(i%2 !== 0)
  myArray.push(i);
}

console.log(myArray);

//////Modify function multiplyAll so that it returns the product of all the numbers in the sub-arrays of arr.

  function multiplyAll(arr) {
    let product = 1;
  for(let i = 0; i< arr.length; i++) {
    for(let j = 0; j < arr[i].length; j++){
      product = product*arr[i][j]
    }
  }
    return product;
  }

  
 console.log(multiplyAll([[1, 2], [3, 4], [5, 6, 7]])); 

//////Write a recursive function, sum(arr, n), that returns the sum of the first n elements of an array arr.

 function sum(arr, n) {
  if(n <= 0) {
    return 0;
  } else {
    return sum(arr, n - 1) + arr[n - 1];
  }
}


//////Profile Lookup
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  // Only change code below this line
  for(let i = 0; i < contacts.length; i++ ) {
    if (contacts[i].firstName === name){
      if(prop in contacts[i]){
        return contacts[i][prop]
      } else { 
        return "No such property"
      } 
    }
   }
   return 'No such contact'
  // Only change code above this line
}

lookUpProfile("Akira", "likes");



///////Use parseInt() in the convertToInteger function so it converts a binary number to an integer and returns it.
function convertToInteger(str) {

  const a = parseInt(str, 2);
  return a
  }
  
  console.log(convertToInteger("10011"));


///////Use Multiple Conditional (Ternary) Operators
function checkSign(num) {
  return (num > 0) ? "positive" : (num < 0) ? "negative" : "zero";
}

console.log(checkSign(-50));



///////Use Recursion to Create a Countdown
function countdown(n) {
   return n < 1 ? [] : [n].concat(countdown(n - 1));
}



//////Use Recursion to Create a Range of Numbers
  function rangeOfNumbers(startNum, endNum) {
    if (endNum - startNum === 0) {
      return [startNum];
    } else {
      var numbers = rangeOfNumbers(startNum, endNum - 1);
      numbers.push(endNum);
      return numbers;
    }
  }
    
console.log(rangeOfNumbers(100,105));


////////Mutate an Array Declared with const
onst s = [5, 7, 2];

function editInPlace() {
  // Only change code below this line.
s.sort(function(a,b) {
 return a - b
})

  console.log(s);
}

editInPlace()

