function calculateSleepTime(times) {
    // Validate input without loop or some()
    if (!Array.isArray(times) || times.filter(function(time) { 
        return typeof time !== 'number' || time < 0; 
    }).length > 0) {
        return "Invalid";
    }

    // Sum up all seconds using a loop
    var totalSeconds = 0;
    for (var i = 0; i < times.length; i++) {
        totalSeconds += times[i];
    }

    // Convert to hours, minutes, and seconds
    var hours = Math.floor(totalSeconds / 3600);
    var minutes = Math.floor((totalSeconds % 3600) / 60);
    var seconds = totalSeconds % 60;

    // Return the structured object
    return { hour: hours, minute: minutes, second: seconds };
}

// Example usage:
console.log(calculateSleepTime([3600, 1800, 65])); // { hour: 1, minute: 31, second: 5 }
