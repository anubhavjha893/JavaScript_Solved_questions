//question 31
const movies = ["avtar", "thor", "ironman", "spiderman", "captain america"];
console.log(movies.join(" - "));

//question 32
const arr = [1,2,3,4,5]
console.log(arr[1]);

//question 33
const array = [1,2,3,4,5]
array.unshift(0,0)
console.log(array);


//question 34
const songs = ["gana","sare","tare"]
songs.pop()
console.log(songs);

//question 35

let elems = [11,21,32,43,54]
const firstThree = elems.slice(0,3)

console.log(firstThree);

//question 36
let numbers = [1,2,3,4,5,6]
console.log(numbers.indexOf(5));

//question 37
let value = [1,2,3,4,5]
console.log(value.includes(3));

//question 38
const firstarr = [1,2]
const secondarr = [3,4]

console.log(firstarr.concat(secondarr));

//question 39

const accendingarr = [6,1,3,2,4,5];

console.log(accendingarr.sort((a,b)=>a-b));

//question 40

let originalarr = [1,2,3]

let copiedarr = [...originalarr]
console.log(copiedarr);
console.log(originalarr === copiedarr);

