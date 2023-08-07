console.log("-------------------------Step 1----------------------");


var greaterNumber = function(num1, num2){
    var result = num1>num2 ? num1 : num2;
    console.log(`The Greater Number is : ${result}`);
}
greaterNumber(10,-10);
greaterNumber(800,899);
console.log("-------------------------Step 2----------------------");

var isEvenOrOdd = function(num){
    var number = num%2 == 0? "Even" : "Odd";
    console.log(`The given number ${num} is : ${number}`);

}
isEvenOrOdd(29);
isEvenOrOdd(44);
isEvenOrOdd(0);
isEvenOrOdd(101);

console.log("-------------------------Step 3----------------------");

var wordLength = function(word){
    var result = word.length%2 ==0? "Even":"Odd";
    console.log(`The Given word ${word} is ${result}`);
}

wordLength('JavaScript');
wordLength('developer');
wordLength('Google');
