//Javascript Program to Check if a number is Positive, Negative, or //Zero

function check_the_number(number){
    if(number == 0){
        return "It is Zero"
    }else if(number >= 1) {
        return "It is Positive"
    }else {
        return "It is Nagative"
    }
    
}

let number = -0;
console.log(check_the_number(number));
