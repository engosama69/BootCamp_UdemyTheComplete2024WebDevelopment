/*
Who's Buying Lunch? Code Challenge
You are going to write a function which will select a random name from a list of names. The person selected will have to pay for everybody's food bill.

Important: The output should e returned from the function and you do not need alert, prompt or console.log. The output should match the example output exactly, including capitalisation and punctuation.

Example Input
["Angela", "Ben", "Jenny", "Michael", "Chloe"]

Example Output
Michael is going to buy lunch today!
*/

function whosPaying(names) {
    
    /******Don't change the code above*******/
        
        //Write your code here.
        
        var answer = " is going to buy lunch today!";
        
        var item_index = Math.floor(Math.random() * names.length);
        var selected_item = names[item_index];
        
        answer = selected_item + answer;
        
        return answer;
    
    
    /******Don't change the code below*******/    
}