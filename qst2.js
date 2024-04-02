function speedDetector() {
    
    // Initialize demerit points
    let demeritPoints = 0;
    
    // To check if the entry is a number
    if (isNaN(speed) || speed < 0) {
        // If the input is not a positive number, display an error message
         console.log('Invalid entry. Speed should be a positive number.') ;
    } else { 
        if (speed <= 70) {
            console.log ('Ok');
        } else {
            // Calculate demerit points
            demeritPoints = Math.floor((speed - 70) / 5);
            
            // Display demerit points
            console.log('Drivers points = ' + demeritPoints) ;
            
            // Check if license should be suspended
            if (demeritPoints > 12) {
                console.log (', license suspended') ;
            }
        }
    }
}
