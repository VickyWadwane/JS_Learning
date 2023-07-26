

function swap(n1, n2){//n1 and n2 are called parameters or arguments
    console.log("Inside Swap function");
    console.log("Before Swap > ","n1 : ",n1, "n2 : ",n2);
    var temp = n1;
    n1=n2;
    n2= temp;
    console.log("After Swap > ","n1 : ",n1, "n2 : ",n2); 
};  
var num1 = 100;
var num2 = 200;
swap(num1, num2);// function calling or invocation

var sweety = "Vicky";
var cutie = "Vaishnavi";
swap(sweety,cutie);
console.log("End Of Program");
