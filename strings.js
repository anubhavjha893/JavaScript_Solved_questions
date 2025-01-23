// question 71
const string = "Anubhav"
console.log(string.length);

// question 72
console.log(string.slice(-4));


// question 73
console.log(string.toLowerCase());


// question 74
console.log(string.split(" "));


// question 75
console.log(string.indexOf("A"));

// question 76
const string2 = "i love javascript"
console.log(string2.replace("javascript", "JS"));

// question 77
console.log(string.repeat(3));

// question 78

function check(str,word) {
    return str.includes(word)
}
console.log(check(string,"Anubhav"));

// question 79
const whitespace = "mo ney"
console.log(whitespace.split(" ").join(""));

// question 80

function countVovels(str) {
    let vovels = "aeiouAEIOU";
    let count = 0;
    for (let element of str) {
        if (vovels.includes(element)) {
            count++;
        }
    }
    return count;
}

console.log(countVovels(string));
