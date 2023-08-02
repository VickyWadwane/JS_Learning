
var greet = "Good Morning Virat Dude";
var lengthGreet = greet.length;
console.log(greet,"Length Of String is :",greet.length);

console.log(`------------------------------------------------------------------`);

var charAt0 = greet.charAt(0);
console.log(`${greet} - Char at oth index is ${charAt0}`);

var result = greet.charAt(greet.length - 1);
console.log(`${greet} - Char at Last index is ${result}`);

console.log(`------------------------------------------------------------------`);

var firstName = 'Vikrant';
var lastName = " Wadwane";
var res = firstName + lastName;
console.log(`Concated string is ${res}`);
console.log("My Full Name is :",firstName.concat(lastName));

console.log(`------------------------------------------------------------------`);

var IndexOfGreet = greet.indexOf("d");
console.log(`Index of string ${greet} is ${IndexOfGreet}`);

var result1 = greet.indexOf("Dude");
console.log(`Index of Substring Dude is ${result1}`);

console.log(`------------------------------------------------------------------`);
var result2 = greet.includes("Virat");
console.log(`Result is ${result2}`);

console.log(`------------------------------------------------------------------`);
var result = greet.split(' ');
var words = result.length;
console.log(`Total Number of Words are : ${words}`);

console.log(`------------------------------------------------------------------`);

var greet = "           Good Morning               ";
var result = greet.trim();
var length = result.length;
console.log(`After trim string is ${result} and its length is ${length}`);

var resultTrimEnd = greet.trimEnd();
var trimendLength = resultTrimEnd.length;
var endSpaces = greet.length - trimendLength;
console.log(`End Spaces is ${endSpaces}`);
console.log(`------------------------------------------------------------------`);

var greet = "Good Morning";
var result = greet.replace(' ','-');
console.log(`After replace ' ' with '-' string is : ${result}`);
var result = greet.replace('o','O');
console.log(`After replace 'o' with 'O' string is : ${result}`);

console.log(`------------------------------------------------------------------`);

var greet = "Good Morning Virat Dude";
var result = greet.slice(5,15);
console.log(`Slice from index 5 till 12 is ${result}`);

console.log(`------------------------------------------------------------------`);

