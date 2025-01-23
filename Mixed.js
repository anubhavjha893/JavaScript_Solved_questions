// question 81 

function arrayOfNumbers(arr) {
    return arr.filter(num => num % 2 === 0 )
}

console.log(arrayOfNumbers([1, 2, 3, 4, 5])); 


// question 82
function countOccurrences(arr,value) {
    let count = 0
    for (let element of arr) {
        if (element === value) {
            count++
        }
    }
    return count
}

console.log(countOccurrences([1, 2, 3, 2, 2, 2,10,8, 5], 2));

// question 83

function string(str) {
    console.log(str.split("").reverse().join(""));
    
}
string("hello world")

// question 84
function printPattern(num) {
    for (let i = 1; i <= num; i++) {
console.log("*".repeat(i));
        
    }
}
printPattern(4);

// question 85

function square(num) {
    return num.map( item => item * item)
}
const number = [1,2,3,4,5]
console.log(square(number));

// question 86

let sum = 0
for (let i = 0; i <= 50; i++) {
if(i % 2 !== 0) {
    sum += i
}    
}
console.log("sum of all odd numbers between 1 to 50 is ",sum);

// question 87
const person = {
    firstName : 'chittu',
    lastName : 'jha',
}
console.log("fullName :",person.firstName + " " + person.lastName);

// question 88
const strings = "10"
console.log(parseInt(strings) + 5);

// question 89
let arr = ["a", "b", "c", "d", "e"]
let reversedArr = []
for (let i = arr.length - 1; i >=0 ; i--) {
reversedArr.push(arr[i])    
}
console.log(reversedArr);

// question 90
let ar = [];
if(ar.length === 0 ) {
    console.log("array is empty");
}
else {
    console.log("array is not empty");
}

// question 91
const currentDate = new Date
console.log(currentDate);

const day = currentDate.getDate()
const month = currentDate.getMonth() + 1  
const year = currentDate.getFullYear()

const formattedDate = (day < 10 ? '0' + day : day) + "/" + (month < 10 ? '0' + month : month) + "/" + year
console.log(formattedDate);

// question 92
const arr3 = [1,2,3,4,5,6]
console.log(Math.min(...arr3));

// question 93
 function fibonacci(num) {
    let sequence = [0,1]
    for (let i = 2; i < num; i++) {
sequence.push(sequence[i - 1] + sequence[i - 2])        
    }
    return sequence.slice(0,num)
 }

 console.log(fibonacci(10));
 
 // question 94

 function divide(a,b) {
    try {
        if(b === o) {
            throw new Error("Cannot divide by zero")
        } 
        let result = a/b;
    } catch (error) {
        console.log(error.message);
        
    }
 }

 divide(10,0)

 // question 95

 const vovel = "hello"
 
 function vovelIndex(vovel) {
    let vovels = "aeiouAEIOU"
    for (let i = 0; i < vovel.length; i++) {
  if (vovels.includes(vovel[i])) return i   
    }
    return -1
 }
 console.log(vovelIndex("hello"));
 
 // question 96
 function arrr (arre) {
    return [...new Set(arre)];
     }
     console.log(arrr([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

     // question 97
     function mergeSortedArray(arr1,arr2) {
        return [...arr1,...arr2].sort((a,b)=>a - b);
     }
     console.log(mergeSortedArray([1, 3, 5, 7], [2, 4, 6, 8]));

     // question 98
     function countStringsLenth(str) {
        let len = str.length
        return len
     }

     console.log(countStringsLenth("hello world"));
     

     // question 99
     const button = document.querySelector("#toggleButton");
     
     button.addEventListener("click",()=> {
        button.style.backgroundColor = button.style.backgroundColor === "blue" ? "red" : "blue";
     })

     // question 100

     function allGreaterThan(arr,value) {
        return arr.every(num => num > value);
    }
    console.log(allGreaterThan([10, 20, 30], 5))