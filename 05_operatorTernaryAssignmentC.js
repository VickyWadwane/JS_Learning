console.log(`----------------------Step 1-----------------------`);
function maleMarriageEligibility(gender ,age,boyName){
    var result = gender='Male' && age>=21? `Hey ${boyName} you are eligible for marriage`:`Hey ${boyName} you are not eligible for marriage`;
    console.log(result);
}

maleMarriageEligibility('Male',25,'Billgates');
maleMarriageEligibility('Male',17,'Stew Jobs');

console.log(`----------------------Step 2-----------------------`);
function femaleMarriageEligibility(gender ,age,girlName){
    var result = gender='Female' && age>=18? `Hey ${girlName} you are eligible for marriage`:`Hey ${girlName} you are not eligible for marriage`;
    console.log(result);
}

femaleMarriageEligibility('Female',16,'Jennifer');
femaleMarriageEligibility('Female',27,'Milinda Gates');




