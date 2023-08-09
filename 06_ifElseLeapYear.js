
var leapYear = function(year){
    if (isNaN(year)) {
        console.log(`The given year ${year} is not valid year`);
    } else if(year%4==0){
        console.log(`The given year ${year} is Leap Year`);
    }else{
        console.log(`The given year ${year} is not a leap year`);
    }
}

leapYear(2020);
leapYear(1999);
leapYear(1600);
leapYear(2022);
leapYear(1945);
leapYear(null);
leapYear(undefined);
leapYear("twenty twenty");
leapYear(NaN);
leapYear(1750);



