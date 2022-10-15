const leapYears = function(year) {
    let divByHundred = year / 100;
    let divByFour = year / 4;
    let divByFourHundred = year / 400;
    if(divByHundred % 1 === 0){
        if(divByFourHundred % 1 === 0){
            return true
        }else {return false;}
    }else if(divByFour % 1 === 0){
        return true;
    }else{return false;}
};

// Do not edit below this line
module.exports = leapYears;
