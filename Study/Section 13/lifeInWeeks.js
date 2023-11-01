/*
In this challenge, you are going to create a function that tells us how many days, weeks and months we have left if we live until 90 years old.

It will take your current age as the input and console.logs a message with our time left in this format:

'You have x days, y weeks, and z months left.'

Where x, y and z are replaced with the actual calculated numbers.

For this challenge, assume there are 365 days in a year, 52 weeks in a year and 12 months in a year.
*/

function lifeInWeeks(age) {
    
    /************Don't change the code above************/    
        
        //Write your code here.
        var left_years = 90 - age;
        var left_days = left_years * 365;
        var left_weeks = 52 * left_years;
        var left_months = 12 * left_years;
        
        console.log("You have " + left_days + " days, " + left_weeks + " weeks, and " + left_months + " months left.");
        
    /*************Don't change the code below**********/
    }
    
    