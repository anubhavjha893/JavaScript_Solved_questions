//question 51
function check(num) {
    if (num > 0) {
        console.log("Number is positive");       
    }
    if (num < 0){
       console.log("Number is negative");
    }else {
        console.log("Number is zero");
    }
}
check(5);
check(0);
check(-98);

//question 52
function year(num) {
    if ((num % 4 === 0 && num % 100 !==0 )|| num % 400 === 0) {
        console.log(num + "is a leap year");
    } else {
        console.log(num + "is not a leap year");
    }
}
year(2000);
year(1900);

//question 53

function vote(age) {
    if(age > 18) {
        console.log("You can vote");
    }
    else {
        console.log("You are not eligible to vote");
    }
}

vote(19);

//question 54
function day(number) {
    switch (number) {
        case 1: console.log('Monday')
            break;
        case 2: console.log('Tuesday')
break;
        case 3: console.log('Wednesday')
break;
        case 4: console.log('Thursday')
        break;
        case 5: console.log('Friday')
        break;
        case 6: console.log('Saturday')
        break;
        case 7: console.log('Sunday')
        break;
        default: console.log('Invalid day')
            break;
    }
}

day(9);
day(2);

//question 55

function division(num) {
    if (num % 3 === 0 && num % 5 === 0) {
        console.log(num + " is divisible by both 3 and 5");
        
    }else {
        console.log(num + " is not divisible by both 3 and 5");
        
    }
}

division(15);

//question 56
function grade(num) {
    if(num >= 90) {
        console.log("Grade : A");
    }
    else if(num >=80) {
        console.log("Grade : B");
    }
    else if(num >=70) {
        console.log("Grade : C");
    }
    else if(num >=60) {
        console.log("Grade : D");
    }
    else 
    {
        console.log("Grade : F");
    }
}

grade(85);

//question 57

function compare(str1, str2) {
    if (str1 === str2 ) {
        console.log("Strings are equal");
    }
    else {
        console.log("Strings are not equal");
    }
}

compare("Hello", "World");
compare("Hello", "Hello");


//question 58

function checkEvenOdd(number) {
    console.log(number % 2 === 0 ? "Even" : "Odd");
    
}

checkEvenOdd(10);

//question 59

function largestOfThree(num1,num2,num3) {
    if(num1 >= num2 && num1 >= num3) {
        console.log(num1 + " is the largest number");
        
    }
    else if(num2 >= num3 && num2 >= num1) {
        console.log(num2 + " is the largest number");
    }
    else {
        console.log(num3 + " is the largest number");
    }
}

largestOfThree(10, 50, 80);

//question 60
function setDiscount(price) {
    let discount;
    if(price > 2000){
        discount = 0.15;
    }else if (price > 1000) {
        discount = 0.10;
    }
    else {
        discount = 0.05;
    }
    console.log("Discount is " + discount * 100 + "%");
    
}

setDiscount(2500);