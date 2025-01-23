//question 11 
let variable = "created a variable using let "
console.log(variable);

//question 12
const PI = 3.14

console.log("PI value is: ", PI);

//question 13
let newVariable = 10;
console.log("newVariable value is: ", newVariable);

newVariable = 20;

console.log("newVariable value after update is: ", newVariable);

//question 14
console.log("type of null is : ", typeof null);

//question 15
let num = "25";

console.log("type of num is ", typeof num);

//question 16
let BooleanVariable = true
console.log("type of BooleanVariable is  ",typeof BooleanVariable);

//question 17
let string = "hello"
let number =  12
let Boolean = false

console.log ("string : ",string + " ;" ,"number : ",number + " ;","boolean : ",Boolean);

//question 18
let variables

console.log("type of new is  ",typeof variables);

//question 19
let undefinedVariable  = undefined;

console.log("type of undefinedVariable is  ",typeof undefinedVariable);

//question 20
const arr=[1,2,3,4,5]

console.log("array : ",arr);

try {
    arr = [3,4,5,6,7]
} catch (error) {
    console.log("error comes on the time of reassigning : ",error);
    
}

arr.push(3)
console.log("new array : ",arr);
