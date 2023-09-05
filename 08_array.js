



var array = [10,20,30,50,10,80,20];
console.log(array);
console.log(`Type of Array: ${typeof array}`);
console.log(`Total number of elements in Array is: ${array.length}`);
let element2 = array[2];
console.log(`Element store at element 2 is : ${element2}`);
let element1 = array[0];
console.log(`Element store at element 1 is : ${element1}`);
let arrayLength = array.length;
let lastElement = array[arrayLength-1];
console.log(`Last element is: ${lastElement}`);
let thirdLastElement = array[arrayLength-3];
console.log(`Third Last Element of array is : ${thirdLastElement}`);


console.log(`------------------------------------------------`);
array[1] = 100;         //Value Update in Array
console.log(array);

console.log(`------------------------------------------------`);
let isAvailable = array.includes(80);
console.log(`Is 80 Available in Array : ${isAvailable}`);

console.log(`------------------------------------------------`);
let indexOfElement = array.indexOf(50);
console.log(`Index of 50 is : ${indexOfElement}`);

console.log(`-----------------------------Array Traversing-----------------------------`);


for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element);
}

console.log(`-----------------------------Array Traversing in reverse order-----------------------------`);

for (let index = array.length - 1; index >= 0; index--) {
    const element = array[index];
    console.log(element);
}

console.log(`-----------------------------Array Traversing Even Index element-----------------------------`);

for (let index = 0; index < array.length; index++) {
    if (index%2==0) {
        const element = array[index];
        console.log(element);
    }
    
}

console.log(`-----------------------------Inserting Element in First and Last Position-----------------------------`);

var array = [10,20,30,50,10,80,20];
array.push(70);
array.push(300,500);
array.unshift(60);
array.unshift(21,41,69);
console.log(array);

console.log(`-----------------------------Removing Element in First and Last Position-----------------------------`);

var array = [10,20,30,50,10,80,20];
array.pop();
array.shift();
console.log(array)

console.log(`---------------------------Getting the Slice from Array------------------------------`);
var array = [10,20,30,50,10,80,20];
console.log(array.slice(3));
console.log(array.slice(1,4));

console.log(`---------------------------Removing the array element using Splice------------------------------`);
var array = [10,20,30,50,10,80,20];
let removedElement = array.splice(4);
console.log(array);
console.log(removedElement);

var array = [10,20,30,50,10,80,20];
let elementRemoved = array.splice(4,2);
console.log(array);
console.log(elementRemoved);


console.log(`---------------------------Inserting the array element using Splice------------------------------`);
var array = [10,20,30,50,10,80,20];
array.splice(3,0,100,200,300,600);
console.log(array);


var array = [10,20,30,50,10,80,20];
array.splice(4,2,33,55,66,77)

console.log(array);

