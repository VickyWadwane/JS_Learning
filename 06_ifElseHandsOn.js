console.log(`------------------------------------Step 1----------------------------`);

var checkEvenOdd = function(num){
    if (num%2==0) {
        console.log(`The Given number ${num} is Even Number`);
    } else {
        console.log(`The Given number ${num} is Odd Number`);
    }
}
checkEvenOdd(45);
checkEvenOdd(70);
checkEvenOdd(67);
checkEvenOdd(98);

console.log(`------------------------------------Step 2----------------------------`);

var stringCharacter = function(word){
    if (word.length > 10) {
        console.log(`The Given String ${word} contains more than 10 characters`);
    } else {
        console.log(`The given string ${word} does not contain more than 10 characters`);
    }
}
stringCharacter("JavaScript - ES6");

console.log(`------------------------------------Step 3----------------------------`);

var stringWord = function(word){
    if (word.startsWith("Java")) {
        console.log(`The given word ${word} starts with "Java"`);
    } else {
        console.log(`The given word ${word} does not start with "Java"`);
    }
}
stringWord("JavaScript Language");
stringWord("JavaProgramming Language");
stringWord("Python Language");

