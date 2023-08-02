
console.log("----------------------------Step 1-----------------------------");
function employeeDetails(){
    console.log("Employee Name is : Vikrant Bholanath Wadwane");
    console.log("Employee Id is : 76333");
    console.log("Employee Designation is : Software Engineer");
    console.log("Employee Salary is : 6 LPA");
}

employeeDetails();
console.log("-----------------------End Step 1-------------------------------");

console.log("----------------------------Step 2-----------------------------");

function personalDetails(firstName,lastName,collegeName){
    console.log("First Name is : ",firstName);
    console.log("Last Name is :",lastName);
    console.log("College Name is :",collegeName);
}

personalDetails("Vikrant","Wadwane", "Dr_Daulatrao_Aher_College_of_Engineering_Karad");

console.log("-----------------------End Step 2-------------------------------");

console.log("----------------------------Step 3-----------------------------");

function swapValues(value1,value2){
    var a = value1;
    var b = value2;
    console.log("Values Before Swap :",value1,",",value2);

    var c = a;
    a = b;
    b = c;
    console.log("Values After Swap :",a ,",", b);
}

swapValues(true,false);
swapValues('Virat','Anushka');
swapValues(1000,2000);
console.log("-----------------------End Step 3-------------------------------");


console.log("----------------------- Step 4-------------------------------");

function addThreeValues(a,b,c){
    d = a + b + c;
    console.log("Addition of three numbers is :", d);
}

addThreeValues(10.23,600,40);
addThreeValues('Hello','Good','Morning');

console.log("-----------------------End Step 4-------------------------------");

console.log("----------------------- Step 5-------------------------------");

function bankDetails(bankName,accountNumber,location,pinCode){
    console.log("Bank Name is :",bankName);
    console.log("Account Number is :",accountNumber);
    console.log("Location of the Bank is :",location);
    console.log("Pincode of the Bank is :",pinCode);
}

bankDetails("CITI Bank",3425456985,"Pune",431202);
bankDetails("AXIX Bank",7648952463,"Mumbai",441202)
bankDetails("HDFC Bank",8964527894,"Pune",631202,"Open");
