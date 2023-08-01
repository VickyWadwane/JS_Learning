
//function with no argument and no return value
function show(){
    console.log("My Name is Vikrant");
    console.log("I am Tevhnical Lead");
    console.log("My Tech skill is - Java + Angular + React + DevOps + ");
}
 
show(); //function Invocation

//function with argument and no return value
function checkType(value){
    console.log("Value is", value);
    console.log("Its Type is", typeof value);
    console.log("-----------------------------------------------");
}
checkType(100);
checkType("ok");
checkType(true);
checkType(undefined);
checkType(null);
checkType();



//function with argument and return value
function addition(a,b,c){
    console.log("Values are :",a,b,c);
    var result =a+b+c;
    return result;
}
var res1 = addition(10,23,456);
console.log("Result is :",res1);
var res2 = addition(-56,239,677);
console.log("Result is :",res2);
var res3 = addition("OK",66,"Pune");
console.log("Result is :",res3);
var res4 = addition("PK","Vicky");
console.log("Result is :", res4);


function display(){
    return show();
}

var result = display();


