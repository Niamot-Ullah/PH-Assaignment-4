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

