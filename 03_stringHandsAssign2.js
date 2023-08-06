

function stringHandsOn(){
    var str = "     Hey you are doing good, keep it up       ";
    console.log(`--------------------------Step 1------------------------`);
    console.log(`Given string is : ${str}`);
    
    console.log(`--------------------------Step 2------------------------`);
    console.log(`The Length of the String is : ${str.length}`);
    
    console.log(`--------------------------Step 3------------------------`);
    var str = "     Hey you are doing good, keep it up       ";
    var result = str.trim();
    console.log(`The changed length of string after Trim is : ${result.length}`);

    console.log(`--------------------------Step 4------------------------`);
    console.log(`Total number of extra spaces count is : ${str.length - result.length}`);

    console.log(`--------------------------Step 5------------------------`);
    console.log(`First & Last Character after trim is ${result.charAt(0)}, ${result.charAt(result.length-1)}`);

    console.log(`--------------------------Step 6------------------------`);
    var words = result.split(" ");
    console.log(`Count of total words available in the string: ${words.length}`);

    console.log(`--------------------------Step 7------------------------`);
    console.log(`Index of good in string is : ${result.indexOf("good")}`);

    console.log(`--------------------------Step 8------------------------`);
    console.log(`Substring & Slice starting from 22 is : ${result.substring(22)} ----- ${result.slice(22)}`);
    
    console.log(`--------------------------Step 9------------------------`);
    console.log(`Is string ending with word 'UP' : ${result.includes('up')}`);

    console.log(`--------------------------Step 10------------------------`);
    console.log(`Is string starts with word 'Hey' : ${result.includes('hey')}`);
}

stringHandsOn();


