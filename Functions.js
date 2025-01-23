//question 41

function checkEvenOrOdd(number) {
    return number % 2 ===0 ? "even" : "odd"
}
console.log(checkEvenOrOdd(300));
console.log(checkEvenOrOdd(15));


//question 42
function calculateAreaOfCircle(radius) {
    return Math.PI * radius * radius;
}
console.log(calculateAreaOfCircle(50));


//question 43
function sumArray(arr) {
    let sum = 0 ;
    for (let i = 0; i < arr.length; i++) {
       sum+=arr[i]
    }
    return sum;
}
console.log(sumArray([1,2,3,4,5]));



//question 44
function stringCheck(string,char) {
    return string.startsWith(char);
}
console.log(stringCheck("Anubhav","A"));
console.log(stringCheck("Anubhav","j"));

//question 45
function maximumOfTwoNumbers(num1,num2) {
    return num1 > num2? num1 : num2;
}
console.log(maximumOfTwoNumbers(10,20));
console.log(maximumOfTwoNumbers(100,20));


//question 46
function factorial(num) {
    if (num === 0 || num === 1) {
        return 1
    }
    else {
        return num * factorial(num - 1)
    }
}
console.log(factorial(99));

//question 47

function string(string) {
    return string.split("").reverse().join("");
}
console.log(string("Anubhav"));

//question 48
function findLargestNumber(arr) {
    return Math.max(...arr)
}
console.log(findLargestNumber([1,2,3,4,5,6]));


//question 49
function kebabCase(str) {
    return str.replace(/\s+/g,'-').toLowerCase();
}
console.log(kebabCase("Anubhav Jha"));


//question 50

function helloWorld() {
    console.log("Hello World");
    
}

helloWorld();