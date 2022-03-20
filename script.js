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


