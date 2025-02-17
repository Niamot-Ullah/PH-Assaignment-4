function calculateVAT( price ) {
    if(price >= 0 && typeof price === 'number'){
        let vat = price * 7.5 / 100;
        return vat;
    }
    else{
        return 'Invalid';
    }
}

