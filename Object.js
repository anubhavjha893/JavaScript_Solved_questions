//question 61
const person = {name:"Anubhav",age:22,city:"bhopal"};
console.log(person);

//question 62
person.isStudent = true;
console.log(person);

//question 63
console.log(person['city']);

//question 64
delete person.age
console.log(person);

//question 65

function objkey(obj) {
    console.log(Object.keys(obj));
}

objkey(person);

//question 66

const books = [{title:"jungle book",author:"john"},
    {title:"harry potter",author:"j.k.rowling"},
    {title:"to kill a mockingbird",author:"Harper Lee"} 
]

//question 67
console.log(books[1].author);

//question 68
function checkKeyExists(obj,key) {
    if(key in obj) {
        console.log("Key exists");
    }
    else {
        console.log("Key does not exist");
    }
}

checkKeyExists(person, "isStudent");

//question 69

function countKeys(obj) {
    return Object.keys(obj).length;
}

console.log(countKeys(person));

//question 70

console.log(Object.assign({},books,person));
