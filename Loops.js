// question  21
for (let i = 1; i < 51; i++) {
    console.log(i);
}

// question 22
let sum = 0;
let number = 1;

while (number <= 10) {
    sum += number;
    number++
}
console.log("The sum of numbers from 1 to 10 is:",sum);

// question 23
const string = "JavaScript"

for (const element of string) {
    console.log(element);
    
}

// question 24
for (let index = 1; index < 21; index++) {
  if (index % 2 === 0) {
    continue;
  }
  console.log(index); 
}

// question 25
let num = 5
do {
    console.log(num);
    num--
} while (num >=1);

// question 26
let factorial = 1
for (let i = 1; i < 6 ; i++) {
    factorial *= 1;
}
console.log(factorial);

// question 27
for (let row = 1; row <=3; row++) {
let rowOutput = "";
for (let col = 1; col <=3 ; col++) {
    rowOutput += col + "";
}    
console.log(rowOutput.trim());
}

// question 28
const array = [1,2,3,4]
// console.log(array.reverse());

const reversedArray = []
for (let i = array.length - 1; i >= 0; i--) {
reversedArray.push(array[i])    
}
console.log(reversedArray);

// question 29
let n = 1
while (n <= 100) {
    if(n % 5 === 0) {
        console.log(n);
    }
    n++;
}

// question 30
let object = {name:"anubhav",age:21}
for (const key in object) {
 console.log(key);
 
}