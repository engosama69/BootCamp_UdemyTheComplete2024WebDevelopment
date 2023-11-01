var output = [];

function fizzBuzz() {
    var input_item = output.length + 1;

    if (input_item % 15 == 0) {
        input_item = "FizzBuzz";
    }
    else {
        if (input_item % 3 === 0) {
            input_item = "Fizz";
        }
        else if (input_item % 5 === 0) {
            input_item = "Buzz"
        }
    }  

    output.push(input_item);
    console.log(output);
}