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


