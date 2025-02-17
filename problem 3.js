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
