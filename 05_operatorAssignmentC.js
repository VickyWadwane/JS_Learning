

console.log(`------------------------------Step 1----------------------------`);

var tcsEligibility = function(gradScore,hscScore,sscScore,candidateName){
    var result = (((gradScore >= 70) || (hscScore >=80) || ( sscScore > 90)))? `Congrats ${candidateName} you are eligible for TCS interview`:`Unfortunately you are not eligible for TCS interview`;
    console.log(`Result is :${result}`);
}
tcsEligibility(80,86,90,"Vikrant Wadwane");
tcsEligibility(70,65,55,"Ashish Patil");
tcsEligibility(60,79,88,"Ajim Shikalgar");
