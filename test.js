function calculateVAT( price ) {
    if(price >= 0 && typeof price === 'number'){
        let vat = price * 7.5 / 100;
        return vat;
    }
    else{
        return 'Invalid';
    }
}



function  validContact( contact ) {
    if(typeof contact === 'string'){
        if(contact.length === 11 && contact.startsWith('01') && !contact.includes(' ')){
            return true;
        }
        else{
            return false;
        }
    }
    else{
        return 'Invalid'
    }
}



function  willSuccess( marks ) {
    if(Array.isArray(marks)){
        let pass = [];
        let fail = [];
        for(let mark of marks){
            if (mark>=50){
                pass.push(mark);
            }
            else{
                fail.push(mark);
            }
        }
        if(pass.length > fail.length){
            return true;
        }
        else{
            return false;
        }
    }

    else{
        return 'Invalid';
    }
    
}



function  validProposal( person1 , person2 ) {
    if(typeof person1 === 'object' && person1 !== null && !Array.isArray(person1) && typeof person2 === 'object' && person2 !== null && !Array.isArray(person2) ){
        if(person1.gender.toLowerCase() !== person2.gender.toLowerCase() && Math.abs(person1.age - person2.age)<=7){
            return true;
        }
        else{
            return false;
        }
    }
    else{
        return 'Invalid';
    }
}



function  calculateSleepTime( times ) {
    if(Array.isArray(times) && !times.some(function(time){
        return typeof time !== 'number' || time < 0;
    })){

        let totalSeconds = 0;
        for(let time of times){
            totalSeconds+=time;
        }

        let hours = Math.floor(totalSeconds / 3600);
        let minutes = Math.floor((totalSeconds % 3600) / 60);
        let seconds = totalSeconds % 60;

        let result = { hour: hours, minute: minutes, second: seconds};
        return result;
    }
    else{
        return 'Invalid'
    }
}

