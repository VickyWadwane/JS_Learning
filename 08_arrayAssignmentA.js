


const arrayFruits = ["Banana","Orange","Apple","Mango","Water Melon"];
let Array1 = arrayFruits[0];
let Array2 = arrayFruits[arrayFruits.length-1]
console.log(`The First & Last Element Of array are: ${Array1} & ${Array2}`);

let Array3 = arrayFruits.unshift("Papaya");
console.log(arrayFruits);

let removedElement = arrayFruits.splice(4,1);
console.log(arrayFruits);

let addElement = arrayFruits.push("Pineapple");
console.log(arrayFruits);

let addElement1 =arrayFruits.splice(4,0,"Dragon Fruit");
console.log(arrayFruits);

arrayFruits[2] = "Kiwi";
console.log(arrayFruits);

for (let index = 1; index < 5; index++) {
    const element = arrayFruits[index];
    console.log(element);
}

console.log(`--------------------------------------------------------`);

let startIndex = arrayFruits.length-3;
for (let i = startIndex; i < arrayFruits.length; i++) {
    console.log(arrayFruits[i]);
    
}
