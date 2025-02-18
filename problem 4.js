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

