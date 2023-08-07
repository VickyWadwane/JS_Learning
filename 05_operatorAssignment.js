
console.log(`-------------------------------------Step 1---------------------------------`);

function squareOfWordLength(word){
var result = word.length;
console.log(`Length of the word is ${result}, & its Square is : ${result*result}`);
}
squareOfWordLength('JavaScript');
squareOfWordLength('Google Chrome');
squareOfWordLength('Developer Smart');

console.log(`-------------------------------------Step 2---------------------------------`);

function givenString(){
    var string = "I am Angular Developer";
    var result = string.split(" ");
    console.log(`Length of String is : ${string.length} and Result after dividing is : ${string.length/result.length} `);
    console.log(`Length of String is : ${string.length} and Result after multiplying is : ${string.length*result.length} `);   
}

givenString();

